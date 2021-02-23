import React, { useEffect } from "react";
import "./particles.css";
import styles from "./notFound.module.css";
import LogoWhite from "./../../assets/images/404/Logo-white.png";
import { BiConfused } from "react-icons/bi";


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
          <span className={`${styles.heading} /*${styles.float}*/`}>
            Uh ooh! Its a 404.
            <br />
            <br />
            You are lost buddy! You went too far...
            <br />
            <div className={styles.emoji}>
              <BiConfused color="#FFFFFF" />
              <BiConfused color="#FFFFFF" />
            </div>
          </span>
          <a className={styles.navlink} href="/">
            Let's go back
          </a>
          <br />
          <br />
          <br />
        </div>
        <div className={`particle-container ${styles.particleWrap}`}>
          <div id="particle-slider" className={`${styles.particleSlider} ${styles.float}`}>
            <div className="slides">
              <div className="slide" data-src={LogoWhite}></div>
            </div>
            <canvas className="draw"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;