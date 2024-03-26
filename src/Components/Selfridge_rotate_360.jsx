import React, { useState, useEffect } from 'react';
import Nav_bar from './Nav_bar';
import Btn_grp_for_selfridge from './Btn_grp_for_selfridge';
import Sizing_chart_drpdwn_for_selfridge from './Sizing_chart_drpdwn_for_selfridge';
import Product_detail_for_selfridge from './Product_detail_for_selfridge';
import Size_btn_for_selfridge from './Size_btn_for_selfridge';
import { Routes, Route, Link } from 'react-router-dom';
function Selfridge_rotate_360() {
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
    <Product_detail_for_selfridge/>
    <Sizing_chart_drpdwn_for_selfridge/>
    <Btn_grp_for_selfridge/>
      <div className='rotate360parent'>
        <div className="rotation-container-360" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            id="imageof360"
            src={`src/img/selfridge-rotate/image${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
            className="rotating-image selfridge-rotate-360-img"
            />
        </div>
        <Size_btn_for_selfridge/>
        {/* <div className="rotation-container-3602" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            id="imageof3602"
            src={`src/img/drop6_rotate_two/image${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
            className="rotating-image2"
            />
        </div> */}
      </div>
    </>
  );
}

export default Selfridge_rotate_360;
