import React,{useState,useEffect}  from 'react'

import Progress from './Progress/Progress'
import Dropdown from './DropDown/DropDown'
import DragDrop from './DragDrop/DragDrop'
import Button from './Button/Button'

import styles from './MediaManip.module.scss'

export default function MediaManip() {

    const [input,setInput] = useState('Input')
    const [output,setOutput] = useState('Output')
    const [files,setFiles] = useState([])
    const [progress,setProgress] = useState(0)
    const [download,setDownload] = useState(true) //true = disabled
    const [convert,setConvert] = useState(true)  //true = disabled

    useEffect(() => {
        if(files.length === 0) {
          setConvert(true)
          setDownload(true)
        }
        else setConvert(false)
      },[files,setConvert,setDownload])

    const onConvert = () => {
        setProgress(0)
        files.map(file => {
          const fileType = file.name.split('.')[1]
          if(fileType === 'png' && output === 'jpg') return pngtojpg()
          if(fileType === 'png' && output === 'webp') return pngtowebp()
          if(fileType === 'jpg' && output === 'png') return jpgtopng()
          if(fileType === 'jpg' && output === 'webp') return jpgtowebp() 
          if(fileType === 'webp' && output === 'jpg') return webptojpg()
          if(fileType === 'webp' && output === 'png') return webptopng()
          if(output === 'Output' || output === fileType) return alert('Select a valid Output Format')
          else return alert('Input File Format Not Supported.')
        })
        
    }

    const startConversion = () => {
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

    const pngtowebp = () => {
        alert('Converting PNG To Webp')
        startConversion()
    }
   
    const jpgtopng = () => {
        alert('Converting JPG To PNG')
        startConversion()
    }
   
    const jpgtowebp = () => {
        alert('Converting JPG To Webp')
        startConversion()
    }
   
    const webptojpg = () => {
        alert('Converting Webp To JPG')
        startConversion()
    }
   
    const pngtojpg = () => {
        alert('Converting PNG To JPG')
        startConversion()
    }
   
    const webptopng = () => {
        alert('Converting Webp To PNg')
        startConversion()
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
            <DragDrop 
                files={files}
                setFiles={setFiles}
                setInput={setInput} 
            />
            <div className={styles.mediaManip_btn}>
                <Button value="Convert" type="primary" onClick={onConvert} disabled={convert} />
                {!convert && <Button value="Download" type="secondary" onClick={onDownload} disabled={download} />}
            </div>
        </div>
    )
}


 