import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import Progress from "./Progress/Progress";
import Dropdown from "./DropDown/DropDown";
import DragDrop from "./DragDrop/DragDrop";
import Button from "./Button/Button";

import styles from "./media-manip.module.scss";

export default function MediaManip() {
  const [input, setInput] = useState("Input");
  const [output, setOutput] = useState("Output");
  const [files, setFiles] = useState([]);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [download, setDownload] = useState(true); //true = disabled
  const [convert, setConvert] = useState(true); //true = disabled
  let zip = new JSZip();

  useEffect(() => {
    if (files.length === 0) {
      setConvert(true);
      setDownload(true);
    } else setConvert(false);
  }, [files, setConvert, setDownload]);

  const onConvert = () => {
    setProgress(0);
    setConvertedFiles([]);
    setDownload(true);
    const availableFormats = ["jpg", "webp", "png", "jiff", "jpeg"];
    let i = 0;
    for (i = 0; i < files.length; i++) {
      const fileType = files[i].name.substr(files[i].name.lastIndexOf(".") + 1).toLowerCase();
      if (!availableFormats.includes(fileType)) {
        console.log(fileType);
        break;
      }
    }
    if (i !== files.length) return alert("Input File Format Not Supported.");

    const fileType = files[0].name.split(".")[1];
    if (output === "Output" || (files.length === 1 && output === fileType))
      return alert("Select a valid Output Format");
    if (output === "jpg") return convertImage("jpg");
    if (output === "webp") return convertImage("webp");
    if (output === "png") return convertImage("png");
    if (output === "jpeg") return convertImage("jpeg");
  };

  const startConversion = () => {
    const progressTime = setInterval(() => {
      setProgress(prev => {
        if (prev === 100) {
          clearInterval(progressTime);
          setDownload(false);
          return 100;
        } else return prev + 1;
      });
    }, 10);
  };

  const convertImage = format => {
    startConversion();
    let img = new Image();
    let canvas = document.createElement("canvas");
    files.forEach(item => {
      img.src = item.preview;
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      setConvertedFiles(prev => {
        return [
          ...prev,
          {
            type: format,
            data: canvas.toDataURL(`image/${format}`).split(",")[1],
          },
        ];
      });
    });
  };

  const onDownload = () => {
    convertedFiles.forEach((item, index) => {
      zip.file(`${index}.${item.type}`, item.data, { base64: true });
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "converted files.zip");
    });
    setProgress(0);
  };

  return (
    <div className={styles.mediaManip}>
      <h1 className={styles.mediaManip_title}>Image Converter</h1>
      <div className={styles.mediaManip_dropDowns}>
        <Dropdown type="Input" value={input} />
        {!convert && <Progress progress={progress} />}
        <Dropdown type="Output" value={output} onChange={v => setOutput(v)} />
      </div>
      <DragDrop files={files} setFiles={setFiles} setInput={setInput} />
      <div className={styles.mediaManip_btn}>
        <Button value="Convert" type="primary" onClick={() => onConvert()} disabled={convert} />
        {!convert && <Button value="Download" type="secondary" onClick={onDownload} disabled={download} />}
      </div>
    </div>
  );
}
