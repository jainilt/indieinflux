import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Random_compo from './Refine_Click_Dropdown';
function Navigation() {
  return (
    <>
    

<div>
  <div className="btngrp btngrpforUniform">

    <div className='size-chart-btn-btn-grp'>
    </div>
    
    <div className="btn-group-second btn-group-second-forUniform">
    <Link to="/Cart"><button className='btn1 ph-bold brd collection-left bagbtnforuniform'>Bag</button></Link>
    <Link to="/"><button className='btn1 ph-bold brd homebtn homebtnforuniform'>Home</button></Link>
      <br />
    </div>
  </div>
</div>
    </>
  );
}

function Btn_grp_for_Uniform() {
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

export default Btn_grp_for_Uniform
