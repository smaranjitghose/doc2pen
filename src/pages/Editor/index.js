import React from "react";
import "./style.css";
import Footer from "../../components/Footer/Footer";
import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./sections/Settings/Settings";
import Output from "./sections/OutputComponent/Output";

function Editor() {
  return (
    <>
      <div>
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
      <Footer />
    </>
  );
}
export default Editor;
