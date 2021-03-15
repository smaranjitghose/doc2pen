import { Link } from "react-router-dom";

import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.btnContainer}>
      <p>Want to get in touch ? We would love to hear from you.</p>
      <Link className={styles.btn} to="/contact" exact>
        <span>Contact Us</span>
        <div className={styles.liquid}></div>
      </Link>
    </div>
  );
}

export default ContactUs;
