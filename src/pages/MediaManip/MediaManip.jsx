import React,{useState}  from 'react'

import Progress from './Progress/Progress'
import Dropdown from './DropDown/DropDown'
import DragDrop from './DragDrop/DragDrop'
import Button from './Button/Button'

import styles from './MediaManip.module.scss'

function MediaManip() {

    const [input,setInput] = useState('Input')
    const [output,setOutput] = useState('Output')

    const onConvert = () => {
        alert(`Converting ${input} to ${output}`)
    }

    const onDownload = () => {
       alert(`Downloading Converted ${output} files.`)
    }

    return (
        <div className={styles.mediaManip}>
            <h1 className={styles.mediaManip_title}>Image Converter</h1>
            <div className={styles.mediaManip_dropDowns}>
                <Dropdown type="Input"  value={input}  onChange={(v) => setInput(v)}  />
                <Progress />
                <Dropdown type="Output" value={output} onChange={(v) => setOutput(v)} />
            </div>
            <DragDrop />
            <div className={styles.mediaManip_btn}>
                <Button value="Convert" type="primary" onClick={onConvert} />
                <Button value="Download" type="secondary" onClick={onDownload} />
            </div>
        </div>
    )
}

export default MediaManip
