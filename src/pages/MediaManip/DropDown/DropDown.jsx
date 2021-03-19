import React from 'react'

import styles from './DropDown.module.scss'

function DropDown({type,onChange,value}) {

    const dropDownItems = ['PNG','JPG','WEBP','JIFF']

    return (
        <select value={value} name="dropdown" className={styles.dropDown} onChange={(e) => onChange(e.target.value)}>
            <option value={type}>{type}</option>
            {dropDownItems.map(item => <option value={item}>{item}</option>)}
        </select>
    )
}

export default DropDown
