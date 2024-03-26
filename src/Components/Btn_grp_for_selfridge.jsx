import React from 'react'
import Sizing_chart_Btn_grp from './Sizing_chart_Btn_grp'
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Nav_bar from './Nav_bar';
import Random_compo from './Refine_Click_Dropdown';
import Sizing_dropdown_for_black_denim from './Sizing_dropdown_for_black_denim';
function Navigation() {
  return (
    <>
    
    {/* <div className='scbg'><Sizing_chart_Btn_grp /></div>
    <Sizing_dropdown_for_black_denim/> */}

<div>
  <Nav_bar/>
  <div className="btngrp">

    <div className='size-chart-btn-btn-grp'>
    </div>
    
    <div className="btn-group-second">
      {/* <button className='btn1 ph-bold ph-currency-inr brd inr'>Inr</button> */}
      <Random_compo/>
    <Link to="/Cart"><button className='btn1 ph-bold brd selfridge-bag-btn'>Bag</button></Link>
    <Link to="/"><button className='btn1 ph-bold brd selfridge-home-btn'>Home</button></Link>
      <br />
      {/* <Sizing_chart_Btn_grp/> */}
    </div>
  </div>
</div>
    </>
  );
}

function Btn_grp_for_selfridge() {
  return (

    <>
       <Routes>
            
            <Route path="/Cart" element={<Cart />} />
            <Route
              path="/*"
              element={<Navigation />}
            />
          </Routes>
    </>
  )
}

export default Btn_grp_for_selfridge
