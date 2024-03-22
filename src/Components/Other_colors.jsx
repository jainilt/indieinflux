import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Black_denim_jacket_component from './Black_denim_jacket_component';
import { gsap } from 'gsap';

function Navigation() {
  const location = useLocation();
  
  return (
    
    <nav className='navvvvv'>
      <ul>
        <li>
          <div className="product-vars">
            <Link className={location.pathname === "/Drop6_360_Compo" ? 'nav1 item-selected' : 'nav1'} to="/Drop6_360_Compo">
              <img className="product-vars-img" src="/src/img/entire-studios-moto-jacket-surface-wave-shadow.png" alt="" />
            </Link>
            <Link className={location.pathname === "/Black_denim_jacket_component" ? 'nav1 item-selected' : 'nav1'} to="/Black_denim_jacket_component">
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
        <Route path="/Drop6_360_Compo" element={<Drop6_360_Compo />} />
        <Route path="/Black_denim_jacket_component" element={<Black_denim_jacket_component />} />
        <Route path="/*" element={<Navigation />} />
      </Routes>
    </>
  )
}

export default Other_colors;
