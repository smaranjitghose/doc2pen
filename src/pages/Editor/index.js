import React,{ useEffect } from "react";

import styles from "./style.module.css";

import MetaComponent from '../../seo/MetaComponent';
import metaData from '../../seo/metaData';

import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./sections/Settings/Settings";
import Output from "./sections/OutputComponent/Output";

function Editor() {
  
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
        <a
          href="https://dscommunity.in"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            position: "fixed",
            zIndex: "1000",
            right: "-1rem",
            top: "1rem",
          }}
          className="col-2 col-md-1 d-none d-lg-block"
        >
          dscommunity
        </a>
        <EditContextProvider>
          <Settings />
          <Output />
        </EditContextProvider>
      </div>
    </>
  );
}
export default Editor;
