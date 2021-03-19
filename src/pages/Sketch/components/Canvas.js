import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Canvas.module.css";
import Toolbox from "./Toolbox/Toolbox";
import { FaDownload, FaStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import IconsLibrary from "./IconLibrary/IconsLibrary";

const Mousetrap = require("mousetrap");

function Canvas() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const iconLibRef = useRef(null);
  const [context, setContext] = useState();

  /* ----- Feature State ----- */
  const [color, setColor] = useState("#000000");
  const [background, setBackground] = useState("#ffffff");
  const [width, setWidth] = useState("1");
  const [opacity, setOpacity] = useState("1");
  const [stroke, setStroke] = useState("none");
  const [fill, setFill] = useState("false");
  const [canvasStates, setCanvasStates] = useState([]);
  const [canvasStateAt, setcanvasStateAt] = useState(-1);
  const [fillImage, setFillImage] = useState(null);
  const [edge, setEdge] = useState("round");
  // For Font
  const [text, setText] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [fontSize, setFontSize] = useState("1");
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontFamily, setFontFamily] = useState("cursive");

  useEffect(() => {
    setContext(canvasRef.current.getContext("2d"));
  }, []);

  /* ----- Canvas State ----- */
  const [isDrawing, setIsDrawing] = useState(false);
  const [type, setType] = useState("pen");
  const [typeState, setTypeState] = useState(null);
  const [downPoint, setDownPoint] = useState({ x: "", y: "" });
  const [mousePosition, setMousePosition] = useState({ x: "0", y: "0" });

  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth - 50);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight - 100);

  const handleResizeListener = () => {
    setCanvasWidth(window.innerWidth - 50);
    setCanvasHeight(window.innerHeight - 100);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeListener);
    return () => {
      window.removeEventListener("resize", handleResizeListener);
    };
  });

  // useEffect(() => {
  //     console.log("canvasStateAt: ", canvasStateAt);
  //     console.log("canvasStates: ", canvasStates);
  // }, [canvasStateAt, canvasStates])

  function hexToRGB(hex) {
    let r = 0,
      g = 0,
      b = 0;

    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }

    return {
      red: +r,
      green: +g,
      blue: +b,
    };
  }

  function relativeCoordinatesForEvent(event) {
    return {
      x: event.pageX - 25,
      y: event.pageY - 82,
    };
  }

  function handleMouseDown(event) {
    if (event.button !== 0) {
      return;
    }

    const point = relativeCoordinatesForEvent(event);

    const col = hexToRGB(color);
    context.strokeStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, 1)`;

    if (stroke === "small") {
      context.setLineDash([5, parseInt(width) + 3]);
    } else if (stroke === "big") {
      context.setLineDash([5, parseInt(width) + 10]);
    } else {
      context.setLineDash([]);
    }

    context.lineJoin = edge;
    context.lineCap = "round";
    context.lineWidth = width;

    if (type === "pen") {
      logicDown(point);
    } else if (["line", "square", "circle", "triangle", "arrow", "diamond"].includes(type)) {
      setTypeState(context.getImageData(0, 0, canvasWidth, canvasHeight));
      logicDown(point);
      setDownPoint({ x: point.x, y: point.y });
    } else if (type === "text") {
      setDownPoint({ x: point.x, y: point.y });

      if (textRef.current) {
        if (isWriting) {
          context.font = `${fontStyle} ${fontSize}rem ${fontFamily}`;
          context.fillStyle = color;
          context.fillText(
            text,
            downPoint.x,
            downPoint.y + parseInt(document.getElementById("canvas-text-input").offsetHeight) - 5
          );
          setIsWriting(false);
          setText("");
        } else {
          setIsWriting(true);
        }
        textRef.current.style.top = `${point.y}px`;
        textRef.current.style.left = `${point.x}px`;
      } else {
        setIsWriting(current => !current);
      }
    }

    setIsDrawing(true);

    event.preventDefault();
  }

  function handleMouseMove(event) {
    const point = relativeCoordinatesForEvent(event);
    setMousePosition(point);

    if (!isDrawing) {
      return;
    }

    switch (type) {
      case "pen":
        penMove(point);
        break;
      case "line":
        lineMove(point);
        break;
      case "square":
        squareMove(point);
        break;
      case "circle":
        circleMove(point);
        break;
      case "triangle":
        triangleMove(point);
        break;
      case "arrow":
        arrow(point);
        break;
      case "diamond":
        diamondMove(point);
        break;
      default:
        break;
    }

    event.preventDefault();
  }
  function handleMouseUp(event) {
    const canvasStatesCopy = [...canvasStates];
    if (canvasStateAt + 1 < canvasStatesCopy.length) {
      while (canvasStateAt + 1 !== canvasStatesCopy.length) {
        canvasStatesCopy.pop();
      }
    }

    setCanvasStates(current => [...canvasStatesCopy, context.getImageData(0, 0, canvasWidth, canvasHeight)]);
    setcanvasStateAt(current => current + 1);

    setIsDrawing(false);
    event.preventDefault();
    setTypeState(null);
    // console.log(context.getImageData(0, 0, canvasWidth, canvasHeight));
  }

  function handleMouseLeave(event) {
    if (isDrawing) {
      const canvasStatesCopy = [...canvasStates];
      if (canvasStateAt + 1 < canvasStatesCopy.length) {
        while (canvasStateAt + 1 !== canvasStatesCopy.length) {
          canvasStatesCopy.pop();
        }
      }

      setCanvasStates(current => [...canvasStatesCopy, context.getImageData(0, 0, canvasWidth, canvasHeight)]);
      setcanvasStateAt(current => current + 1);
    }
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
    if (fill === "true") {
      const col = hexToRGB(color);
      context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
      context.fill();
    } else if (fill === "pattern" && fillImage) {
      let img = new Image();
      img.onload = "start";
      img.src = fillImage;

      let pattern = context.createPattern(img, "repeat");
      context.fillStyle = pattern;
      context.fill();
    }
    context.stroke();
  }

  function circleMove(point) {
    context.putImageData(typeState, 0, 0);
    context.beginPath();
    const x = (point.x + downPoint.x) / 2;
    const y = (point.y + downPoint.y) / 2;
    const radius = Math.sqrt(Math.pow(downPoint.x - point.x, 2) + Math.pow(downPoint.y - point.y, 2)) / 2;

    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    if (fill === "true") {
      const col = hexToRGB(color);
      context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
      context.fill();
    } else if (fill === "pattern" && fillImage) {
      let img = new Image();
      img.onload = "start";
      img.src = fillImage;

      let pattern = context.createPattern(img, "repeat");
      context.fillStyle = pattern;
      context.fill();
    }
    context.stroke();
  }

  function triangleMove(point) {
    context.putImageData(typeState, 0, 0);
    context.beginPath();
    const center_x = (downPoint.x + point.x) / 2;
    context.moveTo(center_x, downPoint.y);
    context.lineTo(point.x, point.y);
    context.lineTo(downPoint.x, point.y);
    context.closePath();
    if (fill === "true") {
      const col = hexToRGB(color);
      context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
      context.fill();
    } else if (fill === "pattern" && fillImage) {
      let img = new Image();
      img.onload = "start";
      img.src = fillImage;

      let pattern = context.createPattern(img, "repeat");
      context.fillStyle = pattern;
      context.fill();
    }
    context.stroke();
  }

  function arrow(point) {
    context.putImageData(typeState, 0, 0);
    context.beginPath();

    function formula(head, ratio, one, two, three, four, theta) {
      return head + (1 / ratio) * ((one - two) * Math.cos(theta) + (three - four) * Math.sin(theta));
    }

    const x1 = formula(point.x, 3, downPoint.x, point.x, downPoint.y, point.y, Math.PI / 4);
    const y1 = formula(point.y, 3, downPoint.y, point.y, point.x, downPoint.x, Math.PI / 4);
    const x2 = formula(point.x, 3, downPoint.x, point.x, point.y, downPoint.y, Math.PI / 4);
    const y2 = formula(point.y, 3, downPoint.y, point.y, downPoint.x, point.x, Math.PI / 4);

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
    const center_x = (downPoint.x + point.x) / 2;
    const center_y = (downPoint.y + point.y) / 2;

    context.moveTo(center_x, downPoint.y);
    context.lineTo(point.x, center_y);
    context.lineTo(center_x, point.y);
    context.lineTo(downPoint.x, center_y);
    context.lineTo(center_x, downPoint.y);
    context.closePath();
    if (fill === "true") {
      const col = hexToRGB(color);
      context.fillStyle = `rgba(${col.red}, ${col.green}, ${col.blue}, ${opacity})`;
      context.fill();
    } else if (fill === "pattern" && fillImage) {
      let img = new Image();
      img.onload = "start";
      img.src = fillImage;

      let pattern = context.createPattern(img, "repeat");
      context.fillStyle = pattern;
      context.fill();
    }
    context.stroke();
  }

  function download() {
    let link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  }

  function clear() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    setCanvasStates([]);
    setcanvasStateAt(-1);
    setTypeState("");
  }

  function toggleIconLib() {
    //.iconLibContainer--open
    if (iconLibRef.current) {
      iconLibRef.current.classList.toggle(`${styles["iconLibContainer--open"]}`);
    }
  }

  const undo = useCallback(() => {
    if (canvasStateAt > 0) {
      context.putImageData(canvasStates[canvasStateAt - 1], 0, 0);
      setcanvasStateAt(current => current - 1);
    } else if (canvasStateAt === 0) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      setcanvasStateAt(current => current - 1);
    }
  }, [canvasStateAt, canvasStates, canvasWidth, canvasHeight, context]);

  const redo = useCallback(() => {
    if (canvasStateAt + 1 < canvasStates.length) {
      context.putImageData(canvasStates[canvasStateAt + 1], 0, 0);
      setcanvasStateAt(current => current + 1);
    }
  }, [canvasStateAt, canvasStates, context]);

  useEffect(() => {
    Mousetrap.bind("ctrl+z", () => undo());
    Mousetrap.bind("ctrl+y", () => redo());
  }, [redo, undo]);

  useEffect(() => {
    if (context) {
      context.beginPath();
      context.rect(0, 0, canvasWidth, canvasHeight);
      context.fillStyle = background;
      context.fill();
    }
  }, [background, context, canvasWidth, canvasHeight]);

  return (
    <>
      <Toolbox
        color={color}
        setColor={setColor}
        background={background}
        setBackground={setBackground}
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
        type={type}
        setType={setType}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        setFillImage={setFillImage}
        edge={edge}
        setEdge={setEdge}
      />

      {/* ----- Download & Clear----- */}
      <div className={`${styles.feature_container} ${styles.download_clear_container}`}>
        <label htmlFor="sketch-dcd-download" title="Clear Sketch">
          <div className={`${styles.feature}`} onClick={clear} id="sketch-dcd-download">
            <RiDeleteBinLine size={15} />
          </div>
        </label>
        <label htmlFor="sketch-dcd-clear" title="Download Sketch">
          <div className={`${styles.feature}`} onClick={download} id="sketch-dcd-clear">
            <FaDownload size={15} />
          </div>
        </label>
        <label htmlFor="sketch-dcd-addicon" title="Add Icon">
          <div className={`${styles.feature}`} onClick={toggleIconLib} id="sketch-dcd-clear">
            <FaStar size={15} />
          </div>
        </label>
        <div ref={iconLibRef} className={styles.iconLibContainer}>
          <IconsLibrary toggleOpen={toggleIconLib} />
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
      <div className={styles.mousePosition}>
        Mouse Position: (x, y) = ({mousePosition.x}, {mousePosition.y}){" "}
      </div>

      {/* ----- Text ----- */}
      <div style={{ height: canvasHeight, width: canvasWidth }} className={styles.text_container}>
        <div className={`${styles.text}`} ref={textRef}>
          {type === "text" && isWriting && (
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              autoFocus
              id="canvas-text-input"
              style={{
                color: color,
                fontSize: `${fontSize}rem`,
                fontStyle: `${fontStyle === "bold" ? "normal" : fontStyle}`,
                fontFamily: fontFamily,
                fontWeight: `${fontStyle !== "bold" ? "normal" : fontStyle}`,
              }}
            />
          )}
        </div>
      </div>
      {/* icon library */}
    </>
  );

}


export default Canvas;
