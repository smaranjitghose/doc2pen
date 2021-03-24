import React, {useContext} from "react";
import classes from "./Output.module.css";
import {EditContext} from "../../containers/editContext";
import "./Page.css";
const Page = (props) => {
  const headValues = props.head;
  const bodyValues = props.body;
  const editContext = useContext(EditContext);
  const page = require(`./${editContext.pageSrc}`);
  var show = props.visible ? "showPage" : "";
  return (
    <div
      style={{backgroundImage: `url(${page.default})`}}
      className={`${classes.imgContainer} col-12 mx-auto ${show} page`}
    >
      <span className="deleteButton" onClick={props.delete}>
        Delete
      </span>
      <div className="downloadButtons">
        Download Current Page
        <span onClick={() => props.download(props.index, "as PDF")}>
          As Pdf
        </span>
        <span onClick={() => props.download(props.index, "as PNG")}>
          As png
        </span>
      </div>
      <div
        contentEditable={true}
        className={classes.titleInput + " id-title"}
        onInputCapture={(e) => props.valueChange(e.target, props.index, false)}
        style={{
          fontSize: `${editContext.headValues.headSize}px`,
          paddingTop: `${headValues.headTop}px`,
          paddingLeft: `${Number(headValues.headLeft) + 3}px`,
          lineHeight: `${editContext.headValues.headLine}`,
          fontFamily: `${editContext.headValues.headFont}`,
          color: `${editContext.headValues.headColor}`,
          width: `${headValues.headWidth}pc`,
          letterSpacing: `${editContext.headValues.headLetterSpace}px`,
        }}
      ></div>
      <div
        contentEditable={true}
        onInputCapture={(e) => props.valueChange(e.target, props.index, true)}
        className={`${classes.contentInput} page-body`}
        id="show-text"
        style={{
          fontSize: `${editContext.bodyValues.bodySize}px`,
          paddingTop: `${bodyValues.bodyTop}px`,
          paddingLeft: `${Number(bodyValues.bodyLeft) + 3}px`,
          lineHeight: `${editContext.bodyValues.bodyLine}`,
          fontFamily: `${editContext.bodyValues.bodyFont}`,
          color: `${editContext.bodyValues.bodyColor}`,
          width: `${bodyValues.bodyWidth}pc`,
          letterSpacing: `${editContext.bodyValues.bodyLetterSpace}px`,
        }}
      ></div>
    </div>
  );
};
export default Page;
