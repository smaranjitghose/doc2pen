import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
    return (
        <div className={styles.ContactUs} id="home_contact">
            <div className={styles.heading}>
              Get In Touch
            </div>
            
            <div className={styles.contact_and_info_container}>
              <div id="info">
                <div className={styles.general_info}>
                  <h2>Have a doubt?</h2>
                  <p>Contact us your query or just send a hello.</p><br/>
                  <h2>Find Us Below:</h2>
                </div>
                <div className={styles.googleMap}></div> 
              </div>
              
              <div className={styles.contact_form}>
                <form action="#" method="POST" className={styles.contact_form_container}>
                  <input type="text" placeholder="First Name (required)" />
                  <input type="text" placeholder="Last Name (required)" />
                  <input type="email" placeholder="Email (required)" />
                  <input type="tel" placeholder="Phone (optional)" />
                  <div className={styles.experience}>
                    <span>Rate your experience:</span>
                      <div className={styles.emojis}>
                        <span className={styles.emoji}>&#128553;</span>
                        <span className={styles.emoji}>&#128542;</span>
                        <span className={styles.emoji}>&#128528;</span>
                        <span className={styles.emoji}>&#128522;</span>
                        <span className={styles.emoji}>&#128516;</span>
                      </div>
                  </div>
                  <textarea placeholder="Message..."></textarea>
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
        </div>
    )
}

export default ContactUs
