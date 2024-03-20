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
function Product_detail_for_hoodies() {
  useGSAP(() => {
    
    // gsap.from(".title-text", {
    //    x:-80,
    //    opacity: 0,
    //    duration: 2,
    // })
    // gsap.to(".title-text", {
    //     opacity: 1,
    //     x: 0,
    //     duration: 2
    // })
    // gsap.from(".pd", {
    //    x:-80,
    //    opacity: 0,
    //    duration: 2,
    // })
    // gsap.to(".pd", {
    //     opacity: 1,
    //     x: 0,
    //     duration: 2
    // })
  //   gsap.from(".product-price", {
  //     x:-80,
  //     opacity: 0,
  //     duration: 2,
  //  })
  //   gsap.to(".product-price", {
  //       opacity: 1,
  //       x: 0,
  //       duration: 2
  //   })
});
  return (
    <>
    <div className='product-details-compo'>
      <div className='product-title'>
        <span className='title-text'>MOTO DENIM JACKET SURFACE WAVE</span>
      </div>
      <div className='product-price'>
        <span>Rs.1899/-</span>
      </div>
      <div className='product-description'>
        <div className='pd'>- 100% cotton Japanese selvedge denim</div>
        <div className='pd'>- 13.75oz</div>
        <div className='pd'>- Waist pockets</div>
        <div className='pd'>- Moto panel detailing</div>
        <div className='pd'>- Ykk metal zips</div>
        <div className='pd'>- Snap dome collar</div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Size_Btn/>
    {/* <Styled_With/> */}
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    {/* <Human_slider/> */}
    </>
  )
}

export default Product_detail_for_hoodies
