import React from 'react'
import './Preloader.css';
import logo from "./logo.webp"
import logomain from "./logomain.png"

function Preloader() {
  return (
    <div className="pre">
            <div className="images">
            <img src={logomain} className="pen"></img>
            <img src={logo} className="mlogo"></img>
            </div>
      </div>
  );
}

export default Preloader;
