import React, {} from 'react';
import styles from './Toolbox.module.css';
import {AiOutlineLine, AiOutlineSmallDash, AiOutlineDash} from 'react-icons/ai';
import {FaRegSquare, FaSquare} from 'react-icons/fa';
import {MdUndo, MdRedo} from 'react-icons/md';

function Toolbox({color, setColor, width, setWidth, opacity, setOpacity, stroke, setStroke, fill, setFill, undo, redo, canvasStateAt, canvasStates}) {

    return (
        <div className={styles.canvas_toolbox}>
            <Feature title="Color">
                <input type="color" name="canvas_pen_color"
                    value={color} onChange={(e) => setColor(e.target.value)}
                />
            </Feature>

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

            <Feature title={`Opacity [ ${opacity} ]`}>
                <input type="range" min="0" max="10" value={opacity*10} onChange={(e) => setOpacity(e.target.value/10)}/>
            </Feature>

            <Feature title="Stroke Style">
                <div className={`${styles.stroke} ${stroke === 'none' && styles.active_stroke}`} onClick={() => setStroke("none")}>
                    <AiOutlineLine size={25}/>
                </div>
                <div className={`${styles.stroke} ${stroke === 'small' && styles.active_stroke}`} onClick={() => setStroke("small")}>
                    <AiOutlineSmallDash size={25}/>
                </div>
                <div className={`${styles.stroke} ${stroke === 'big' && styles.active_stroke}`} onClick={() => setStroke("big")}>
                    <AiOutlineDash size={25}/>
                </div>
            </Feature>

            <Feature title="Fill">
                <div className={`${styles.fill} ${fill === false && styles.active_fill}`} onClick={() => setFill(false)}>
                    <FaRegSquare size={20}/>
                </div>
                <div className={`${styles.fill} ${fill === true && styles.active_fill}`} onClick={() => setFill(true)}>
                    <FaSquare size={20}/>
                </div>
            </Feature>

            <Feature title="Undo / Redo">
                <div className={styles.undo} onClick={() => undo()} style={{cursor: `${canvasStateAt === -1 ? 'not-allowed' : 'pointer'}`}}>
                    <MdUndo size={20}/>
                </div>
                <div className={styles.undo} onClick={() => redo()} style={{cursor: `${canvasStateAt === canvasStates.length-1 ? 'not-allowed' : 'pointer'}`}}>
                    <MdRedo size={20}/>
                </div>
            </Feature>
        </div>
    )
}

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

export default Toolbox
