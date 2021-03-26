import React,{useState}  from 'react'

import Progress from './Progress/Progress'
import Dropdown from './DropDown/DropDown'
import DragDrop from './DragDrop/DragDrop'
import Button from './Button/Button'

import styles from './MediaManip.module.scss'

function MediaManip() {

    const [input,setInput] = useState('Input')
    const [output,setOutput] = useState('Output')
    const [progress,setProgress] = useState(5)
    const [download,setDownload] = useState(true) //true = disabled
    const [convert,setConvert] = useState(true)  //true = disabled

    const onConvert = () => {
        alert(`Converting ${input} to ${output}`)
        const progressTime = setInterval(() => {
            setProgress(prev => {
                if(prev === 100) {
                    clearInterval(progressTime)
                    setDownload(false)
                    return 100
                }else return prev +1   
            })       
        },50)
    }

    const onDownload = () => {
       alert(`Downloading Converted ${output} files.`)
       setProgress(0)
    }

    return (
        <div className={styles.mediaManip}>
            <h1 className={styles.mediaManip_title}>Image Converter</h1>
            <div className={styles.mediaManip_dropDowns}>
                <Dropdown type="Input"  value={input} />
                {!convert && <Progress progress={progress} />}
                <Dropdown type="Output" value={output} onChange={(v) => setOutput(v)} />
            </div>
            <DragDrop setConvert={setConvert} setDownload={setDownload} setInput={setInput} />
            <div className={styles.mediaManip_btn}>
                <Button value="Convert" type="primary" onClick={onConvert} disabled={convert} />
                {!convert && <Button value="Download" type="secondary" onClick={onDownload} disabled={download} />}
            </div>
        </div>
    )
}

export default MediaManip
