import React from 'react'

import styles from './Button.module.scss'

function Button({value,type,onClick}) {
    return (
        <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button
