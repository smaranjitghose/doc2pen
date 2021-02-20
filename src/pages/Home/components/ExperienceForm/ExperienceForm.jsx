import React from 'react'
import EmojiRating from "../../components/EmojiRating/EmojiRating";

import styles from "./ExpForm.module.css";

function response() {
  alert("Thank You for your valuable input 😊");
}
function ExperienceForm() {
  return (
    <div id="info" className={styles.info}>
      <div className={styles.general_info}>
        <h2>Contact us your query or just send a hello.</h2>
        <br />
        <div className={styles.contact_form}>
          <form
            onsubmit="setTimeout(function(){window.location.reload();},10);"
            className={styles.contact_form_container}
          >
            <div className={styles.inputDiv}>
              <div className={styles.name}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone (optional)" />
            </div>
            <div className={styles.experience}>
              <span>Rate your experience:</span>
              <EmojiRating />
            </div>
            <textarea placeholder="Message..."></textarea>
            <button className={styles.submit} onSubmit={response} type="submit">
              <span className={styles.hoverEffect}></span>
              <span className={styles.buttonText}>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm
