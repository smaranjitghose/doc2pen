import React from "react";
import style from "./icon-lib.module.css";
import { VscArrowLeft } from "react-icons/vsc";

function IconPreview(props) {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item).default;
    });
    return images;
  }

  const images = importAll(require.context(`./icon-pack1`, false, /\.svg$/));
  console.log(images);
  const allSVGs = Object.keys(images).map(imgName => {
    return (
      <label htmlFor={`icon-${imgName}`} title={imgName}>
        <img id={`icon-${imgName}`} className={style.svgIcon} src={images[imgName]} alt="" />
      </label>
    );
  });

  return (
    <>
      <div className={style.svgContainer}>{allSVGs}</div>
    </>
  );
}

function IconsLibrary(props) {
  return (
    <div className={style.root}>
      <div className={style.panel}>
        <label htmlFor="icon-lib-goback" title="Go Back">
          <div className={`${style.feature}`} onClick={() => props.toggleOpen()} id="icon-lib-goback">
            <VscArrowLeft size={15} />
          </div>
        </label>
      </div>

      <div className={style.iconLib}>
        <IconPreview iconLoc={"icon-pack1"} />
      </div>
    </div>
  );
}

export default IconsLibrary;
