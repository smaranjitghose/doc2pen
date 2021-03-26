import React from 'react'

import styles from './DropDown.module.scss'

function DropDown({type,onChange,value}) {

    const dropDownItems = ['PNG','JPG','WEBP','JIFF']

    return (
        <>
        {type === 'Output' ? <select value={value} name="dropdown" className={styles.dropDown} onChange={(e) => onChange(e.target.value)}>
            <option value={type}>{type}</option>
            {dropDownItems.map(item => <option key={item} value={item}>{item}</option>)}
        </select> : 
        <div className={styles.input} >{value}</div>
        }
        </>

    )
}

export default DropDown
