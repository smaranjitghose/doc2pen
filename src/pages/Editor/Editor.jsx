import React, { useEffect } from "react";

import styles from "./style.module.scss";

import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./sections/Settings/Settings.jsx";
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
        <EditContextProvider>
          <Settings />
          <Output />
        </EditContextProvider>
      </div>
    </>
  );
}
export default Editor;
