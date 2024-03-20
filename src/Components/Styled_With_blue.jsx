// Other_colors.js
import React from 'react';
import { Routes, Route, Link,Router } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket';
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket';
import Logo from './Logo';
import Size_Btn from './Size_Btn';
function Navigation() {
  return (
    <>
    <div className='ii-styled-with-title'>styled with  ↓</div>
        <nav className='navvvvv'>
    <ul>
      <li>
        <div className="product-vars product-vars-styled-with">
            <img className="product-vars-img" src="src/img/styledwith1.png" alt="" />
            <img className="product-vars-img" src="src/img/styledwith2.png" alt="" />
            <img className="product-vars-img" src="src/img/styledwith3.png" alt="" />
        </div>
      </li>
    </ul>
  </nav>
    </>
  );
}

function Styled_With() {
  return (
    <>
    
     <Routes>
        <Route path="/Drop6_360_Compo" element={<Drop6_360_Compo/>} />
        <Route path="/Rotate360Degree_black_denim_jacket" element={<Rotate360Degree_black_denim_jacket/>} />
        <Route path="/*" element={<Navigation />} />
      </Routes>
    </>
  )
}

export default Styled_With;
