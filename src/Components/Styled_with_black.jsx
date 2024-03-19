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
          <Link className='nav1' to="/Drop6_360_Compo">
            <img className="product-vars-img" src="src/img/styledwith4.png" alt="" />
          </Link>
          <Link className='nav1' to="/Rotate360Degree_black_denim_jacket"> 
            <img className="product-vars-img" src="src/img/styledwith5.png" alt="" />
          </Link>
          <Link className='nav1' to="/Rotate360Degree_black_denim_jacket"> 
            <img className="product-vars-img" src="src/img/styledwith6.png" alt="" />
          </Link>
        </div>
      </li>
    </ul>
  </nav>
    </>
  );
}

function Styled_With_black() {
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

export default Styled_With_black;
