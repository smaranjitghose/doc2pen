import React, {} from 'react';
import styles from './Toolbox.module.css';

function Toolbox({color, setColor, width, setWidth}) {

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
        </div>
    )
}

export default Toolbox
