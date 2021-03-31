import React from "react";
import EmojiRating from "./../EmojiRating/EmojiRating";

import styles from "./experience-form.module.scss";

function response() {
  alert("Thank You for your valuable input 😊");
}
function ExperienceForm() {
  return (
    <div id="info" className={styles.info}>
      <div className={styles.general_info}>
        <h2>You've got questions? We've got answers</h2>
        <div className={styles.contact_form}>
          <form
            onsubmit="setTimeout(function(){window.location.reload();},10);"
            className={styles.contact_form_container}
          >
            <div className={styles.fieldsWrap}>
              <div className={styles.inputDiv}>
               <div className={styles.field}><input type="text" pattern="[a-z]*" name="name" id='name' placeholder="Name" required />
               <label for="name" className={styles.form__label}>Name</label></div> 
               <div className={styles.field}>
                <input type="email" placeholder="Email" name="email" id='email' required />
                <label for="Email" className={styles.form__label}>Email</label></div> 
               {/* <input type="tel" placeholder="Phone (optional)" />*/}
               <div className={styles.field}>
               <input type="text" pattern="[0-9]*" placeholder="Phone" name="phone" id='phone'/>
               <label for="phone" className={styles.form__label}>Phone number</label></div> 
              </div>
              <div className={styles.experience}>
                <span>Rate your experience:</span>
                <EmojiRating />
              </div>
              <textarea placeholder="Any message for us..."></textarea>
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
