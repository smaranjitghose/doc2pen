import React from "react";
import style from "./preloader.module.scss";

function Preloader() {
  return (
    <div className={style.preloader}>
      <span className={style.circle + " " + style.circle1}></span>
      <span className={style.circle + " " + style.circle2}></span>
      <span className={style.circle + " " + style.circle3}></span>
      <span className={style.circle + " " + style.circle4}></span>
      <span className={style.circle + " " + style.circle5}></span>
      <span className={style.circle + " " + style.circle6}></span>
      <span className={style.circle + " " + style.circle7}></span>
      <span className={style.circle + " " + style.circle8}></span>
    </div>
  );
}

export default Preloader;
