import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
function Nav_bar() {
  return (
    <div className="nav">
            <div className="btn-group">
                <button className='btn1'> Drop 6</button>
                <button className="active"><i className="ph-bold ph-arrow-down"></i>Sizing chart</button>
            </div>
            <div className="btn-group ">
                <button className="active btn2 rupeeSymbo"> <span className='ph-bold ph-currency-inr'>999</span> </button>
                <button className='bagbtn'><span className='ph-bold ph-basket'> Bag</span></button>
            </div>
        </div>
  )
}

export default Nav_bar
