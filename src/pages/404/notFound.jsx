import React, { useEffect } from "react";
import "./squiggly-animation.css";
import style from "./notFound.module.css";
import pageNotFound from "./../../assets/images/404/404.gif";

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
      <div className={style.root}>
        <div className={style.pageNotFound} style={{ backgroundImage: `url(${pageNotFound})` }} alt=""></div>
        <div className={`test`}>
          You went too far buddy!
          <p className={style.small}>There's nothing Here :(</p>
        </div>
        <a className={style.navlink} href="/">
          <span className={style.hoverEffect}></span>
          <span className={style.buttonText}>Go back</span>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="squiggly-0">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
              <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-1">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="squiggly-2">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-3">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="squiggly-4">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Hero;
