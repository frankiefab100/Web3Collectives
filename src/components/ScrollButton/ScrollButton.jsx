import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScrollVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`scrollTopBtn ${showScroll ? "show" : "hide"}`}
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollButton;
