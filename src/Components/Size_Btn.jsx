import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
function  Size_Btn() {
  return (
    <div>
      <div className='Size_btn_parent'>
        <button className='sizebtn xxs'>XXS</button>
        <button className='sizebtn xs'>XS</button>
        <button className='sizebtn s'>S</button>
        <button className='sizebtn m'>M</button>
        <button className='sizebtn l'>L</button>
        <button className='sizebtn xl'>XL</button>
        <button className='sizebtn xxl'>XXL</button>

      </div>
      <button className="size-btn addtocartbtn">
        add to cart<i
          className="ph-bold ph-shopping-cart "></i>
      </button>
    </div>
  )
}

export default Size_Btn
