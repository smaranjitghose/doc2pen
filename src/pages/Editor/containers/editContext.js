import React, { useState } from "react";
import DomToImage from "dom-to-image";
import { jsPDF } from "jspdf";
import ReactSnackBar from "react-js-snackbar";
import checkBox from "./../../../assets/images/editor/checkmark.svg";

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
  const [isBody, setIsBody] = useState(true);


  const [headValues, setHeadValues] = useState({
    headSize: null,
    headTop: 20,
    headLeft: 20,
    headRight: 20,
    headLine: null,
    headFont: "HomemadeApple",
    headColor: "black",
    headWidth: null,
    headLetterSpace: null,
  });
  const [bodyValues, setBodyValues] = useState({
    bodySize: null,
    bodyTop: 20,
    bodyLeft: 20,
    bodyRight: 20,
    bodyLine: null,
    bodyFont: "HomemadeApple",
    bodyColor: "black",
    bodyWidth: null,
    bodyLetterSpace: null,
    bodyText: "",
  });

  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);

  const ImageNameMap = {
    Ruled1: "ruled1.png",
    Ruled2: "ruled2.jpg",
    OnlyMargin: "onlymargin.jpg",
    Blank1: "blank1.png",
    Blank2: "blank2.jpg",
  };

  const isBodyHandler = e => {
    if (e.target.classList.contains("id-body")) {
      setIsBody(true);
    } else {
      setIsBody(false);
    }
  };

  const pageSrcHandler = e => {
    setPageSrc(`${ImageNameMap[e.target.value]}`);
  };

  const onValueChange = e => {
    if (isBody) {
      setBodyValues({ ...bodyValues, [e.target.name]: e.target.value });
    } else {
      setHeadValues({
        ...headValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onElementValueChange = e => {
    if (isBody) {
      setBodyValues({ ...bodyValues, [e.name]: e.value });
    } else {
      setHeadValues({
        ...headValues,
        [e.name]: e.value,
      });
    }
  };

  const downloadAction = e => {
    e !== undefined && e.preventDefault();
    if (e !== undefined && e.target.name === "as PDF") {
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

    DomToImage.toPng(node, options)
      .then(dataUrl => {
        const img = new Image();
        img.src = dataUrl;
        console.log(e.target.name);
        if (e !== undefined && e.target.name === "as PNG") {
          downloadURI(dataUrl, "generatedDoc.png");
        } else if (e !== undefined && e.target.name === "as PDF") {
          downloadPdf(dataUrl);
        }
      })
      .catch(error => {
        console.error("oops,something went wrong", error);
      });
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
    // setTimeout(() => {
    //   setShow(false);
    //   setShowing(false);
    // }, 2000);
  };
  const downloadPdf = async imgDataUri => {
    const doc = new jsPDF("p", "pt", "a4");
    const width = doc.internal.pageSize.width;
    const height = doc.internal.pageSize.height;
    doc.text(10, 20, "");
    doc.addImage(imgDataUri, "PNG", 0, 0, width, height);

    await new Promise((resolve, reject) => { // Wait for PDF download
      doc.save(); //save PDF
      resolve(true);
    });

    //close notif popup
    setShow(false);
    setShowing(false);
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

        }
      } else {
        alert("Sorry, We cannot import the selected file. The file must be of type '.txt' ");
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  }


  function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "");
    rtf = rtf.replace(/decimal.|tightenfactor0|eftab720|HYPERLINK|irnatural/gi, "");
    rtf = rtf.replace(/irnaturaltightenfactor0|000000/gi, "");
    rtf = rtf.replace(/�|ࡱ|p#|/gi, "");
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }

  return (
    <EditContext.Provider
      value={{
        isBody,
        headValues,
        bodyValues,
        pageSrc,
        onValueChange,
        onElementValueChange,
        isBodyHandler,
        downloadAction,
        pageSrcHandler,
        importTxt,
      }}
    >
      {props.children}



      <ReactSnackBar Icon={<img style={svgStyles} src={checkBox} alt="" />} Show={show}>
        Generating PDF! Please wait...
      </ReactSnackBar>
    </EditContext.Provider>
  );
};

export default EditContextProvider;
