import React, {useState, useEffect, useRef} from 'react';
import styles from './Canvas.module.css';
import Toolbox from './Toolbox/Toolbox';
import {FaPencilAlt, FaRegSquare, FaDownload, FaRegCircle, FaSlash} from 'react-icons/fa';
import {BsArrowUpRight} from 'react-icons/bs';
import {RiDeleteBinLine} from 'react-icons/ri';
import {GiTriangleTarget} from 'react-icons/gi';
import {BsDiamond} from 'react-icons/bs';

function Canvas() {

    const canvasRef = useRef(null);
    const [context, setContext] = useState();

    /* ----- Feature State ----- */
    const [color, setColor] = useState("#ff0000");
    const [width, setWidth] = useState("1");
    const [opacity, setOpacity] = useState("1");
    const [stroke, setStroke] = useState("none");
    const [fill, setFill] = useState(false);
    const [canvasStates, setCanvasStates] = useState([]);
    const [canvasStateAt, setcanvasStateAt] = useState(-1);

    useEffect(() => {
        setContext(canvasRef.current.getContext('2d'));
    }, [])

    /* ----- Canvas State ----- */
    const [isDrawing, setIsDrawing] = useState(false);
    const [type, setType] = useState("pen");
    const [typeState, setTypeState] = useState(null);
    const [downPoint, setDownPoint] = useState({x: "", y: ""});
    const [mousePosition, setMousePosition] = useState({x: "0", y: "0"});

    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth-50);
    const [canvasHeight, setCanvasHeight] = useState(window.innerHeight-100);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setCanvasWidth(window.innerWidth-50);
            setCanvasHeight(window.innerHeight-100);
            
        })

        return () => {
            window.removeEventListener('resize', () => {});
        }
    })

    function hexToRGB (hex) {
        let r = 0, g = 0, b = 0;

        if(hex.length === 4){
           r = "0x" + hex[1] + hex[1];
           g = "0x" + hex[2] + hex[2];
           b = "0x" + hex[3] + hex[3];
        }else if (hex.length === 7){
           r = "0x" + hex[1] + hex[2];
           g = "0x" + hex[3] + hex[4];
           b = "0x" + hex[5] + hex[6];
        };
     
        return {
           red: +r,
           green: +g,
           blue: +b
        };
    }

    function relativeCoordinatesForEvent(event) {
        return {
          x: event.pageX - 25,
          y: event.pageY - 82,
        };
    }

    function handleMouseDown(event) {

        if(event.button !== 0) {
            return;
        }

        const point = relativeCoordinatesForEvent(event);

        const col = hexToRGB(color);
        context.strokeStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, 1)`;

        if(stroke === 'small') {
            context.setLineDash([5, parseInt(width)+3]);
        } else if(stroke === 'big') {
            context.setLineDash([5, parseInt(width)+10]);
        } else {
            context.setLineDash([]);
        }
        
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = width;

        if(type === 'pen') {
            logicDown(point);
        } else if(type === 'line' || type === 'square' || type === 'circle' || type === 'triangle' || type === 'arrow' || type === 'diamond') {
            setTypeState(context.getImageData(0, 0, canvasWidth, canvasHeight));
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
        } else if(type === 'arrow') {
            arrow(point);
        } else if(type === 'diamond') {
            diamondMove(point);
        }

        event.preventDefault();
    }

    function handleMouseUp(event) {
        setCanvasStates(current => [...current, context.getImageData(0, 0, canvasWidth, canvasHeight)]);
        setcanvasStateAt(current => current+1);

        setIsDrawing(false);
        event.preventDefault();
        setTypeState(null);
        // console.log(context.getImageData(0, 0, canvasWidth, canvasHeight));
    }

    function handleMouseLeave(event) {
        if(isDrawing) {
            setCanvasStates(current => [...current, context.getImageData(0, 0, canvasWidth, canvasHeight)]);
            setcanvasStateAt(current => current+1);
        }

        setIsDrawing(false);
        event.preventDefault();
        setTypeState(null);
    }

    function logicDown(point) {
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(point.x, point.y);
        context.stroke();
    }

    function penMove(point) {
        context.lineTo(point.x, point.y);
        context.stroke();
    }

    function lineMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        context.moveTo(downPoint.x, downPoint.y);
        context.lineTo(point.x, point.y);
        context.moveTo(downPoint.x, downPoint.y);
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
        context.closePath();
        if(fill) {
            const col = hexToRGB(color);
            context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
            context.fill();
        }
        context.stroke();
    }

    function circleMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const x = (point.x+downPoint.x)/2;
        const y = (point.y+downPoint.y)/2;
        const radius = Math.sqrt(Math.pow(downPoint.x - point.x, 2) + Math.pow(downPoint.y - point.y, 2))/2;

        context.arc(x, y, radius, 0, 2*Math.PI);
        context.closePath();
        if(fill) {
            const col = hexToRGB(color);
            context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
            context.fill();
        }
        context.stroke();
    }

    function triangleMove(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        const center_x = (downPoint.x + point.x)/2;
        context.moveTo(center_x, downPoint.y);
        context.lineTo(point.x, point.y);
        context.lineTo(downPoint.x, point.y);
        context.closePath();
        if(fill) {
            const col = hexToRGB(color);
            context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
            context.fill();
        }
        context.stroke();
    }

    function arrow(point) {
        context.putImageData(typeState, 0, 0);
        context.beginPath();
        
        function formula(head, ratio, one, two, three, four, theta)
        {
            return head + ((1/ratio)*( (one-two)*Math.cos(theta) + (three-four)*Math.sin(theta)));
        }

        const x1 = formula(point.x, 3, downPoint.x, point.x, downPoint.y, point.y, Math.PI/4);
        const y1 = formula(point.y, 3, downPoint.y, point.y, point.x, downPoint.x, Math.PI/4);
        const x2 = formula(point.x, 3, downPoint.x, point.x, point.y, downPoint.y, Math.PI/4);
        const y2 = formula(point.y, 3, downPoint.y, point.y, downPoint.x, point.x, Math.PI/4);

        context.moveTo(downPoint.x, downPoint.y);
        context.lineTo(downPoint.x, downPoint.y);
        context.lineTo(point.x, point.y);
        context.lineTo(x1, y1);
        context.moveTo(point.x, point.y);
        context.lineTo(x2, y2);
        context.moveTo(point.x, point.y);
        context.moveTo(downPoint.x, downPoint.y);
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
        context.closePath();
        if(fill) {
            const col = hexToRGB(color);
            context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
            context.fill();
        }
        context.stroke();
    }

    function download() {
        let link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvasRef.current.toDataURL("image/png");
        link.click();
    }

    function clear() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        setCanvasStates([]);
        setcanvasStateAt(-1);
    }

    function undo() {
        if(canvasStateAt > 0) {
            context.putImageData(canvasStates[canvasStateAt-1], 0, 0);
            setcanvasStateAt(current => current-1);
        } else if(canvasStateAt === 0) {
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            setcanvasStateAt(current => current-1);
        }
    }

    function redo() {
        if(canvasStateAt+1 < canvasStates.length) {
            context.putImageData(canvasStates[canvasStateAt+1], 0, 0);
            setcanvasStateAt(current => current+1);
        }
    }

    return (
        <>
            <Toolbox
                color={color}
                setColor={setColor}
                width={width}
                setWidth={setWidth}
                opacity={opacity}
                setOpacity={setOpacity}
                stroke={stroke}
                setStroke={setStroke}
                fill={fill}
                setFill={setFill}
                undo={undo}
                redo={redo}
                canvasStateAt={canvasStateAt}
                canvasStates={canvasStates}
            />
            
            {/* ----- Download & Clear ----- */}
            <div className={`${styles.feature_container} ${styles.download_clear_container}`}>
                <div className={`${styles.feature} ${styles.download_clear_buttons} ${styles.btn_download}`}
                    onClick={download}
                ><FaDownload size={15}/></div>
                <div className={`${styles.feature} ${styles.download_clear_buttons} ${styles.btn_clear}`}
                    onClick={clear}
                ><RiDeleteBinLine size={15}/></div>
            </div>

            {/* ----- Shapes ----- */}
            <div className={`${styles.feature_container} ${styles.shapes}`}>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'pen' && styles.active_shape_box}`}
                onClick={() => setType("pen")}>
                    <FaPencilAlt size={15}/>
                </div>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'line' && styles.active_shape_box}`}
                onClick={() => setType("line")}>
                    <FaSlash size={15}/>
                </div>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'square' && styles.active_shape_box}`}
                onClick={() => setType("square")}>
                    <FaRegSquare size={15}/>
                </div>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'circle' && styles.active_shape_box}`}
                onClick={() => setType("circle")}>
                    <FaRegCircle size={15}/>
                </div>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'triangle' && styles.active_shape_box}`}
                onClick={() => setType("triangle")}>
                    <GiTriangleTarget size={15}/>
                </div>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'arrow' && styles.active_shape_box}`}
                onClick={() => setType("arrow")}>
                    <BsArrowUpRight size={15}/>
                </div>
                <div className={`${styles.feature} ${styles.shape_box} ${type === 'diamond' && styles.active_shape_box}`}
                onClick={() => setType("diamond")}>
                    <BsDiamond size={15}/>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                width={`${canvasWidth}`}
                height={`${canvasHeight}`}
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
