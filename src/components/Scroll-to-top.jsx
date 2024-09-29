import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import './scroll-to-top.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={50} color="#3B3B3B" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
