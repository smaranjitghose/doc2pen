import React, { useState } from "react";
import DomToImage from "dom-to-image";
import { jsPDF } from "jspdf";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import ReactSnackBar from "react-js-snackbar";
import checkBox from "./../../../assets/images/checkmark.svg";

export const EditContext = React.createContext();
const svgStyles = {
	height: 50,
	position: "absolute",
	top: 0,
	left: 0,
};
const EditContextProvider = props => {
	const aImagePrefix = "";
	const [pageSrc, setPageSrc] = useState(`${aImagePrefix}blank1.png`);

	const [bodyValues, setBodyValues] = useState({
		bodySize: null,
		bodyTop: 20,
		bodyLeft: 20,
		bodyRight: 20,
		bodyLine: null,
		bodyFont: "HomemadeApple",
		bodyFontWeight: "normal",
		bodyColor: "black",
		bodyWidth: 70,
		bodyLetterSpace: null,
		bodyText: "",
	});

	const [allPagesVisible, setAllPagesVisible] = useState(false);

	const [show, setShow] = useState(false);
	const [showing, setShowing] = useState(false);

	const ImageNameMap = {
		Ruled1: "ruled1.png",
		Ruled2: "ruled2.jpg",
		OnlyMargin: "onlymargin.jpg",
		Blank1: "blank1.png",
		Blank2: "blank2.jpg",
	};

	const pageSrcHandler = e => {
		setPageSrc(`${ImageNameMap[e.target.value]}`);
	};

	const onValueChange = e => {
		setBodyValues({ ...bodyValues, [e.target.name]: e.target.value });
	};

	const onElementValueChange = e => {
		setBodyValues({ ...bodyValues, [e.name]: e.value });
	};

	const downloadAction = (baseFileName, type) => {
		if (baseFileName && type === "PDF") {
			showToast();
		}
		const node = document.getElementById("outputPage");
		const scale = 750 / node.offsetWidth;
		const options = {
			height: node.offsetHeight * scale,
			width: node.offsetWidth * scale,
			style: {
				transform: `scale(${scale})`,
				transformOrigin: "top left",
				width: `${node.offsetWidth}px`,
				height: `${node.offsetHeight}px`,
			},
		};
		const nodes = document.querySelectorAll(".outputPage");
		const dataUrls = [];
		const multiple = nodes.length > 1;
		nodes.forEach((node, index) =>
			DomToImage.toPng(node, options)
				.then(dataUrl => {
					const fileName = multiple
						? `${baseFileName}-${index}.png`
						: `${baseFileName}.png`;
					dataUrls.push(dataUrl);
					if (type === "PNG") {
						if (nodes.length === 1) downloadURI(dataUrl, fileName);
						else if (dataUrls.length === nodes.length)
							downloadZip(dataUrls, baseFileName);
					} else if (type === "PDF") {
						if (dataUrls.length === nodes.length)
							downloadPdf(dataUrls, baseFileName);
					}
				})
				.catch(error => {
					console.error("oops,something went wrong", error);
				})
				.finally(() => {
					if (dataUrls.length === nodes.length) {
						console.log("all converted");
						setAllPagesVisible(false);
					}
				}),
		);
	};
	const downloadURI = (uri, name) => {
		const link = document.createElement("a");
		link.download = name;
		link.href = uri;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const showToast = () => {
		if (showing) return;

		setShow(true);
		setShowing(true);
	};

	const downloadPdf = async (imgDataUris, name) => {
		const doc = new jsPDF("p", "pt", "a4");
		const width = doc.internal.pageSize.width;
		const height = doc.internal.pageSize.height;
		doc.text(10, 20, "");
		imgDataUris.forEach((imgDataUri, i) => {
			if (i > 0) {
				doc.addPage();
				doc.setPage(i + 1);
			}
			doc.addImage(imgDataUri, "PNG", 0, 0, width, height);
		});

		await new Promise(resolve => {
			// Wait for PDF download
			doc.save(name + ".pdf"); //save PDF
			resolve(true);
		});

		//close notif popup
		setShow(false);
		setShowing(false);
	};

	const downloadZip = (imgDataUris, name) => {
		const zip = new JSZip();
		imgDataUris.forEach((img, i) => {
			const b64code = img.substring(22);
			zip.file(`page-${i + 1}.png`, b64code, { base64: true });
		});
		zip.generateAsync({ type: "blob" }).then(function (content) {
			saveAs(content, `${name}.zip`);
		});
	};

	const importTxt = e => {
		e.preventDefault();

		if (window.File && window.FileReader && window.FileList && window.Blob) {
			let textarea = document.querySelector("#show-text");
			textarea.value = "";
			var file = document.querySelector("input[type=file]").files[0];
			var reader = new FileReader();

			var textFile = /text.*/;

			if (file.type.match(textFile)) {
				reader.onload = function (event) {
					let rtf = convertToPlain(event.target.result);
					textarea.value += rtf;
				};
			} else {
				alert(
					"Sorry, We cannot import the selected file. The file must be of type '.txt' ",
				);
			}
			reader.readAsText(file);
		} else {
			alert("Your browser is too old to support HTML5 File API");
		}
	};

	function convertToPlain(rtf) {
		rtf = rtf.replace(/\\par[d]?/g, "");
		rtf = rtf.replace(/\{\*?\\[^{}]+}|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "");
		rtf = rtf.replace(
			/decimal.|tightenfactor0|eftab720|HYPERLINK|irnatural/gi,
			"",
		);
		rtf = rtf.replace(/irnaturaltightenfactor0|000000/gi, "");
		rtf = rtf.replace(/�|ࡱ|p#|/gi, "");
		return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
	}

	return (
		<EditContext.Provider
			value={{
				bodyValues,
				pageSrc,
				onValueChange,
				onElementValueChange,
				downloadAction,
				pageSrcHandler,
				importTxt,
				allPagesVisible,
				setAllPagesVisible,
			}}
		>
			{props.children}

			<ReactSnackBar
				Icon={<img style={svgStyles} src={checkBox} alt="" />}
				Show={show}
			>
				Generating PDF! Please wait...
			</ReactSnackBar>
		</EditContext.Provider>
	);
};

export default EditContextProvider;
