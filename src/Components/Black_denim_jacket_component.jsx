import React from 'react'
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket'
import Btn_grp from './Btn_grp'
import Product_Detail from './Product_Detail'
import Human_slider from './Human_slider'
import Rotate360Degree_black_denim_jacket from './Rotate360Degree_black_denim_jacket'
import { Routes, Route, Link } from 'react-router-dom';
function Black_denim_jacket_component() {
    return (
        <>
      <div>
        <Rotate360Degree_black_denim_jacket/>
        <Btn_grp/>
        <Product_Detail/>
        <Human_slider/>
      </div>
        </>
    )
}

export default Black_denim_jacket_component
