import React from "react";
import "./particles.css";
import styles from "./notFound.module.css";

import Logo from "./../../assests/Logo.png";

function Hero() {
  return (
    <div className={styles.stickyWrap}>
      <div className={styles.homeSectionWrap}>
        <div className={styles.head}>
          <span className={`${styles.heading} ${styles.float}`}>
            Uh ooh! Its a 404.
            <br />
            <br />
            Seems like you are lost
            <br />
            😕😕
          </span>
        </div>
        <div className={`particle-container ${styles.float}`}>
          <div id="particle-slider">
            <div className="slides">
              <div className="slide" data-src={Logo}></div>
            </div>
            <canvas className="draw"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
