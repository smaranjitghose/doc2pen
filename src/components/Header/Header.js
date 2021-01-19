import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
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
                <Link to="/home">
                Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                About
                </Link>              
              </li>
              <li>
                <Link to="/team">
                Team
                </Link>
              </li>
              <li>
                <Link to="/contact">
                Contact
                </Link>
              </li>
              <li>
                <Link to="/support">
                  Support Us
                </Link>
              </li>
              <li>
                <Link to="/editor">
                Editor
                </Link>   
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
