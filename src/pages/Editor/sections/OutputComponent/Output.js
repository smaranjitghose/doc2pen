import {useContext, useState, useEffect} from "react";

import classes from "./Output.module.css";
import {EditContext} from "../../containers/editContext";
import Page from "./Page";

const OutputComponent = () => {
  const editContext = useContext(EditContext);
  const [wordCount, setWordCount] = useState(0);
  const pages = editContext.pages
  useEffect(() => {
    var count = 0;
    pages.forEach(page=>{
      count+=page.body.text.length;
      count+=page.head.text.length;
    })
    setWordCount(count);
  },[pages]);

  const displayPages = editContext.pages.map((page, index) => {
    return (
      <Page
        visible={index === editContext.currentPage}
        body={page.body}
        head={page.head}
        key={index}
        index={index}
        headValue = {page.head.text}
        bodyValue = {page.body.text}
        delete={(index) => editContext.deletePage(index)}
        download={editContext.downloadSinglePage}
        valueChange = {editContext.onValueChange}
      />
    );
  });

  return (
    <>
      <div className={`${classes.wrapper} col-11 col-lg-8 mx-auto mt-4 p-2`}>
        <div className="controlButtons">
          <span onClick={editContext.prevPage}>prev</span>
          <span onClick={editContext.nextPage}>next</span>
          <span>Current Page: {editContext.currentPage + 1}</span>
          <span>Total Page: {pages.length}</span>
          <span onClick={editContext.addPage}>Add Page</span>
        </div>
        <div id="outputPage" className={`col-12 mx-auto px-0`}>
          {displayPages}
        </div>
        <div
          style={{fontSize: "0.75rem", marginTop: "11px", fontWeight: "bold"}}
        >
          Word Count:&nbsp;
          <span style={{color: "#28b8c6", fontSize: "0.85rem"}}>
            {wordCount}
          </span>
        </div>
      </div>
    </>
  );
};
export default OutputComponent;
