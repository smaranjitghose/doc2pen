import React, { useState, useEffect } from "react";

import styles from "./style.module.scss";

import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./sections/Settings/Settings.jsx";
import Output from "./sections/OutputComponent/Output";

import ScrollToTop from "../../components/ScrollToTopButton/ScrollToTopButton";
import { Button } from "reactstrap"

function Editor() {
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaComponent
        title={metaData.editor.title}
        description={metaData.editor.description}
        keywords={metaData.editor.keywords}
      />
      <div className={styles.dscCommunity}>
        <EditContextProvider>
          <Settings />
          {[...Array(pageCount)].map((e,i) => <Output key={i} pageNo={i+1} />)}          
        </EditContextProvider>
      </div>
      <div className={styles.btnWrapper}>
        <ScrollToTop />
      </div>
      <div className={styles.pageBtnsWrapper}>
        <Button outline color="primary" onClick={() => setPageCount(prev => prev+1)}>Add Page</Button>
        <Button outline color="primary" disabled={pageCount===1} onClick={() => setPageCount(prev => prev-1)}>Remove Last Page</Button>
      </div>
    </>
  );
}
export default Editor;
