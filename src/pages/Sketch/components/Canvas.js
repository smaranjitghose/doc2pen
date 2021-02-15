import React, {useState, useEffect, useRef} from 'react';
import styles from './Canvas.module.css';

function Canvas() {

    const canvasRef = useRef(null);
    const [context, setContext] = useState();

    function drawLine(info, style = {}) {
        const { x, y, x1, y1 } = info;
        const { color = 'tomato', width = 1 } = style;
     
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineWidth = width;
        
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x1, y1);
        context.closePath();
        
        context.stroke();
      }

    useEffect(() => {
        setContext(canvasRef.current.getContext('2d'));
    }, [])

    const [isDrawing, setIsDrawing] = useState(false);
    const [currentPoint, setCurrentPoint] = useState({x: "", y: ""});
    const [mousePosition, setMousePosition] = useState({x: "0", y: "0"});

    function relativeCoordinatesForEvent(event) {
        return {
          x: event.pageX - canvasRef.current.offsetLeft,
          y: event.pageY - canvasRef.current.offsetTop,
        };
    }

    function handleMouseDown(event) {
        console.log(event);

        if(event.button !== 0) {
            return;
        }

        const point = relativeCoordinatesForEvent(event);

        setIsDrawing(true);
        setCurrentPoint(point);
    }

    function handleMouseMove(event) {
        const point = relativeCoordinatesForEvent(event);
        setMousePosition(point);

        if(!isDrawing) {
            return;
        }

        drawLine(
            {
                x: currentPoint.x,
                y: currentPoint.y,
                x1: point.x,
                y1: point.y 
            }
        )
        setCurrentPoint(point);
    }

    function handleMouseUp() {
        setIsDrawing(false);
    }

    function handleMouseLeave() {
        setIsDrawing(false);
    }

    function clear() {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    function download() {
        let link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvasRef.current.toDataURL("image/png");
        link.click();
    }

    return (
        <>
            <div className={styles.options}>
                <button className={`${styles.buttons} ${styles.btn_download}`}
                    onClick={download}
                >Download</button>
                <button className={`${styles.buttons} ${styles.btn_clear}`}
                    onClick={clear}
                >Clear</button>
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
