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
        <span className='title-text'>THERMAL HOOD WASHED BLACK</span>
      </div>
      <div className='product-price'>
        <span>Rs.21,585/-</span>
      </div>
      <div className='product-description'>
        <div className='pd'>- 100% organic cotton brushed back fleece</div>
        <div className='pd'>- A heavy enzyme wash is used which can cause slight variances</div>
        <div className='pd'>- 275gsm</div>
        <div className='pd'>- 100% organic cotton waffle lining</div>
        <div className='pd'>- Waist pouch pockets</div>
        <div className='pd'>- Ykk metal front zip</div>
        <div className='pd'>- Unisex sizing</div>
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
