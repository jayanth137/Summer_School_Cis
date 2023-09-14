import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={prevImage}>
        &#8249;
      </button>
      <div className="card-img">
        <img
          className="slider-image bronze"
          src={images[currentIndex].img}
          alt={`Image ${currentIndex + 1}`}
        />
        <h5>{images[currentIndex].name}</h5>
      </div>
      <button className="next-button" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlide;
