import React from 'react'
import styles from "./EmojiRating.module.css";

function EmojiRating() {
  return (
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
  );
}

export default EmojiRating
