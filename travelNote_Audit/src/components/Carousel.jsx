import React, { useState, useEffect } from 'react';
import styles from './carousel.module.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 每3秒切换图片

    setIntervalId(interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images, intervalId]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <img 
      src={images[currentIndex]} 
      alt="carousel" 
      className={styles.carousel}
      />
      {/* <button onClick={handlePrevious}>上一张</button>
      <button onClick={handleNext}>下一张</button> */}
    </div>
  );
};

export default Carousel;