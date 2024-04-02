import React from 'react'
import Sizing_chart_Btn_grp from './Sizing_chart_Btn_grp'
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Random_compo from './Refine_Click_Dropdown';
import Sizing_dropdown_for_black_denim from './Sizing_dropdown_for_black_denim';
function Navigation() {
  return (
    <>
    
    <div className='scbg'><Sizing_chart_Btn_grp /></div>
    <Sizing_dropdown_for_black_denim/>

<div>
  <div className="btngrp">

    <div className='size-chart-btn-btn-grp'>
    </div>
    
    <div className="btn-group-second">
      <Random_compo/>
    <Link to="/Cart"><button className='btn1 ph-bold brd collection-left'>Bag</button></Link>
    <Link to="/"><button className='btn1 ph-bold brd homebtn'>Home</button></Link>
      <br />
    </div>
  </div>
</div>
    </>
  );
}

function Btn_grp() {
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

export default Btn_grp
