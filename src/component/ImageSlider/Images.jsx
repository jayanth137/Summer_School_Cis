import React from 'react';
import ImageSlider from './ImageSlide';
import './ImageSlider.css';
import one from './Images/1.jpeg';
import two from './Images/2.jpeg';
import three from './Images/3.jpeg';
import four from './Images/4.jpeg';

const Images = () => {
  const images = [
    { img: one, name: 'Day 1' },
    { img: two, name: 'Day 2' },
    { img: three, name: 'Day 3' },
    { img: four, name: '' },
  ];

  return (
    <div className="Image-Slider" id="Glimpses">
      <h1>Glimpses</h1>
      <hr style={{ marginBottom: '70px' }} />

      <ImageSlider images={images} />
    </div>
  );
};

export default Images;
