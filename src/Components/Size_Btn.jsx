import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Cart from './Cart';
import Styled_With from './Styled_With';

function Navigation() {
  const [selectedSize, setSelectedSize] = useState(''); // State to track selected size

  const handleClick = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    const buttons = document.querySelectorAll('.Size_btn_parent');

    buttons.forEach((button) => {
      gsap.from(button, {
        duration: 0.6, 
      y: -80, 
      opacity: 0, 
      ease: 'power3.inOut', 
      stagger: 0.1,
      });
      gsap.to(button, {
        duration: 3,
      y: 0, 
      opacity: 1, 
      ease: 'power3.inOut', 
      stagger: 0.1,
      scale: 1,
      });
      
    });

    return () => {
    };
  }, []); 

  

  return (
    <>
      <div className='Size_btn_parent'>
        <button
          className={`sizebtn ${selectedSize === 'XXS' ? 'active' : ''}`}
          onClick={() => handleClick('XXS')}
        >
          XXS
        </button>
        <button
          className={`sizebtn ${selectedSize === 'XS' ? 'active' : ''}`}
          onClick={() => handleClick('XS')}
        >
          XS
        </button>
        <button className={`sizebtn ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => handleClick('S')}>
          S
        </button>
        <button className={`sizebtn ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => handleClick('M')}>
          M
        </button>
        <button className={`sizebtn ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => handleClick('L')}>
          L
        </button>
        <button className={`sizebtn ${selectedSize === 'XL' ? 'active' : ''}`} onClick={() => handleClick('XL')}>
          XL
        </button>
        <button className={`sizebtn ${selectedSize === 'XXL' ? 'active' : ''}`} onClick={() => handleClick('XXL')}>
          XXL
        </button>
      </div>
      <div>
        <Link to="/Cart">
          <button className="size-btn addtocartbtn">add to cart</button>
        </Link>
      </div>
      {/* <Styled_With/> */}
    </>
  );
}

function Size_Btn() { // Renamed to App for claritys
  return (
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
  );
}

export default Size_Btn;
