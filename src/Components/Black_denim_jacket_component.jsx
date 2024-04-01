import React from 'react'
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket'
import Btn_grp from './Btn_grp'
import Product_Detail from './Product_Detail'
import Human_slider_for_black from './Human_slider_for_black'
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket'
import { Routes, Route, Link } from 'react-router-dom';
import Sizing_dropdown_for_black_denim from './Sizing_dropdown_for_black_denim'
import Styled_With_black from './Styled_with_black'
import Btn_grp_for_black_denim from './Btn_grp_for_black_denim'
import Nav_bar from './Nav_bar'
function Black_denim_jacket_component() {
    return (
        <>
      <div>
        <Nav_bar/>
        <Rotate360Degree_black_denim_jacket/>
        <div className='btn-grp-drop-360-compo'>
      <Btn_grp_for_black_denim/>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Human_slider_for_black/>
      </div>
        </>
    )
}

export default Black_denim_jacket_component
