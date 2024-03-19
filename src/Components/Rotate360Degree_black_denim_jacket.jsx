import React, { useState, useEffect } from 'react';
import Nav_bar from './Nav_bar';
import { Routes, Route, Link } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Btn_grp from './Btn_grp';
import Product_Detail from './Product_Detail'
import Human_slider from './Human_slider';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Rotate360Degree_black_denim_jacket() {

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
      <Btn_grp className='scbg'/>
      <div className='rotate360parent'>
        <div className="rotation-container-360" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            id="imageof360"
            src={`src/img/drop6_rotate_black_girl/image ${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
            className="rotating-image"
            />
        </div>
        <div className="rotation-container-3602" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            id="imageof3602"
            src={`src/img/drop6_rotate_black_boy/image ${currentImageIndex}.png`}
            alt={`Image ${currentImageIndex}`}
            className="rotating-image2"
            />
        </div>
        
      </div>
            <Product_Detail/> 
            {/* <Human_slider/> */}
    </>
  );
}

export default Rotate360Degree_black_denim_jacket
