import React from 'react';
import { Routes, Route, Link, useLocation, Router } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Black_denim_jacket_component from './Black_denim_jacket_component';
import Sizing_chart_drpdwn_for_selfridge from './Sizing_chart_drpdwn_for_selfridge';
import Selfridge_rotate_360_white from './Selfridge_rotate_360_white';
import { gsap } from 'gsap';

function Navigation() {
  const location = useLocation();
  
  return (
    
    <nav className='navvvvv'>
      <ul>
        <li>
          <div className="other-colors-selfridge">
            <Link to="/Selfridge_rotate_360_white">
              <img className="product-vars-img" src="src/img/selfridges/other-colors/o1.png" alt="" />
            </Link>
            <Link className={location.pathname === "/" ? 'item-selected' : 'nav1'} to="/">
              <img className="product-vars-img" src="src/img/selfridges/other-colors/o2.png" alt="" />
            </Link>
            <Link className={location.pathname === "/" ? 'item-selected' : 'nav1'} to="/">
              <img className="product-vars-img" src="src/img/selfridges/other-colors/o3.png" alt="" />
            </Link>
            <Link className={location.pathname === "/" ? 'item-selected' : 'nav1'} to="/">
              <img className="product-vars-img" src="src/img/selfridges/other-colors/o4.png" alt="" />
            </Link>
            <Link className={location.pathname === "/" ? 'item-selected' : 'nav1'} to="/">
              <img className="product-vars-img" src="src/img/selfridges/other-colors/o5.png" alt="" />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

function Other_colors_for_selfridge() {
  return (
    <>
      <Routes>
        <Route path="/Selfridge_rotate_360_white" element={<Selfridge_rotate_360_white />} />
        <Route path="/Black_denim_jacket_component" element={<Black_denim_jacket_component />} />
        <Route path="/*" element={<Navigation />} />
      </Routes>
    </>
  )
}

export default Other_colors_for_selfridge;
