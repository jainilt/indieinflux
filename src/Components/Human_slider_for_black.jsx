import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
function Human_slider_for_black() {
  return (
    <div className="bottom">
          <div className="marquee">
            <div className="marquee__wrapper marquee__wrapper--a">
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-02-shirt-rock-chifu-01.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-02-shirt-rock-josephine-01.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-fluffy-fleece-v2-charcoal-brenton-01-recolored.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-freight-cargo-indium-benjamin-01-recolored.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-freight-cargo-indium-josephine-01-recolored.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-high-rise-pm-pant-charcoal-raven-01.png" alt="" />
            </div>
            <div className="marquee__wrapper marquee__wrapper--b" aria-hidden="true">
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-high-rise-pm-pant-charcoal-tricky-01.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-mml-hooded-puffer-indium-coura-01.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-mml-hooded-puffer-indium-nyang-01.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-task-pant-grey-dusk-coura-01.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-fluffy-fleece-v2-charcoal-brenton-01-recolored.png" alt="" />
              <img className='hsimg' src="src/img/human_slider_black/entire-studios-high-rise-pm-pant-charcoal-tricky-01.png" alt="" />


            </div>
          </div>
        </div>
  )
}

export default Human_slider_for_black



// human slider with naviagtion 
/* 

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Hover_Images from './Hover_Images';
function Navigation() {
  return (
    <>
      <div className="bottom">
        <div className="marquee">
          <div className="marquee__wrapper marquee__wrapper--a">
            <div><Link to="/Hover_Images"><img src="/src/img/1.png" alt="" /></Link></div>
            <Link to="/Hover_Images"><img src="/src/img/2.png" alt="" /></Link>

            <img src="/src/img/3.png" alt="" />
            <img src="/src/img/1.png" alt="" />
            <img src="/src/img/2.png" alt="" />
            <img src="/src/img/3.png" alt="" />
          </div>
          <div className="marquee__wrapper marquee__wrapper--b" aria-hidden="true">
            <img src="/src/img/4.png" alt="" />
            <img src="/src/img/5.png" alt="" />
            <img src="/src/img/6.png" alt="" />
            <img src="/src/img/7.png" alt="" />
            <img src="/src/img/5.png" alt="" />
            <img src="/src/img/7.png" alt="" />


          </div>
        </div>
      </div>
    </>
  );
}
function Human_slider() {
  return (
    <Routes>

      <Route path="/Hover_Images" element={<Hover_Images />} />
      <Route
        path="/*"
        element={<Navigation />}
      />
    </Routes>

  )
}

export default Human_slider



*/