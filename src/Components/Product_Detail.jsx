import React from 'react'
import Human_slider from './Human_slider'
import Other_colors from './Other_colors'
import Size_Btn from './Size_Btn'
import { Routes, Route, Link } from 'react-router-dom';

function Product_Detail() {
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
        <div>- 100% cotton Japanese selvedge denim</div>
        <div>- 13.75oz</div>
        <div>- Waist pockets</div>
        <div>- Moto panel detailing</div>
        <div>- Ykk metal zips</div>
        <div>- Snap dome collar</div>
      <Other_colors />
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Size_Btn/>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Human_slider/>
    </>
  )
}

export default Product_Detail
