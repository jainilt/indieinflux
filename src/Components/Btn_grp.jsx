import React from 'react'
import Sizing_chart_Btn_grp from './Sizing_chart_Btn_grp'
import { Routes, Route, Link } from 'react-router-dom';
function Btn_grp() {
  
  return (
    <div>
      <div className="btngrp">
            
                <div className='size-chart-btn-btn-grp'>
                <Sizing_chart_Btn_grp/>
                </div>
           
            <div className="btn-group-second">
                <button className='btn1 ph-bold brd collection-left'>Collection</button>
                <button className='btn1 ph-bold ph-currency-inr brd inr'>Inr</button>
                <button className='btn1 ph-bold ph-bag brd bag'>Bag</button>
                <br/>
                {/* <Sizing_chart_Btn_grp/> */}
            </div>
        </div>
    </div>
  )
}

export default Btn_grp
