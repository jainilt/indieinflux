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
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket';
function Navigation(){
  return(
    <>
     <div className='logoandbtn'>
    <button className="active fixedinfobtn"><i className="ph-bold ph-arrow-down"></i> Info</button>
    {/* <button className="active fixedrefinebtn"><i className="ph-bold ph-arrow-down"></i> Refine</button> */}
    <Refine_Click_Dropdown/>
    <Logo/>

    </div>

      <div className='Drop6Parent'>
        <Link to="/Drop6_360_Compo"><div className='drop1 hover_jacket_reveal '><img className='hide' src='src/img/download (1).png' alt=''/></div></Link>
        <Link to="/Rotate360Degree_black_denim_jacket"><div className='drop1 hover_jacket_reveal2'><img className='hide vg' src='src/img/download (2).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal3'><img className='hide' src='src/img/download (3).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal4'><img className='hide' src='src/img/download (4).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal5'><img className='hide' src='src/img/download (5).png' alt=''/></div></Link>
      </div>
      <div className='Drop6Parent'>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal6'><img className='hide' src='src/img/download (6).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal7'><img className='hide' src='src/img/download (7).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal8'><img className='hide' src='src/img/download (10).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal9'><img className='hide' src='src/img/download (11).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal10'><img className='hide' src='src/img/download (12).png' alt=''/></div></Link>
      </div>
      <div className='Drop6Parent'>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal11'><img className='hide' src='src/img/download (13).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal12'><img className='hide' src='src/img/download (14).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal13'><img className='hide' src='src/img/download (15).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal14'><img className='hide' src='src/img/download (16).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal15'><img className='hide' src='src/img/download (17).png' alt=''/></div></Link>
      </div>
      <div className='Drop6Parent'>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal16'><img className='hide' src='src/img/download (19).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal17'><img className='hide' src='src/img/download (20).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal18'><img className='hide' src='src/img/download (22).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal19'><img className='hide' src='src/img/download (23).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal20'><img className='hide' src='src/img/download (24).png' alt=''/></div></Link>
      </div>
      <div className='Drop6Parent'>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal21'><img className='hide' src='src/img/download (25).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal22'><img className='hide' src='src/img/download (26).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal23'><img className='hide' src='src/img/download (27).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal24'><img className='hide' src='src/img/download (28).png' alt=''/></div></Link>
        <Link to="/Logo"><div className='drop1 hover_jacket_reveal25'><img className='hide' src='src/img/download (29).png' alt=''/></div></Link>
      </div>
      <Refine_Click_Dropdown/>
    {/* <Logo/> */}
    </>
  )
}
function Drop6_home() {
  return (
    <>
          <Routes>
            
            <Route path="/Logo" element={<Drop6_360_Compo />} />
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
export default Drop6_home