import React from 'react'
import Sizing_chart_Btn_grp from './Sizing_chart_Btn_grp'
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Random_compo from './Refine_Click_Dropdown';
import Sizing_dropdown_for_black_denim from './Sizing_dropdown_for_black_denim';
import Other_colors_for_uniform_black_hoodie from './Other_colors_for_uniform_black_hoodie';
function Navigation() {
  return (
    <>
    

<div>
  <div className="btngrp">

    <div className='size-chart-btn-btn-grp'>
    </div>
    
    <div className="btn-group-second-for-hoodie">
      <Random_compo/>
    <Link to="/Cart"><button className='btn1 ph-bold brd collection-left'>Bag</button></Link>
    <Link to="/"><button className='btn1 ph-bold brd homebtn'>Home</button></Link>
      <br />
    </div>
  </div>
      <Other_colors_for_uniform_black_hoodie/>
</div>
    </>
  );
}

function Btn_grp_for_uniform_hoodies() {
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

export default Btn_grp_for_uniform_hoodies
