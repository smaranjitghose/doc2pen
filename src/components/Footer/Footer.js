import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { Form, Button} from "react-bootstrap";
import {FaEnvelope} from "react-icons/fa";
import axios from "axios";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default class Footer extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      email: '' ,
      subscribe:''
    }
}
onEmailChange(event) {
  this.setState({email: event.target.value})
}
submitEmail(e){
  e.preventDefault();
  let data={
    email:this.state.email
  }

  axios.post('http://localhost:3001/send', data).then((response)=>{
    if (response.data.status === 'success'){
        // alert("Message Sent."); 
        this.resetForm();
        this.onSubscribeChange();

    }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
    }
  })
}
onSubscribeChange(){
    this.setState({subscribe:'Successfully Subscribed!'});
}
resetForm(){
  this.setState({email: ''})
}

  render() {
  return (
    //py-2 for padding
    <div className="footer-div py-2">
      <div className="newsletter">
        <div className="heading">
          <h5>Subscribe to our Newsletter!</h5>
          <h6>{this.state.subscribe || "Enter Your Email to get our news and updates."}</h6>

        </div>
        <br></br>
        <Form className="email-field" onSubmit={this.submitEmail.bind(this)} method="POST">
          <Form.Group controlId="formBasicEmail">
            <div className="form">
              <div className="box">
                <FaEnvelope className="icon" size={48}/>
                <input type="email" id="email"  placeholder="Enter your email"  value={this.state.email} onChange={this.onEmailChange.bind(this)} required/> 
              </div>
                <Button className="bsClass" size="sm" type="submit">SUBSCRIBE</Button>
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
}

