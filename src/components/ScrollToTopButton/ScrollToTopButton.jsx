import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./scroll-to-top.module.scss";

const ScrollToTop = () => {
  let toTopButtonObj = useRef(null);
  const [buttonState, changeButtonState] = useState({
    visible: false,
    lastHeight: 0,
  });
  useEffect(() => {
    scrollFunction();
  });
  window.onscroll = () => {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      if (!buttonState.visible) {
        changeButtonState({
          visible: true,
          lastHeight: document.body.scrollTop,
        });
      }
    } else {
      if (buttonState.visible) {
        changeButtonState({
          visible: false,
          lastHeight: document.body.scrollTop,
        });
      }
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const button = buttonState.visible ? (
    <Button
      ref={toTopButtonObj}
      className={styles.toTopButton}
      variant="light"
      onClick={() => topFunction()}
      aria-label="Scroll to Top"
    >
      <AiOutlineArrowUp />
    </Button>
  ) : null;

  return button;
};

export default ScrollToTop;
