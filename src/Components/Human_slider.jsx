import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
function Human_slider() {
  return (
    <div className="bottom">
          <div className="marquee">
            <div className="marquee__wrapper marquee__wrapper--a">
              <img src="/src/img/1.png" alt="" />
              <img src="/src/img/2.png" alt="" />
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
  )
}

export default Human_slider
