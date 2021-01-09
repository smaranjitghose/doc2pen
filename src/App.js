import { Component } from "react";

import "./index.css";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import EditContextProvider from "./containers/editContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
export default class App extends Component {


  render() {
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
          </a>
          <EditContextProvider>
            <div id="app" style={{ height: "100%" }}>
              <MainContainer />
            </div>
          </EditContextProvider>
        </div>
        <Footer />
      </>
    );
  }
}