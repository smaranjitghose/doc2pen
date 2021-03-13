import React from 'react';
import styles from './Toolbox.module.css';
import {AiOutlineLine, AiOutlineSmallDash, AiOutlineDash} from 'react-icons/ai';
import {FaRegSquare, FaSquare, FaItalic, FaBold} from 'react-icons/fa';
import {MdUndo, MdRedo} from 'react-icons/md';
import {BsFonts} from 'react-icons/bs';
import {FaImage} from 'react-icons/fa';

function Toolbox({
        color,
        setColor,
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
        isDarkModeOn,
        type,
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
        <div className={isDarkModeOn ? styles.dark_canvas_toolbox : styles.canvas_toolbox}>
            <Feature title="Color">
                <input type="color" name="canvas_pen_color"
                    value={color} onChange={(e) => setColor(e.target.value)}
                />
                <button onClick={(e) => setColor(e.target.value)} value="#0000ff" type="color1" name="Blue"></button>
                <button onClick={(e) => setColor(e.target.value)} value="#ff0000" type="color2" name="Red"></button>
                <button onClick={(e) => setColor(e.target.value)} value="#008000" type="color3" name="Green"></button>
                <button onClick={(e) => setColor(e.target.value)} value="#000000" type="color4" name="Black"></button>
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
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${stroke === 'none' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`} onClick={() => setStroke("none")}>
                        <AiOutlineLine size={20}/>
                    </div>
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${stroke === 'small' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`} onClick={() => setStroke("small")}>
                        <AiOutlineSmallDash size={20}/>
                    </div>
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${stroke === 'big' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`} onClick={() => setStroke("big")}>
                        <AiOutlineDash size={20}/>
                    </div>
                </Feature>
            }

            {
                type !== 'text' &&
                <Feature title="Fill">
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${fill === 'false' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`}
                        onClick={() => setFill('false')}>
                        <FaRegSquare size={20}/>
                    </div>
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${fill === 'true' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`}
                        onClick={() => setFill('true')}>
                        <FaSquare size={20}/>
                    </div>
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${fill === 'pattern' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)} ${styles.fill_image_container}`}
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
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${fontStyle === 'normal' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`}
                        onClick={() => setFontStyle("normal")}>
                        <BsFonts size={20}/>
                    </div>
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${fontStyle === 'italic' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`}
                        onClick={() => setFontStyle("italic")}>
                        <FaItalic size={20}/>
                    </div>
                    <div className={`${isDarkModeOn ? styles.dark_feature_box : styles.feature_box} ${fontStyle === 'bold' && (isDarkModeOn ? styles.dark_active_feature_box : styles.active_feature_box)}`}
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
                <div className={isDarkModeOn ? styles.dark_feature_box : styles.feature_box} onClick={() => undo()} style={{cursor: `${canvasStateAt === -1 ? 'not-allowed' : 'pointer'}`}}>
                    <MdUndo size={20}/>
                </div>
                <div className={isDarkModeOn ? styles.dark_feature_box : styles.feature_box} onClick={() => redo()} style={{cursor: `${canvasStateAt === canvasStates.length-1 ? 'not-allowed' : 'pointer'}`}}>
                    <MdRedo size={20}/>
                </div>
            </Feature>
        </div>
    )

    function Feature({title, children}) {
        return(
            <div className={isDarkModeOn ? styles.dark_feature : styles.feature}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        )
    }
}


export default Toolbox;
