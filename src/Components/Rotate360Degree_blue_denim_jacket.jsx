import React, { useState, useEffect } from 'react';
import Nav_bar from './Nav_bar';
import { Routes, Route, Link } from 'react-router-dom';
function Rotate360Degree() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 8;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => (prevIndex % totalImages) + 1);
      }
    }, 850);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    {/* <Nav_bar/> */}
      <div className='rotate360parent'>
        <div className="rotation-container-360" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            id="imageof360"
            src={`src/img/drop6_rotate_one/image${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
            className="rotating-image"
          />
        </div>
        <div className="rotation-container-3602" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            id="imageof3602"
            src={`src/img/drop6_rotate_two/image${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
            className="rotating-image2"
          />
        </div>
      </div>
    </>
  );
}

export default Rotate360Degree;
