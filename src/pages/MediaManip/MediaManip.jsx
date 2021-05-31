import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
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
	const [outputOptions, setOutputOptions] = useState([
		"png",
		"jpg",
		"webp",
		"jpeg",
		"pdf",
	]);
	let zip = new JSZip();

	useEffect(() => {
		if (files.length === 0) {
			setConvert(true);
			setDownload(true);
		} else setConvert(false);
	}, [files, setConvert, setDownload]);

	useEffect(() => {
		if (convertedFiles.length === 0) setDownload(true);
	}, [convertedFiles, download]);

	const onConvert = () => {
		setProgress(0);
		setConvertedFiles([]);
		setDownload(true);
		const availableFormats = ["jpg", "webp", "png", "jiff", "jpeg"];
		let i = 0;
		for (i = 0; i < files.length; i++) {
			const fileType = files[i].name
				.substr(files[i].name.lastIndexOf(".") + 1)
				.toLowerCase();
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
		if (output === "pdf") return convertImage("pdf");
	};

	const startConversion = () => {
		const progressTime = setInterval(() => {
			setProgress(prev => {
				if (prev === 100) {
					clearInterval(progressTime);
					setDownload(false);
					if (convertedFiles.length === 0) return 0;
					return 100;
				} else return prev + 1;
			});
		}, 10);
	};

  const convertImage = format => {
    startConversion();
    let img = new Image();
    const dataUrls = [];
    files.forEach(item => {
      let canvas = document.createElement("canvas");
      img.src = item.preview;
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL(`image/${format!=="pdf" ? format : "png"}`);
      const width = img.width;
      const height = img.height;
      if(format==="pdf") {
        dataUrls.push({ dataUrl, width, height });
        if(dataUrls.length===files.length) {
          downloadPdf(dataUrls);
          return;
        }
      }
      setConvertedFiles(prev => {
        return [
          ...prev,
          {
            type: format,
            data: dataUrl.split(",")[1]
          },
        ];
      });
    });
  };

  const downloadPdf = images => {
    const doc = new jsPDF("l", "px", [images[0].width, images[0].height]);
    doc.deletePage(1);
    doc.text(10, 20, "");
    images.forEach(({ dataUrl, width, height }, i) => {
      doc.addPage([width, height]);
      doc.setPage(i + 1);
      doc.addImage(dataUrl, "PNG", 0, 0, width, height);
      if(i === images.length - 1) {
        doc.save("converted.pdf"); //save PDF
        setConvertedFiles([]);
      }
    });
  };
  
  const onDownload = () => {
    if(convertedFiles.length===0) return;
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
				<Dropdown
					type="Output"
					value={output}
					onChange={v => setOutput(v)}
					outputOptions={outputOptions}
				/>
			</div>
			<DragDrop
				files={files}
				setFiles={setFiles}
				setInput={setInput}
				setOutput={setOutput}
				input={input}
				outputOptions={outputOptions}
				setOutputOptions={setOutputOptions}
			/>
			<div className={styles.mediaManip_btn}>
				<Button
					value="Convert"
					type="primary"
					onClick={() => onConvert()}
					disabled={convert}
				/>
				{!convert && (
					<Button
						value="Download"
						type="secondary"
						onClick={onDownload}
						disabled={download}
					/>
				)}
			</div>
		</div>
	);
}
