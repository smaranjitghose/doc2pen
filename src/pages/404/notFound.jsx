import React, { useEffect } from "react";
import "./particles.css";
import styles from "./notFound.module.css";
// import LogoWhite from "./../../assets/images/404/Logo-white.png";
import { BiConfused } from "react-icons/bi";

import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

function getFaviconEl() {
  return document.getElementById("favicon");
}

function Hero() {
  useEffect(() => {
    // if (window.ParticleSlider !== undefined) window.initParticles();
    const favicon = getFaviconEl();
    favicon.href = "404browser_102160.png";
  }, []);

  return (
    <>
      <MetaComponent
        title={metaData.notFound.title}
        description={metaData.notFound.description}
        keywords={metaData.notFound.keywords}
      />
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
                <BiConfused fontSize="53px" color="#FFFFFF" />
              </div>
            </span>
            <a className={styles.navlink} href="/">
              Let's go Home
            </a>
            <br />
            <br />
            <br />
          </div>
          {/* <div className={`particle-container ${styles.particleWrap}`}>
          <div id="particle-slider" className={`${styles.particleSlider} ${styles.float}`}>
            <div className="slides">
              <div className="slide" data-src={LogoWhite}></div>
            </div>
            <canvas className="draw"></canvas>
          </div>
        </div>*/}
        </div>
      </div>
    </>
  );
}

export default Hero;
