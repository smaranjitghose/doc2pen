import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
class Header extends Component {
  render() {
    return (

      <Fade top duration={100} distance="20px">
        <div>
          <header className="header">
            <div className="logo">
            <span> &lt;</span>
              <span className="logo-name" >
                 Doc2pen
              </span>
              <span>/&gt;</span>
              </div>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                Home
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
