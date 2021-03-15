import React from "react";
import EmojiRating from "./../EmojiRating/EmojiRating";

import styles from "./ExpForm.module.css";

function response() {
  alert("Thank You for your valuable input 😊");
}
function ExperienceForm() {
  return (
    <div id="info" className={styles.info}>
      <div className={styles.general_info}>
    
        {/* <div className="heading">Contact us your query or just send a hello.</div> */}
        <h4 > 
          contact us your query
        <span style={{color:"white"}}>&#10067;</span>
        <br/>or just send a Hello
        <span style={{color:"darkblue",fontFamily:"FontAwesome"}}> &#128075;</span>
        </h4>
       
       
        <br />
        <div className={styles.contact_form}>
          <form
            onsubmit="setTimeout(function(){window.location.reload();},10);"
            className={styles.contact_form_container}
          >
            <div className={styles.circle}>
              <div className={styles.circle2}></div>
            </div>
            <div className={styles.fieldsWrap}>
              <div className={styles.inputDiv} >
                
                  <div className={styles.outer_div}><span className={styles.input_icons}> &#xf007;</span><input type="text" placeholder="Your Name" required />    </div>            
                  <div className={styles.outer_div}><span className={styles.input_icons}> &#xf0e0;</span> <input type="email" placeholder="Email" required /></div>
                  <div className={styles.outer_div}><span className={styles.input_icons}> &#xf095;</span><input type="tel" placeholder="Phone (optional)" /></div>
              </div>
              <div className={styles.experience}>
                <span style={{
                  fontSize:"15px",
                  color:"white",
                  alignItems:"center",
                  width:"100%",
                  justifyContent:"space-around",
                  fontFamily:"'Mulish', sans-serif;",
                  letterSpacing:"2px",
                  texrShadow:" 0 2px 2px rgba(0, 0, 0, 0.2), 0px 0px 5px rgba(0, 0, 0, 0.2)" 
                  }}>Rate your experience</span>
                <EmojiRating />
              </div>
              <textarea placeholder="&#xf040;   Message..."></textarea>
              <button className={styles.submit} onSubmit={response} type="submit">
                <span className={styles.hoverEffect}></span>
                <span className={styles.buttonText}>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
