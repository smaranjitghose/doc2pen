import React from "react";
import style from "./preloader.module.scss";

function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default Preloader;
