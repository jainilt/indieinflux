import React from 'react'
import Sizing_chart_Btn_grp from './Sizing_chart_Btn_grp'
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Random_compo from './Refine_Click_Dropdown';
import Sizing_dropdown_for_black_denim from './Sizing_dropdown_for_black_denim';
function Navigation() {
  return (
    <>
    <Sizing_dropdown_for_black_denim/>

<div>
    
      <Random_compo/>
    <div className='btn_for_black'>
    <Link to="/Cart"><button className='btn1 ph-bold brd bag-black'>Bag</button></Link>
    <Link to="/"><button className='btn1 ph-bold brd home-black'>Home</button></Link>
    </div>
      <br />
</div>
    </>
  );
}

function Btn_grp_for_black_denim() {
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

export default Btn_grp_for_black_denim
