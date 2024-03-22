import React from 'react'
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket'
import Btn_grp from './Btn_grp'
import Product_Detail from './Product_Detail'
import { Routes, Route, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Styled_With from './Styled_With_blue';
import Human_slider from './Human_slider';
import Nav_bar from './Nav_bar';
function Drop6_360_Compo() {
  return (
    <div>
      <Nav_bar/>
      <Rotate360Degree/>
      <div className='btn-grp-drop-360-compo'>
      <Btn_grp/>
      </div>
    <Styled_With/>
      <Product_Detail/>
    <Human_slider/>

      
      
    </div>
  )
}

export default Drop6_360_Compo
