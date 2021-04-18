import React from "react";
import styles from "./toolbox.module.scss";
import { AiOutlineLine, AiOutlineSmallDash, AiOutlineDash } from "react-icons/ai";
import { FaRegSquare, FaItalic, FaBold, FaPencilAlt, FaRegCircle, FaSlash, FaFont } from "react-icons/fa";
import { MdUndo, MdRedo } from "react-icons/md";
import { GiTriangleTarget } from "react-icons/gi";
import { BiShapeTriangle } from "react-icons/bi";
import { BsFonts, BsArrowUpRight, BsDiamond } from "react-icons/bs";

function Toolbox({
  color,
  setColor,
  fillColor,
  setFillColor,
  fillOpacity,
  setFillOpacity,
  setBowing,
  setFillStyle,
  setFillWeight,
  setHachureAngle,
  setHachureGap,
  bowing,
  fillStyle,
  fillWeight,
  hachureAngle,
  hachureGap,
  background,
  setBackground,
  width,
  setWidth,
  stroke,
  setStroke,
  roughness,
  setRoughness,
  undo,
  redo,
  canvasStateAt,
  canvasStates,
  type,
  setType,
  fontSize,
  setFontSize,
  fontStyle,
  setFontStyle,
  fontFamily,
  setFontFamily,
  edge,
  setEdge,
}) {
  return (
    <div className={styles.canvas_toolbox}>
      <Feature title="Shapes">
        <Shape type_="pen" id="sketch-shapes-pen" label="Pen">
          <FaPencilAlt size={12} />
        </Shape>
        <Shape type_="line" id="sketch-shapes-line" label="Line">
          <FaSlash size={10} />
        </Shape>
        <Shape type_="square" id="sketch-shapes-square" label="Square">
          <FaRegSquare size={10} />
        </Shape>
        <Shape type_="circle" id="sketch-shapes-circle" label="Circle">
          <FaRegCircle size={10} />
        </Shape>
        <Shape type_="triangle" id="sketch-shapes-triangle" label="Triangle">
          <GiTriangleTarget size={12} />
        </Shape>
        <Shape type_="arrow" id="sketch-shapes-arrow" label="Arrow">
          <BsArrowUpRight size={12} />
        </Shape>
        <Shape type_="diamond" id="sketch-shapes-diamond" label="Diamond">
          <BsDiamond size={10} />
        </Shape>
        <Shape type_="text" id="sketch-shapes-text" label="Text">
          <FaFont size={10} />
        </Shape>
        <Shape type_="biShapeTriangle" id="sketch-shapes-biShapeTriangle" label="Bi Shape Triangle">
          <BiShapeTriangle size={12} />
        </Shape>
      </Feature>

      <Feature title="Canvas">
        <div className={styles.colorPicker}>
          <input type="color" name="canvas_bg_color" value={background} onChange={e => setBackground(e.target.value)} />
          <input
            className={styles.hexInput}
            placeholder="#"
            type="text"
            value={background}
            onInput={e => setBackground(e.target.value)}
          />
        </div>
      </Feature>

      <Feature title="Stroke">
        <div className={styles.colorPicker}>
          <input type="color" name="canvas_pen_color" value={color} onChange={e => setColor(e.target.value)} />
          <input
            className={styles.hexInput}
            placeholder="#"
            type="text"
            value={color}
            onInput={e => setColor(e.target.value)}
          />
        </div>
      </Feature>
      <Feature title="Fill Style">
        <select name="shape_fill_style" value={fillStyle} onChange={e => setFillStyle(e.target.value)}>
          <option value="none">none</option>
          <option value="solid">solid</option>
          <option value="hachure">hachure</option>
          <option value="zigzag">zigzag</option>
          <option value="cross-hatch">cross-hatch</option>
          <option value="dots">dots</option>
          <option value="dashed">dashed</option>
          <option value="zigzag-line">zigzag-line</option>
        </select>
      </Feature>

      {type !== "text" && (
        <>
          {fillStyle !== "none" && (
            <>
              <Feature title="Fill Color">
                <div className={styles.colorPicker}>
                  <input
                    type="color"
                    name="canvas_pen_color"
                    value={fillColor}
                    onChange={e => setFillColor(e.target.value)}
                  />
                  <input
                    className={styles.hexInput}
                    placeholder="#"
                    type="text"
                    value={fillColor}
                    onInput={e => setFillColor(e.target.value)}
                  />
                </div>
              </Feature>
              <Feature classname={styles.sliderWrapper} title={`Fill Opacity`}>
                <input
                  className={styles.slider}
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={fillOpacity}
                  onChange={e => setFillOpacity(e.target.value)}
                />
              </Feature>
            </>
          )}
          {!["none", "solid"].includes(fillStyle) && (
            <>
              <Feature classname={styles.sliderWrapper} title={`Fill Weight`}>
                <input
                  className={styles.slider}
                  type="range"
                  min={1}
                  max={10}
                  step={0.1}
                  value={fillWeight}
                  onChange={e => setFillWeight(e.target.value)}
                />
              </Feature>
              <Feature classname={styles.sliderWrapper} title={`Fill Hachure Angle`}>
                <input
                  className={styles.slider}
                  type="range"
                  min={0}
                  max={360}
                  step={1}
                  value={hachureAngle + 180}
                  onChange={e => setHachureAngle(e.target.value - 180)}
                />
              </Feature>
              <Feature classname={styles.sliderWrapper} title={`Fill Hachure Gap`}>
                <input
                  className={styles.slider}
                  type="range"
                  min={1}
                  max={10}
                  step={0.1}
                  value={hachureGap}
                  onChange={e => setHachureGap(e.target.value)}
                />
              </Feature>
            </>
          )}
          <Feature classname={styles.sliderWrapper} title={`Roughness`}>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={5}
              step={0.1}
              value={roughness}
              onChange={e => setRoughness(e.target.value)}
            />
          </Feature>
          <Feature classname={styles.sliderWrapper} title={`Stroke Bowing`}>
            <input
              className={styles.slider}
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={bowing}
              onChange={e => setBowing(e.target.value)}
            />
          </Feature>
          <Feature title="Stroke Width"> <select name="canvas_pen_width" value={width} onChange={e => setWidth(e.target.value)}>
              <option value="1">1px</option>
              <option value="2">2px</option>
              <option value="3">3px</option>
              <option value="4">4px</option>
              <option value="5">5px</option>
              <option value="6">6px</option>
              <option value="7">7px</option>
              <option value="8">8px</option>
              <option value="9">9px</option>
              <option value="10">10px</option>
              <option value="11">11px</option>
            </select>
          </Feature>
          <Feature title="Stroke Style">
            <div
              className={`${styles.feature_box} ${stroke === "none" && styles.active_feature_box}`}
              onClick={() => setStroke("none")}
            >
              <AiOutlineLine size={20} />
            </div>
            <div
              className={`${styles.feature_box} ${stroke === "small" && styles.active_feature_box}`}
              onClick={() => setStroke("small")}
            >
              <AiOutlineSmallDash size={20} />
            </div>
            <div
              className={`${styles.feature_box} ${stroke === "big" && styles.active_feature_box}`}
              onClick={() => setStroke("big")}
            >
              <AiOutlineDash size={20} />
            </div>
          </Feature>
          <Feature title="Edge">
            <select value={edge} onChange={e => setEdge(e.target.value)}>
              <option value="round">Round</option>
              <option value="bevel">Bevel</option>
              <option value="miter">Miter</option>
            </select>
          </Feature>
        </>
      )}
      <Feature classname={styles.sliderWrapper} title={`Font [ ${fontSize} ]`}>
        <input
          className={styles.slider}
          type="range"
          min="10"
          max="20"
          value={fontSize * 10}
          onChange={e => setFontSize(e.target.value / 10)}
        />
      </Feature>
      <Feature title="Font Style">
        <div
          className={`${styles.feature_box} ${fontStyle === "normal" && styles.active_feature_box}`}
          onClick={() => setFontStyle("normal")}
        >
          <BsFonts size={20} />
        </div>
        <div
          className={`${styles.feature_box} ${fontStyle === "italic" && styles.active_feature_box}`}
          onClick={() => setFontStyle("italic")}
        >
          <FaItalic size={15} />
        </div>
        <div
          className={`${styles.feature_box} ${fontStyle === "bold" && styles.active_feature_box}`}
          onClick={() => setFontStyle("bold")}
        >
          <FaBold size={15} />
        </div>
      </Feature>
      <Feature title="Font Family">
        <select value={fontFamily} onChange={e => setFontFamily(e.target.value)}>
          <option value="cursive">Cursive</option>
          <option value="Courier New">Courier New</option>
          <option value="serif">Serif</option>
        </select>
      </Feature>

      <Feature title="undo">
        <div
          className={styles.feature_box}
          onClick={() => undo()}
          style={{ cursor: `${canvasStateAt === -1 ? "not-allowed" : "pointer"}` }}
        >
          <MdUndo size={20} />
        </div>
        <div
          className={styles.feature_box}
          onClick={() => redo()}
          style={{ cursor: `${canvasStateAt === canvasStates.length - 1 ? "not-allowed" : "pointer"}` }}
        >
          <MdRedo size={20} />
        </div>
      </Feature>
    </div>
  );

  function Feature({ title, children, classname }) {
    return (
      <div className={styles.feature + ` ${classname}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{children}</div>
      </div>
    );
  }

  function Shape({ type_, id, label, children }) {
    return (
      <label style={{ marginTop: "3px" }} htmlFor={id} title={label}>
        <div
          className={`${styles.feature} ${type === type_ && styles.active_feature}`}
          onClick={() => setType(type_)}
          id={id}
        >
          {children}
        </div>
      </label>
    );
  }
}

export default Toolbox;
