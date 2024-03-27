import React from 'react'
import Nav_bar from './Nav_bar'
import Logo from './Logo'
import Refine_Click_Dropdown from './Refine_Click_Dropdown'
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket';
import Other_colors from './Other_colors';
import Product_Detail from './Product_Detail';
import Human_slider from './Human_slider';
import Random_compo from './Refine_Click_Dropdown';
import Drop6_360_Compo from './Drop6_360_Compo';
import Selfridge_rotate_360 from './Selfridge_rotate_360';
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket';
function Navigation(){
  return(
    <>
     <div className='logoandbtn'>
    {/* <button className="active fixedinfobtn"><i className="ph-bold ph-arrow-down"></i> Info</button> */}
    {/* <button className="active fixedrefinebtn"><i className="ph-bold ph-arrow-down"></i> Refine</button> */}
    {/* <Refine_Click_Dropdown/> */}
    <Link to='/'><Logo/></Link>

    </div>
      <div className='Drop6Parent'>
        <Link to=""><div className='drop1 hover_self-1'><img className='hide' src='src/img/selfridges/self1 (1).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-2'><img className='hide' src='src/img/selfridges/self1 (2).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-3'><img className='hide' src='src/img/selfridges/self1 (3).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-4'><img className='hide' src='src/img/selfridges/self1 (4).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-5'><img className='hide' src='src/img/selfridges/self1 (5).webp' alt=''/></div></Link>
      </div>
      <div className='Drop6Parent'>
        <Link to=""><div className='drop1 hover_self-6'><img className='hide' src='src/img/selfridges/self1 (6).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-7'><img className='hide' src='src/img/selfridges/self1 (7).webp' alt=''/></div></Link>
        <Link to="/Selfridge_rotate_360"><div className='drop1 hover_self-8'><img className='hide' src='src/img/selfridges/self1 (8).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-9'><img className='hide' src='src/img/selfridges/self1 (9).webp' alt=''/></div></Link>
        <Link to=""><div className='drop1 hover_self-10'><img className='hide' src='src/img/selfridges/self1 (10).webp' alt=''/></div></Link>
      </div>
      {/* <Refine_Click_Dropdown/> */}
    {/* <Logo/> */}
    </>
  )
}
function Selfridges_home() {
  return (
    <>
          <Routes>
            
            <Route path="/Selfridge_rotate_360" element={<Selfridge_rotate_360 />} />
            <Route path="/Rotate360Degree_black_denim_jacket" element={<Rotate360Degree_black_denim_jacket />} />
            <Route path="/Rotate360Degree" element={<Rotate360Degree />} /> 
            <Route
              path="/*"
              element={<Navigation />}
            />
          </Routes>
    </>
  )
}
export default Selfridges_home