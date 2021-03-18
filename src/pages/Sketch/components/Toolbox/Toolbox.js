import React from 'react';
import styles from './Toolbox.module.css';
import stylesShapes from '../Canvas.module.css'
import {AiOutlineLine, AiOutlineSmallDash, AiOutlineDash} from 'react-icons/ai';
import {FaRegSquare, FaSquare, FaItalic, FaBold} from 'react-icons/fa';
import {MdUndo, MdRedo} from 'react-icons/md';
import {BsFonts} from 'react-icons/bs';
import {FaImage} from 'react-icons/fa';
import {FaPencilAlt, FaRegCircle, FaSlash, FaFont} from 'react-icons/fa';
import {BsArrowUpRight} from 'react-icons/bs';
import {GiTriangleTarget} from 'react-icons/gi';
import {BsDiamond} from 'react-icons/bs';

function Toolbox({
        color,
        setColor,
        background,
        setBackground,
        width,
        setWidth,
        opacity,
        setOpacity,
        stroke,
        setStroke,
        fill,
        setFill,
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
        setFillImage,
        edge,
        setEdge
    }) {

    return (
        <div className={styles.canvas_toolbox}>
            <Feature title="Shapes">
                <Shape type_="pen" id="sketch-shapes-pen" label="Pen">
                    <FaPencilAlt size={15}/>
                </Shape>
                <Shape type_="line" id="sketch-shapes-line" label="Line">
                    <FaSlash size={15}/>
                </Shape>
                <Shape type_="square" id="sketch-shapes-square" label="Square">
                    <FaRegSquare size={15}/>
                </Shape>
                <Shape type_="circle" id="sketch-shapes-circle" label="Circle">
                    <FaRegCircle size={15}/>
                </Shape>
                <Shape type_="triangle" id="sketch-shapes-triangle" label="Triangle">
                    <GiTriangleTarget size={15}/>
                </Shape>
                <Shape type_="arrow" id="sketch-shapes-arrow" label="Arrow">
                    <BsArrowUpRight size={15}/>
                </Shape>
                <Shape type_="diamond" id="sketch-shapes-diamond" label="Diamond">
                    <BsDiamond size={15}/>
                </Shape>
                <Shape type_="text" id="sketch-shapes-text" label="Text">
                    <FaFont size={15}/>
                </Shape>
            </Feature>
           
           

            <Feature title="Color">
                <input type="color" name="canvas_pen_color"
                    value={color} onChange={(e) => setColor(e.target.value)}

                />
                <input className={styles.hexInput} placeholder="#"  type="text" value={background} onInput={e => setBackground(e.target.value)} />
            </Feature>

            <Feature title="Color">
                <div className={styles.colorPicker}>
                    <input type="color" name="canvas_pen_color"
                        value={color} onChange={(e) => setColor(e.target.value)}
                    />
                    <input className={styles.hexInput} placeholder="#"  type="text" value={color} onInput={e => setColor(e.target.value)} />
                </div>
            </Feature>           
            {
                type !== 'text' &&
                <Feature title="Stroke Width">
                    <select name="canvas_pen_width"
                        value={width} onChange={(e) => setWidth(e.target.value)}
                    >
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
            }

            {
                type !== 'text' &&
                <Feature title={`Opacity [ ${opacity} ]`}>
                    <input type="range" min="0" max="10" value={opacity*10} onChange={(e) => setOpacity(e.target.value/10)}/>
                </Feature>
            }

            {
                type !== 'text' &&
                <Feature title="Stroke Style">
                    <div className={`${styles.feature_box} ${stroke === 'none' && styles.active_feature_box}`} onClick={() => setStroke("none")}>
                        <AiOutlineLine size={20}/>
                    </div>
                    <div className={`${styles.feature_box} ${stroke === 'small' && styles.active_feature_box}`} onClick={() => setStroke("small")}>
                        <AiOutlineSmallDash size={20}/>
                    </div>
                    <div className={`${styles.feature_box} ${stroke === 'big' && styles.active_feature_box}`} onClick={() => setStroke("big")}>
                        <AiOutlineDash size={20}/>
                    </div>
                </Feature>
            }

            {
                type !== 'text' &&
                <Feature title="Fill">
                    <div className={`${styles.feature_box} ${fill === 'false' && (styles.active_feature_box)}`}
                        onClick={() => setFill('false')}>
                        <FaRegSquare size={20}/>
                    </div>
                    <div className={`${styles.feature_box} ${fill === 'true' && (styles.active_feature_box)}`}
                        onClick={() => setFill('true')}>
                        <FaSquare size={20}/>
                    </div>
                    <div className={`${styles.feature_box} ${fill === 'pattern' && (styles.active_feature_box)} ${styles.fill_image_container}`}
                        onClick={() => {
                            setFill('pattern');
                            document.getElementById('sketch-fill-file-input').click();
                        }}>
                            <FaImage size={20}/>
                            <input type="file" accept=".png"
                                id="sketch-fill-file-input"
                                onChange={(e) => setFillImage(URL.createObjectURL(e.target.files[0]))}/>
                    </div>
                </Feature>
            }

            {
                type !== 'text' &&
                <Feature title="Edge">
                    <select value={edge} onChange={(e) => setEdge(e.target.value)}>
                        <option value="round">Round</option>
                        <option value="bevel">Bevel</option>
                        <option value="miter">Miter</option>
                    </select>
                </Feature>
            }

            {
                type === 'text' &&
                <Feature title={`Font Size [ ${fontSize} ]`}>
                    <input type="range" min="10" max="20" value={fontSize*10} onChange={(e) => setFontSize(e.target.value/10)}/>
                </Feature>
            }

            {
                type === 'text' &&
                <Feature title="Font Style">
                    <div className={`${styles.feature_box} ${fontStyle === 'normal' && (styles.active_feature_box)}`}
                        onClick={() => setFontStyle("normal")}>
                        <BsFonts size={20}/>
                    </div>
                    <div className={`${styles.feature_box} ${fontStyle === 'italic' && (styles.active_feature_box)}`}
                        onClick={() => setFontStyle("italic")}>
                        <FaItalic size={20}/>
                    </div>
                    <div className={`${styles.feature_box} ${fontStyle === 'bold' && (styles.active_feature_box)}`}
                        onClick={() => setFontStyle("bold")}>
                        <FaBold size={20}/>
                    </div>
                </Feature>
            }

            {
                type === 'text' &&
                <Feature title="Font Family">
                    <select
                        value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}
                    >
                        <option value="cursive">Cursive</option>
                        <option value="Courier New">Courier New</option>
                        <option value="serif">Serif</option>
                    </select>
                </Feature>
            }

            <Feature title="Undo / Redo">
                <div className={styles.feature_box} onClick={() => undo()} style={{cursor: `${canvasStateAt === -1 ? 'not-allowed' : 'pointer'}`}}>
                    <MdUndo size={20}/>
                </div>
                <div className={styles.feature_box} onClick={() => redo()} style={{cursor: `${canvasStateAt === canvasStates.length-1 ? 'not-allowed' : 'pointer'}`}}>
                    <MdRedo size={20}/>
                </div>
            </Feature>



{/*  */}

        </div>
    )

    function Feature({title, children}) {
        return(
            <div className={styles.feature}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        )
    }
    
    function Shape({type_, id, label, children}) {
        return (
            <label style={{'marginTop':'3px'}} htmlFor={id} title={label}>
                <div className={`${stylesShapes.feature} ${type === type_ && stylesShapes.active_feature}`}
                onClick={() => setType(type_)}
                id={id}>
                    {children}
                </div>
            </label>
        )
    }
}


export default Toolbox;
