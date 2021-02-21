import React, { useEffect } from "react";
import "./particles.css";
import styles from "./notFound.module.css";
import Logo from "./../../assets/images/404/Logo.png";


function getFaviconEl() {
  return document.getElementById("favicon");
}

function Hero() {
  useEffect(() => {
    if (window.ParticleSlider !== undefined) window.initParticles();
    const favicon = getFaviconEl();
    favicon.href = "404browser_102160.png";
  }, []);

  return (
    <div className={styles.stickyWrap}>
      <div className={styles.homeSectionWrap}>
        <div className={styles.head}>
          <span className={`${styles.heading} ${styles.float}`}>
            Uh ooh! Its a 404.
            <br />
            <br />
            Seems like you are lost buddy
            <br />
            <div className={styles.emoji}>😕😕</div>
          </span>
          <a className={styles.navlink} href="/">
            Go Back
          </a>
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
