import React from 'react'
import styles from './Header.module.css'


function Header() {
    return (
        <div className={styles.container}>
            <p>Want to get in touch ? We'd love to hear from you</p>
            <div className={styles.head}>
              <span>Contact Us</span>
              <div className={styles.liquid}></div>
            </div>
        </div>
    )
}

export default Header
