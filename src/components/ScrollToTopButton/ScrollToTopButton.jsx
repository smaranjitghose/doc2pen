import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./style.module.css";

const ScrollToTop = () => {
  let toTopButtonObj = useRef(null);
  useEffect(() => {
    scrollFunction();
  });
  window.onscroll = () => {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      toTopButtonObj.current.style.display = "block";
    } else {
      toTopButtonObj.current.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Button
      ref={toTopButtonObj}
      className={styles.toTopButton}
      variant="light"
      onClick={() => topFunction()}
      aria-label="Scroll to Top"
    >
      <AiOutlineArrowUp />
    </Button>
  );
};

export default ScrollToTop;
