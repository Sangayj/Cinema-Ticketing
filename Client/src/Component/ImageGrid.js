import React from "react";
import "./ImageGrid.css"; // import CSS file with grid styles

const ImageGrid = ({ images }) => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className="card" key={index}>
          <div className="image" style={{ backgroundImage: `url(${image})` }} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
