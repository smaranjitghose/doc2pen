import React, { useEffect, useRef } from "react";
import style from "./icon-lib.module.css";

// Put you icon pack import here
const iconPack1SVGs = importAll(require.context("./icon-pack1", false, /\.svg$/));
const iconPack21SVGs = importAll(require.context("./icon-pack2.1", false, /\.svg$/));
const iconPack22SVGs = importAll(require.context("./icon-pack2.2", false, /\.svg$/));
const iconPack3SVGs = importAll(require.context("./icon-pack3", false, /\.svg$/));
const iconPack4SVGs = importAll(require.context("./icon-pack4", false, /\.svg$/));

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item).default;
  });
  return images;
}

function IconPreview(props) {
  const { iconPackSVGs, categoryTitle } = props;

  const allSVGsRef = useRef([]);

  useEffect(() => {
    allSVGsRef.current = Object.keys(iconPackSVGs).map(imgName => {
      return (
        <label htmlFor={`icon-${imgName}`} title={imgName}>
          <img id={`icon-${imgName}`} className={style.svgIcon} src={iconPackSVGs[imgName]} alt="" />
        </label>
      );
    });
  }, [iconPackSVGs]);

  return (
    <div className={style.iconCategory}>
      <h1 className={style.categoryHeading}>{categoryTitle}</h1>
      <div className={style.svgContainer}>{allSVGsRef.current}</div>
    </div>
  );
}

function IconsLibrary(props) {
  return (
    <div className={style.root}>
      <div className={style.panel}>{/* search bar */}</div>
      <div className={style.iconLib}>
        <IconPreview iconPackSVGs={iconPack1SVGs} categoryTitle="Tech Stack Icons" />
        {/* https://drwn.io/ */}
        <IconPreview iconPackSVGs={iconPack21SVGs} categoryTitle="Stick Figure Icons - Light" />
        <IconPreview iconPackSVGs={iconPack22SVGs} categoryTitle="Stick Figure Icons - Bold" />
        {/* https://svgsilh.com/tag/stickman-1.html */}
        <IconPreview iconPackSVGs={iconPack3SVGs} categoryTitle="Tech Stack Icons" />
        <IconPreview iconPackSVGs={iconPack4SVGs} categoryTitle="Tech Stack Icons" />
      </div>
    </div>
  );
}

export default IconsLibrary;
