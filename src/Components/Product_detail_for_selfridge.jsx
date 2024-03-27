import React from 'react'
import Human_slider from './Human_slider'
import Other_colors from './Other_colors'
import Size_Btn from './Size_Btn'
import { Routes, Route, Link } from 'react-router-dom';
import  { useEffect } from 'react';
import { gsap } from 'gsap';
import Styled_With from './Styled_With_blue';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/all';
function Product_detail_for_selfridge() {

  return (
    <>
    <div className='product-details-compo'>
      <div className='product-title'>
        <span className='title-text'>PILLOW BOMBER DUSTY PINK</span>
      </div>
      <div className='product-price'>
        <span>Rs.42,000/-</span>
      </div>
      <div className='product-description'>
        <div className='pd'>- 100% cotton canvas outer shell</div>
        <div className='pd'>- Internal ribbed cuff detail</div>
        <div className='pd'>- Recycled polyfill</div>
        <div className='pd'>- Vintage wash treatment</div>
        <div className='pd'>- Waist and internal chest pockets</div>
        <div className='pd'>- Adjustable hem drawcords</div>
        <div className='pd'>- Metal YKK zips</div>
        <div className='pd'>- 3 compartments</div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}

export default Product_detail_for_selfridge
