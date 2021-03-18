import React from 'react'
import styles from "./EmojiRating.module.css";

function EmojiRating() {
  return (
    <div className={styles.emojis}>
    
    {/*MODIFIED the emojis in the experience form*/}
    
    
      <label>
        <input className={styles.radio} type="radio" value="1" name="feedback" />
        <span className={styles.emoji}>&#128077;</span>
      </label>

      <label>
        <input className={styles.radio} type="radio" value="2" name="feedback" />
        <span className={styles.emoji}>&#128078;</span>
      </label>

      <label>
        <input className={styles.radio} type="radio" value="3" name="feedback" />
        <span className={styles.emoji}>&#128079;</span>
      </label>

      <label>
        <input className={styles.radio} type="radio" value="4" name="feedback" />
        <span className={styles.emoji}>&#128147;</span>
      </label>

      <label>
        <input className={styles.radio} type="radio" value="5" name="feedback" />
        <span className={styles.emoji}>&#129327;</span>
      </label>
    </div>
  );
}

export default EmojiRating
