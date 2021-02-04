import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
import logo from "./logo.png";
import { ImInfo } from "react-icons/im";
import { RiTeamLine, RiContactsBook2Line } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RRNavlink,
  NavbarText,
} from "reactstrap";
import EditIcon from "@material-ui/icons/Edit";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
const headerLinks = [
  {
    name: "About",
    to: "home_about",
    icon: <ImInfo />,
  },
  {
    name: "Team",
    to: "home_team",
    icon: <RiTeamLine />,
  },
  {
    name: "Contact",
    to: "home_contact",
    icon: <RiContactsBook2Line />,
  },
  {
    name: "Support Us",
    to: "home_support",
    icon: <BiDonateHeart />,
  },
];

function Header() {
  const history = useHistory();

  const [location, setLocation] = useState(window.location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    return history.listen((location) => {
      setLocation(location.pathname);
    });
  }, [history]);

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#103F5F" }}
        light
        expand="md"
        fixed="top"
      >
        <NavbarBrand href="/">
          <img className={styles.left} src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavLink
              to="/"
              exact
              activeStyle={{
                color: "red",
              }}
              style={{ fontSize: "20px", color: "white",padding:"12px" }}
            >
              Home 
            </NavLink>
            <NavLink
              to="/editor"
              exact
              activeStyle={{
                color: "red",
              }}
              style={{ fontSize: "20px", color: "white",padding:"12px" }}
            >
              Editor
              <EditIcon
                style={{ marginLeft: "4px", marginTop: "-15px" }}
              ></EditIcon>
            </NavLink>
            <NavLink
              to="/sketch"
              exact
              activeStyle={{
                color: "red",
              }}
              style={{ fontSize: "20px", color: "white",padding:"12px"  }}
            >
              Sketch
              <NewReleasesIcon
                style={{
                  marginLeft: "4px",
                  marginTop: "-15px",
                  color: "red",
                }}
              ></NewReleasesIcon>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
      <div className={styles.quick_box}>
        {location === "/" &&
          headerLinks.map((link) => (
            <Link
              className={styles.quick_links}
              key={link.name}
              to={link.to}
              offset={-100}
            >
              {link.icon}
              &nbsp;&nbsp;&nbsp;
              {link.name}
            </Link>
          ))}
      </div>
    </>
  );
}

export default Header;
