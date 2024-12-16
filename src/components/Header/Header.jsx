import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const images = [
    "https://i.imghippo.com/files/DJP9043fM.png",
    "https://i.imghippo.com/files/d6586jBo.png",
    "https://i.imghippo.com/files/SDHX9780EEw.png",
    "https://i.imghippo.com/files/Jf7841SS.png",
    "https://i.imghippo.com/files/OqH8533OM.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every second
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="header-container-2">
      <button className="arrow  left-arrow" onClick={handlePrev}>
        <FiChevronLeft size={40} />
      </button>
      <div className="carousel-2">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image-2"
        />
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>
        <FiChevronRight size={40} />
      </button>
    </div>
  );
};

export default Header;
