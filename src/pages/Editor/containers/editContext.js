import React, {useEffect, useState} from "react";
import DomToImage from "dom-to-image";
import {jsPDF} from "jspdf";
import ReactSnackBar from "react-js-snackbar";
import checkBox from "./../../../assets/images/editor/checkmark.svg";

export const EditContext = React.createContext();
const svgStyles = {
  height: 50,
  position: "absolute",
  top: 0,
  left: 0,
};
const EditContextProvider = (props) => {
  const aImagePrefix = "";
  const [pageSrc, setPageSrc] = useState(`${aImagePrefix}blank1.png`);
  const [isBody, setIsBody] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const initialState = [
    {
      head: {
        text: "",
        headLeft: 0,
        headTop: 0,
        headWidth: null,
      },
      body: {
        text: "",
        bodyLeft: 0,
        bodyTop: 0,
        bodyWidth: null,
      },
    },
  ]
  const [pages, setPages] = useState(initialState);

  useEffect(() => {
    if (currentPage === pages.length) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  }, [currentPage, pages]);

  const deletePage = (index) => {
    var pagesCopy = [...pages];
    pagesCopy.splice(index, 1);
    setPages(pagesCopy);
  };
  const addPage = () => {
    var pagesCopy = [...pages];
    pagesCopy.push({
      head: {
        text:"",
        headLeft: 0,
        headTop: 0,
        headWidth: null,
      },
      body: {
        text:"",
        bodyLeft: 0,
        bodyTop: 0,
        bodyWidth: null,
      },
    });
    setPages(pagesCopy);
  };

  const nextPage = () =>
    currentPage < pages.length - 1 &&
    setCurrentPage((currentPage) => currentPage + 1);

  const prevPage = () =>
    currentPage > 0 && setCurrentPage((currentPage) => currentPage - 1);

  const [headValues,] = useState({
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
  const [bodyValues, ] = useState({
    bodySize: null,
    bodyTop: 20,
    bodyLeft: 20,
    bodyRight: 20,
    bodyLine: null,
    bodyFont: "HomemadeApple",
    bodyColor: "black",
    bodyWidth: null,
    bodyLetterSpace: null,
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

  const isBodyHandler = (e) => {
    if (e.target.classList.contains("id-body")) {
      setIsBody(true);
    } else {
      setIsBody(false);
    }
  };

  const pageSrcHandler = (e) => {
    setPageSrc(`${ImageNameMap[e.target.value]}`);
  };

  const onValueChange = (element, index, isBody) => {
    const text = element.innerText;
    var pagesCopy = pages.filter((page, i) => {
      if (i !== index) {
        return page;
      } else {
        if (isBody) {
          page.body.text = text;
        } else {
          page.head.text = text;
        }
        return page;
      }
    });
    setPages(pagesCopy);
  };

  const downloadSinglePage = (index, type) => {
    const nodes = document.querySelectorAll(".page");
    if (nodes.length === 0) {
      return;
    }
    const node = nodes[index];
    if (type === "as PNG") {
      downloadURI([node]);
    } else if (type === "as PDF") {
      showToast();
      downloadPdf([node]);
    }
  };
  const downloadAction = (e) => {
    e !== undefined && e.preventDefault();
    const nodes = document.querySelectorAll(".page");
    if (nodes.length === 0) {
      return;
    }
    if (e !== undefined && e.target.name === "as PNG") {
      downloadURI(nodes);
    } else if (e !== undefined && e.target.name === "as PDF") {
      showToast();
      downloadPdf(nodes);
    }
  };

  const downloadURI = async (nodes) => {
    const scale = 750 / nodes[0].offsetWidth;
    const options = {
      height: nodes[0].offsetHeight * scale,
      width: nodes[0].offsetWidth * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${nodes[0].offsetWidth}px`,
        height: `${nodes[0].offsetHeight}px`,
      },
    };
    for (let i = 0; i < nodes.length; i++) {
      var added = false;
      const node = nodes[i];
      const deleteBtn = node.querySelector(".deleteButton");
      deleteBtn.classList.add("hideBtn");
      if (!node.classList.contains("showPage")) {
        added = true;
        node.classList.add("showPage");
      }
      const url = await DomToImage.toPng(node, options);
      const img = new Image();
      const link = document.createElement("a");
      img.src = url;
      link.download = "generatedDoc.png";
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (added) {
        node.classList.remove("showPage");
      }
      deleteBtn.classList.remove("hideBtn");
    }
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

  const downloadPdf = async (nodes) => {
    const doc = new jsPDF("p", "pt", "a4");
    const width = doc.internal.pageSize.width;
    const height = doc.internal.pageSize.height;
    const scale = 750 / nodes[0].offsetWidth;
    const options = {
      height: nodes[0].offsetHeight * scale,
      width: nodes[0].offsetWidth * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${nodes[0].offsetWidth}px`,
        height: `${nodes[0].offsetHeight}px`,
      },
    };

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      let added = false;
      const deleteBtn = node.querySelector(".deleteButton");
      deleteBtn.classList.add("hideBtn");
      if (!node.classList.contains("showPage")) {
        added = true;
        node.classList.add("showPage");
      }
      const url = await DomToImage.toPng(node, options);
      doc.text(10, 20, "");
      doc.addImage(url, "PNG", 0, 0, width, height);
      if (i !== nodes.length - 1) {
        doc.addPage();
      }
      deleteBtn.classList.remove("hideBtn");
      if (added) {
        node.classList.remove("showPage");
      }
    }
    await new Promise((resolve, reject) => {
      // Wait for PDF download
      doc.save(); //save PDF
      resolve(true);
    });

    //close notif popup
    setShow(false);
    setShowing(false);
  };

  const importTxt = (e) => {
    e.preventDefault();

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();
      var text = "";
      var textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = function (event) {
          let rtf = convertToPlain(event.target.result);
          text += rtf;
          const node = document.querySelectorAll(".page-body")[0];
          node.removeAttribute("contenteditable");
          node.innerHTML = text;
          node.setAttribute("contenteditable",true);
        };
      } else {
        const node = document.querySelectorAll(".page-body")[0];
        node.removeAttribute("contenteditable");
        text += "<span class='error'>It doesn't seem to be a text file!</span>";
        node.innerText = text;
        node.setAttribute("contenteditable",true);
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  };

  function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(
      /\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g,
      ""
    );
    // rtf = rtf.replace(/\n/ig, " ");
    rtf = rtf.replace(/\\/gi, "");
    rtf = rtf.replace(/\*/gi, "");
    rtf = rtf.replace(
      /decimal.|tightenfactor0|eftab720|HYPERLINK|irnatural/gi,
      ""
    );
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
        pages,
        currentPage,
        onValueChange,
        isBodyHandler,
        downloadAction,
        pageSrcHandler,
        importTxt,
        nextPage,
        prevPage,
        deletePage,
        addPage,
        downloadSinglePage,
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
