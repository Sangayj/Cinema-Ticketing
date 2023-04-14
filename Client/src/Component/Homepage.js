import React from 'react';
import './Homepage.css';

const Homepage = ({ images }) => {
  return (
    <div className="homepage-container">
      <div className="homepage-row">
        <div className="homepage-image-container">
          <img src={images[0]} alt="image1" />
        </div>
        <div className="homepage-image-container">
          <img src={images[1]} alt="image2" />
        </div>
      </div>
      <div className="homepage-row">
        <div className="homepage-image-container">
          <img src={images[2]} alt="image3" />
        </div>
        <div className="homepage-image-container">
          <img src={images[3]} alt="image4" />
        </div>
      </div>
      <div className="homepage-row">
        <div className="homepage-image-container">
          <img src={images[4]} alt="image5" />
        </div>
        <div className="homepage-image-container">
          <img src={images[5]} alt="image6" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
