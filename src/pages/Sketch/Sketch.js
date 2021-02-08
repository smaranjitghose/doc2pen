import React from 'react';
import Canvas from './components/Canvas';
import styles from './Sketch.module.css';

function Sketch() {

    return (
        <section className={styles.Sketch}>
            <div className={styles.title}>Sketch</div>
            <div className={styles.body}>
                <Canvas />
            </div>
        </section>
    )
}

export default Sketch;
