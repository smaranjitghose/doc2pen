import React from 'react'
import style from "./Preloader.module.css";

function Preloader() {
  return (
    <div class={style.preloader}>
      <div class={style.spinner}></div>
    </div>
  );
}

export default Preloader
