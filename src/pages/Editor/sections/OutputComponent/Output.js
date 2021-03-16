import { useContext, useState, useEffect } from "react";

import classes from "./Output.module.css";
import { EditContext } from "../../containers/editContext";

const OutputComponent = () => {
  const editContext = useContext(EditContext);
  // const page = require('./ruled1.png');
  const page = require(`./${editContext.pageSrc}`);
  console.log(`${editContext.pageSrc}`);

  const [pageText, setPageText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    setWordCount(pageText.split(' ').filter(c => c !== '').length);
  }, [pageText])

  return (
    <>
      <div className={`${classes.wrapper} col-11 col-lg-8 mx-auto mt-4 p-2`}>
        <div id="outputPage" className={`col-12 mx-auto px-0`}>
          <div className={`${classes.imgContainer} col-12 mx-auto px-0`}>
            <img src={page.default} alt="editor" className="mx-auto px-0" Width="100%" Height="100%" />
          </div>
          <textarea
            type="text"
            className={`${classes.titleInput} id-title`}
            onClick={editContext.isBodyHandler}
            placeholder="Welcome to your Doc2Pen"
            style={{
              fontSize: `${editContext.headValues.headSize}px`,
              paddingTop: `${editContext.headValues.headTop}px`,
              paddingRight: `${Number(editContext.headValues.headRight) + 3}px`,
              paddingLeft: `${Number(editContext.headValues.headLeft) + 3}px`,
              lineHeight: `${editContext.headValues.headLine}`,
              fontFamily: `${editContext.headValues.headFont}`,
              color: `${editContext.headValues.headColor}`,
              width: `${editContext.headValues.headWidth}pc`,
              letterSpacing: `${editContext.headValues.headLetterSpace}px`,
            }}
          />
          <textarea
            type="text"
            value={editContext.bodyValues.textValue}
            onChange={e => setPageText(e.target.value)}
            className={`${classes.contentInput} id-body`}
            id="show-text"
            placeholder="Paste your content here! You can type it too, but we know people."
            style={{
              fontSize: `${editContext.bodyValues.bodySize}px`,
              paddingTop: `${editContext.bodyValues.bodyTop}px`,
              paddingRight: `${Number(editContext.bodyValues.bodyRight) + 3}px`,
              paddingLeft: `${Number(editContext.bodyValues.bodyLeft) + 3}px`,
              lineHeight: `${editContext.bodyValues.bodyLine}`,
              fontFamily: `${editContext.bodyValues.bodyFont}`,
              color: `${editContext.bodyValues.bodyColor}`,
              width: `${editContext.bodyValues.bodyWidth}pc`,
              letterSpacing: `${editContext.bodyValues.bodyLetterSpace}px`,
            }}
          />
        </div>
        <div style={{ fontSize: "0.75rem", marginTop: "11px", fontWeight: "bold" }}>
          Word Count:&nbsp;
          <span style={{ color: "#28b8c6", fontSize: "0.85rem" }}>{wordCount}</span>
        </div>
      </div>
    </>
  );
};
export default OutputComponent;
