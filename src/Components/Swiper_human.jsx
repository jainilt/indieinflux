import React, { useEffect } from 'react';
import Swiper from 'swiper';
import '../App.css'
import '../swiper-bundle.min.js'
import '../swiper-bundle.min.css'

function Swiper_human() {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    let swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 1,
        stretch: 50,
        depth: 1800,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
    });

    // Clean up function
    return () => {
      // Destroy Swiper when the component unmounts
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152613.509.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152614.574.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152615.694.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152618.198.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152619.141.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152620.134.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152621.262.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152626.406.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152627.526.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152628.430.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152631.734.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152632.805.png" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="src/img/download - 2024-03-06T152633.949.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Swiper_human;
