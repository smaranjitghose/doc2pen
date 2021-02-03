import React, { useState } from "react";
import DomToImage from "dom-to-image";

export const EditContext = React.createContext();

const EditContextProvider = (props) => {
  const aImagePrefix = "";
  const [pageSrc, setPageSrc] = useState(`${aImagePrefix}blank1.png`);
  const [isBody, setIsBody] = useState(true);

  const [headValues, setHeadValues] = useState({
    headSize: null,
    headTop: null,
    headLeft: null,
    headLine: null,
    headFont: "HomemadeApple",
    headColor: "black"
  });
  const [bodyValues, setBodyValues] = useState({
    bodySize: null,
    bodyTop: null,
    bodyLeft: null,
    bodyLine: null,
    bodyFont: "HomemadeApple",
    bodyColor: "black"
  });

  const ImageNameMap = {
    Ruled1: "ruled1.png",
    Ruled2: "ruled2.jpg",
    OnlyMargin: "onlymargin.jpg",
    Blank1: "blank1.png",
    Blank2: "blank2.jpg",
  };

  const isBodyHandler = () => {
    setIsBody(!isBody);
  };

  const pageSrcHandler = (e) => {
    setPageSrc((`${ImageNameMap[e.target.value]}`));
  };

  const onValueChange = (e) => {
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

  const downloadImg = (e) => {
    e.preventDefault();

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
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        downloadURI(dataUrl, "generatedDoc.png");
      })
      .catch((error) => {
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
        downloadImg,
        pageSrcHandler,
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
