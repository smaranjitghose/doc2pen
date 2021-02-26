import React, { useState } from "react";
import DomToImage from "dom-to-image";
import { jsPDF } from "jspdf";

export const EditContext = React.createContext();

const EditContextProvider = props => {
  const aImagePrefix = "";
  const [pageSrc, setPageSrc] = useState(`${aImagePrefix}blank1.png`);
  const [isBody, setIsBody] = useState(true);

  const [headValues, setHeadValues] = useState({
    headSize: null,
    headTop: null,
    headLeft: 0,
    headLine: null,
    headFont: "HomemadeApple",
    headColor: "black",
    headWidth: null,
    headLetterSpace: null,
  });
  const [bodyValues, setBodyValues] = useState({
    bodySize: null,
    bodyTop: null,
    bodyLeft: 0,
    bodyLine: null,
    bodyFont: "HomemadeApple",
    bodyColor: "black",
    bodyWidth: null,
    bodyLetterSpace: null,
  });

  const ImageNameMap = {
    Ruled1: "ruled1.png",
    Ruled2: "ruled2.jpg",
    OnlyMargin: "onlymargin.jpg",
    Blank1: "blank1.png",
    Blank2: "blank2.jpg",
  };

  const isBodyHandler = (e) => {
    
    if(e.target.classList.contains('id-body')){
      setIsBody(true);
    }else{
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
        console.log(e.target.name)
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

  const downloadPdf = imgDataUri => {
    const doc = new jsPDF("p", "pt", "a4");
    const width = doc.internal.pageSize.width;
    const height = doc.internal.pageSize.height;
    doc.text(10, 20, "");
    doc.addImage(imgDataUri, "PNG", 0, 0, width, height);

    doc.save();
  };

  const importTxt = e => {
    e.preventDefault();

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      let textarea = document.querySelector("#show-text");
      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();

      var textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = function (event) {
          let rtf = convertToPlain(event.target.result);
          textarea.value += rtf;
        };
      } else {
        textarea.value += "<span class='error'>It doesn't seem to be a text file!</span>";
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  };

  function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "");
    // rtf = rtf.replace(/\n/ig, " ");
    rtf = rtf.replace(/\\/gi, "");
    rtf = rtf.replace(/\*/gi, "");
    rtf = rtf.replace(/decimal.|tightenfactor0|eftab720|HYPERLINK|irnatural/gi, "");
    rtf = rtf.replace(/irnaturaltightenfactor0|000000/gi, "");
    rtf = rtf.replace(/�|ࡱ|p#|#|,|%|@|\$|~/gi, "");
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
    </EditContext.Provider>
  );
};

export default EditContextProvider;
