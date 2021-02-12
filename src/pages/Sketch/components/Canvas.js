import React, {useState, useEffect, useRef} from 'react';
import styles from './Canvas.module.css';
import Toolbox from './Toolbox/Toolbox';
import {FaPencilAlt, FaRegSquare, FaDownload, FaRegCircle, FaSlash} from 'react-icons/fa';
import {BsArrowUpDown, BsArrowLeftRight} from 'react-icons/bs';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {GiTriangleTarget} from 'react-icons/gi';
import {BsDiamond} from 'react-icons/bs';

function Canvas() {

    const canvasRef = useRef(null);
    const [context, setContext] = useState();

    const [color, setColor] = useState("#ff0000");
    const [width, setWidth] = useState("1");

    useEffect(() => {
        setContext(canvasRef.current.getContext('2d'));
    }, [])

    const [isDrawing, setIsDrawing] = useState(false);
    const [type, setType] = useState("pen");
    const [typeState, setTypeState] = useState(null);
    const [downPoint, setDownPoint] = useState({x: "", y: ""});
    const [mousePosition, setMousePosition] = useState({x: "0", y: "0"});

    function relativeCoordinatesForEvent(event) {
        return {
          x: event.pageX - canvasRef.current.offsetLeft,
          y: event.pageY - canvasRef.current.offsetTop,
        };
    }

    function handleMouseDown(event) {

        if(event.button !== 0) {
            return;
        }

        const point = relativeCoordinatesForEvent(event);

        if(type === 'pen') {
            logicDown(point);
        } else if(type === 'line' || type === 'square' || type === 'circle' || type === 'triangle' || type === 'arrow_up' || type === 'arrow_right' || type === 'diamond') {
            setTypeState(context.getImageData(0, 0, 700, 500));
            logicDown(point);
            setDownPoint({x: point.x, y:point.y});
        }

        setIsDrawing(true);
        
        event.preventDefault();
    }

    function handleMouseMove(event) {
        const point = relativeCoordinatesForEvent(event);
        setMousePosition(point);

        if(!isDrawing) {
            return;
        }

        if(type === 'pen') {
            penMove(point);
        } else if(type === 'line') {
            lineMove(point);
        } else if(type === 'square') {
            squareMove(point);
        } else if(type === 'circle') {
            circleMove(point);
        } else if(type === 'triangle') {
            triangleMove(point);
        } else if(type === 'arrow_up') {
            arrowUpMove(point);
        } else if(type === 'arrow_right') {
            arrowRightMove(point);
        } else if(type === 'diamond') {
            diamondMove(point);
        }

        event.preventDefault();
    }

    function handleMouseUp(event) {
        setIsDrawing(false);
        event.preventDefault();
        setTypeState(null);
    }

    function handleMouseLeave(event) {
        setIsDrawing(false);
        event.preventDefault();
        setTypeState(null);
    }

    function logicDown(point) {
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(point.x, point.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.stroke();
    }

    function penMove(point) {
        context.lineTo(point.x, point.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.stroke();
    }

    function lineMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        context.moveTo(downPoint.x, downPoint.y);
        context.lineTo(downPoint.x, downPoint.y);
        context.lineTo(point.x, point.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function squareMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        context.moveTo(downPoint.x, downPoint.y);
        context.lineTo(downPoint.x, downPoint.y);
        context.lineTo(point.x, downPoint.y);
        context.lineTo(point.x, point.y);
        context.lineTo(downPoint.x, point.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function circleMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const x = (point.x+downPoint.x)/2;
        const y = (point.y+downPoint.y)/2;
        const radius = Math.sqrt(Math.pow(downPoint.x - point.x, 2) + Math.pow(downPoint.y - point.y, 2))/2;
        context.arc(x, y, radius, 0, 2*Math.PI);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function triangleMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const center_x = (downPoint.x + point.x)/2;
        context.moveTo(center_x, downPoint.y);
        context.lineTo(point.x, point.y);
        context.lineTo(downPoint.x, point.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function arrowUpMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const center_x = (downPoint.x + point.x)/2;
        const center_y = (downPoint.y + point.y)/2;

        context.moveTo(center_x, downPoint.y);
        context.lineTo(point.x, center_y);
        context.moveTo(center_x, downPoint.y);
        context.lineTo(downPoint.x, center_y);
        context.moveTo(center_x, downPoint.y);
        context.lineTo(center_x, point.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function arrowRightMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const center_x = (downPoint.x + point.x)/2;
        const center_y = (downPoint.y + point.y)/2;

        context.moveTo(point.x, center_y);
        context.lineTo(center_x, downPoint.y);
        context.moveTo(point.x, center_y);
        context.lineTo(center_x, point.y);
        context.moveTo(point.x, center_y);
        context.lineTo(downPoint.x, center_y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function diamondMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const center_x = (downPoint.x + point.x)/2;
        const center_y = (downPoint.y + point.y)/2;

        context.moveTo(center_x, downPoint.y);
        context.lineTo(point.x, center_y);
        context.lineTo(center_x, point.y);
        context.lineTo(downPoint.x, center_y);
        context.lineTo(center_x, downPoint.y);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;
        context.closePath();
        context.stroke();
    }

    function download() {
        let link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvasRef.current.toDataURL("image/png");
        link.click();
    }

    function clear() {
        context.clearRect(0, 0, 700, 500);
    }

    return (
        <>
            <Toolbox
                color={color}
                setColor={setColor}
                width={width}
                setWidth={setWidth}
            />
            <div className={styles.options}>
                <div className={styles.shapes}>
                    <div className={`${styles.shape_box} ${type === 'pen' && styles.active_shape_box}`}
                    onClick={() => setType("pen")}>
                        <FaPencilAlt/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'line' && styles.active_shape_box}`}
                    onClick={() => setType("line")}>
                        <FaSlash/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'square' && styles.active_shape_box}`}
                    onClick={() => setType("square")}>
                        <FaRegSquare/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'circle' && styles.active_shape_box}`}
                    onClick={() => setType("circle")}>
                        <FaRegCircle/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'triangle' && styles.active_shape_box}`}
                    onClick={() => setType("triangle")}>
                        <GiTriangleTarget/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'arrow_up' && styles.active_shape_box}`}
                    onClick={() => setType("arrow_up")}>
                        <BsArrowUpDown/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'arrow_right' && styles.active_shape_box}`}
                    onClick={() => setType("arrow_right")}>
                        <BsArrowLeftRight/>
                    </div>
                    <div className={`${styles.shape_box} ${type === 'diamond' && styles.active_shape_box}`}
                    onClick={() => setType("diamond")}>
                        <BsDiamond/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.btn_download}`}
                        onClick={download}
                    ><FaDownload/></button>
                    <button className={`${styles.button} ${styles.btn_clear}`}
                        onClick={clear}
                    ><RiDeleteBin6Line/></button>
                </div>
            </div>
            <canvas
                ref={canvasRef}
                width="700px"
                height="500px"
                className={styles.canvas}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}    
            />
            <div className={styles.mousePosition}>Mouse Position: (x, y) = ({mousePosition.x}, {mousePosition.y}) </div>
        </>
    )
}

export default Canvas
