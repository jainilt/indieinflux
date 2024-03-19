// Other_colors.js
import { Routes, Route, Link,Router } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket';
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket';
import Black_denim_jacket_component from './Black_denim_jacket_component';
import Logo from './Logo';
import Size_Btn from './Size_Btn';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Navigation() {
  useGSAP(() => {
    
        gsap.from(".product-vars img", {
            duration: 0.5,
            y: 50,
            stagger: 0.2,
            delay: 0.75
        })
        // gsap.from(".size-btn", {
        //     duration: 0.3,
        //     scale: 0,
        //     delay: 1.25
        // })
  });
  return (
    <nav className='navvvvv'>
    <ul>
      <li>
        <div className="product-vars">
          <Link className='nav1 item-selected' to="/Drop6_360_Compo">
            <img className="product-vars-img" src="/src/img/entire-studios-moto-jacket-surface-wave-shadow.png" alt="" />
          </Link>
          <Link className='nav1' to="/Black_denim_jacket_component"> 
            <img className="product-vars-img" src="/src/img/entire-studios-moto-jacket-magnetite-shadow.png" alt="" />
          </Link>
        </div>
      </li>
    </ul>
  </nav>
  );
}

function Other_colors() {
  return (
    <>
    
     <Routes>
        <Route path="/Drop6_360_Compo" element={<Drop6_360_Compo/>} />
        <Route path="/Black_denim_jacket_component" element={<Black_denim_jacket_component/>} />
        <Route path="/*" element={<Navigation />} />
      </Routes>
    </>
  )
}

export default Other_colors;
