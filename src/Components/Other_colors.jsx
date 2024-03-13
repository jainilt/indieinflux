// Other_colors.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket';
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket';
import Size_Btn from './Size_Btn';
function Navigation() {
  return (
    <nav className='navvvvv'>
      <ul>
        <li>
          <div className="product-vars">
            <Link className='nav1' to="/Drop6_360_Compo">
              <img className="product-vars-img" src="/src/img/entire-studios-moto-jacket-surface-wave-shadow.png" alt="" />
            </Link>
            <Link className='nav1' to="/Rotate360Degree_black_denim_jacket">
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
      <Route path="/Rotate360Degree_black_denim_jacket" element={<Rotate360Degree_black_denim_jacket />} />
      <Route path="/*" element={<Navigation />} />
    </Routes>
    </>
  )
}

export default Other_colors;
