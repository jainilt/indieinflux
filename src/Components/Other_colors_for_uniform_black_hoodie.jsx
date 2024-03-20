import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo';
import Black_denim_jacket_component from './Black_denim_jacket_component';
import Uniform_hoodie_brown from './Uniform_hoodie_brown';
import Uniform_hoodie_black from './Uniform_hoodie_black';
import Nav_bar from './Nav_bar';

function Other_colors_for_uniform_black_hoodie() {
  return (
    <>
    <Nav_bar/>
    <div className="product-vars_for_uniform_black_hoodie">
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other1.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other2.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other3.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other4.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other5.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other6.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other7.png" alt="" />
        <img className="product-vars-img-for-hoodie" src="/src/img/uniform/other8.png" alt="" />
      </div>
    </>
  )
}

export default Other_colors_for_uniform_black_hoodie;
