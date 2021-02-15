import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { Form } from "react-bootstrap";
import {FaEnvelope} from "react-icons/fa";
import styles from "./Footer.module.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className={`${styles.footerDiv}`}>
      <div className={styles.topShape}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className={styles.svgPath} d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
        </svg>
      </div>
      <div className={styles.tint}></div>
      <div className={styles.newsletter}>
        <div className={styles.heading}>
          <h5>Subscribe to our Newsletter!</h5>
          <h6>Enter Your Email to get our news and updates.</h6>
        </div>
        <br></br>
        <Form className={styles.emailField}>
          <Form.Group controlId="formBasicEmail">
            <div className={styles.form}>
              <div className={styles.box}>
                <FaEnvelope className={styles.icon} size={48} />
                <input type="email" placeholder="Enter your email" required />
              </div>
              <button className={styles.bsClass}>SUBSCRIBE</button>{" "}
            </div>
            <Form.Text className={styles.textMuted}>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
        </Form>
      </div>
      <Fade>
        <p className={styles.footerText}>{emoji("Made with ❤️ in India for the students of the world.")}</p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}

