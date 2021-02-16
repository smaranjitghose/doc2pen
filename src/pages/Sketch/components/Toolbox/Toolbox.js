import React, {} from 'react';
import styles from './Toolbox.module.css';
import {AiOutlineSmallDash, AiOutlineDash} from 'react-icons/ai';
import {FaRegSquare, FaSquare} from 'react-icons/fa';

function Toolbox({color, setColor, width, setWidth, opacity, setOpacity, stroke, setStroke, fill, setFill}) {

    return (
        <div className={styles.canvas_toolbox}>
            <div className={styles.canvas_toolbox_feature}>
                <input type="color" name="canvas_pen_color" className={styles.canvas_pen_color}
                    value={color} onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <div className={styles.canvas_toolbox_feature}>
                <select name="canvas_pen_width" className={styles.canvas_pen_width}
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
            </div>
            <div className={styles.canvas_toolbox_feature}>
                <input type="range" min="0" max="10" value={opacity*10} onChange={(e) => setOpacity(e.target.value/10)}/>
            </div>
            <div className={styles.canvas_toolbox_feature}>
                <div className={`${styles.stroke} ${stroke === 'small' && styles.active_stroke}`} onClick={() => {
                    if(stroke === 'small') {
                        setStroke('none');
                    } else {
                        setStroke('small');
                    }
                }}>
                    <AiOutlineSmallDash size={25}/>
                </div>
                <div className={`${styles.stroke} ${stroke === 'big' && styles.active_stroke}`} onClick={() => {
                    if(stroke === 'big') {
                        setStroke('none');
                    } else {
                        setStroke('big');
                    }
                }}>
                    <AiOutlineDash size={25}/>
                </div>
            </div>
            <div className={styles.canvas_toolbox_feature}>
                <div className={styles.fill} onClick={() => setFill(current => !current)}>
                    {
                        fill? <FaSquare size={25}/> : <FaRegSquare size={25}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Toolbox
