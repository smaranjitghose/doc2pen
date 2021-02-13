import React from 'react';
import styles from './ContactUs.module.css';

function response() {
  alert('Thank You for your valuable input 😊');
}
function ContactUs() {
    return (
      <div className={styles.ContactUs} id="home_contact">
        <div className={styles.heading}>Get In Touch</div>
        <div className={styles.contact_and_info_container}>
          <div id="info" className={styles.info}>
            <div className={styles.general_info}>
              <h2>Have a doubt?</h2>
              <p>Contact us your query or just send a hello.</p>
              <br />
              <div className={styles.contact_form}>
                <form  onsubmit="setTimeout(function(){window.location.reload();},10);"  className={styles.contact_form_container}>
                  <input type="text" placeholder="First Name (required)" />
                  <input type="text" placeholder="Last Name (required)" />
                  <input type="email" placeholder="Email (required)" />
                  <input type="tel" placeholder="Phone (optional)" />
                  <div className={styles.experience}>
                    <span>Rate your experience:</span>
                    <div className={styles.emojis}>
                    <label>
                      <input className={styles.radio} type="radio" value="1" name="feedback" />
                      <span className={styles.emoji}>&#128553;</span>
                    </label>

                    <label>
                      <input className={styles.radio} type="radio" value="2" name="feedback" />
                      <span className={styles.emoji}>&#128542;</span>
                    </label>

                    <label>
                      <input className={styles.radio} type="radio" value="3" name="feedback" />
                      <span className={styles.emoji}>&#128528;</span>
                    </label>

                    <label>
                      <input className={styles.radio} type="radio" value="4" name="feedback" />
                      <span className={styles.emoji}>&#128522;</span>
                    </label>

                    <label>
                      <input className={styles.radio} type="radio" value="5" name="feedback" />
                      <span className={styles.emoji}>&#128516;</span>
                    </label>
                    </div>
                  </div>
                  <textarea placeholder="Message..."></textarea>
                  <input onClick={response} type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <h2>Find Us Below:</h2>
            <div className={styles.googleMap}></div>
          </div>
        </div>
      </div>
    );
}

export default ContactUs
