import React from 'react'
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket'
import Btn_grp from './Btn_grp'
import Product_Detail from './Product_Detail'
import { Routes, Route, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Drop6_360_Compo() {
  return (
    <div>
      <Rotate360Degree/>
      <div className='btn-grp-drop-360-compo'>
      <Btn_grp/>
      </div>
      <Product_Detail/>
    </div>
  )
}

export default Drop6_360_Compo
