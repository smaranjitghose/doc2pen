import React from "react";


import "./style.css";
import Footer from "../../components/Footer/Footer";
import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Settings from "./sections/Settings/Settings";
import Output from "./sections/OutputComponent/Output";

function Editor() {
  return (
    <>
      <Header />
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
          <div id="app" style={{ height: "100%" }}>
            <div className="row col-12 px-0 mx-0 mt-auto" style={{ height: "100%" }}>
              <div className="col-12 col-lg-6 px-0">
                <Settings />
              </div>
              <div className="col-12 col-lg-6 px-0">
                <Output />
              </div>
            </div>
          </div>
        </EditContextProvider>
      </div>
      <Footer />
    </>
  );
}
export default Editor;
