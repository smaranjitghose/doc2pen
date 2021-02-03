import React from 'react';
import styles from './Banner.module.css';
import pen from './pen.svg';

function Banner() {
    return (
        <section className={styles.Home} id="home_banner">
            <div className={styles.content}>
                <div className={styles.text}>
                    <div>Type Documents in your own Handwriting.</div>
                    <button className={styles.button}>CHECK IT OUT!</button>
                </div>
                <div className={styles.image}>
                    <img src={pen} alt="Pen"/>
                </div>
            </div>
            <div className={`${styles.wave} ${styles.wave1}`}></div>
            <div className={`${styles.wave} ${styles.wave2}`}></div>
            <div className={`${styles.wave} ${styles.wave3}`}></div>
            <div className={`${styles.wave} ${styles.wave4}`}></div>
        </section>
    )
}

export default Banner
