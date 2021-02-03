import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { Form, Button} from "react-bootstrap";
import {FaEnvelope} from "react-icons/fa";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    //py-2 for padding
    <div className="footer-div py-2">
      <div className="newsletter">
        <div className="heading">
          <h5>Subscribe to our Newsletter!</h5>
          <h6>Enter Your Email to get our news and updates.</h6>
        </div>
        <br></br>
        <Form className="email-field">
          <Form.Group controlId="formBasicEmail">
            <div className="form">
              <div className="box">
                <FaEnvelope className="icon" size={48}/>
                <input type="email"  placeholder="Enter your email" required/> 
              </div>
                <Button className="bsClass" size="sm">SUBSCRIBE</Button>{' '}
            </div>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <Fade>
        <p className="footer-text">
        {emoji("Made with ❤️ in India for the students of the world.")} 
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}

