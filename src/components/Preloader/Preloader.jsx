import React from 'react'
import './Preloader.css';
import logo from "./logo.webp"
import logomain from "./logomain.png"

function Preloader() {
  return (
    <div className="pre">
            <div className="images">
            <img src={logomain} className="pen" alt="logo"></img>
            <img src={logo} className="mlogo" alt="Doc2pen"></img>
            </div>
      </div>
  );
}

export default Preloader;
