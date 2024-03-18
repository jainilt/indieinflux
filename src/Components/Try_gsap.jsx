import Human_slider from './Human_slider'
import Other_colors from './Other_colors'
import Size_Btn from './Size_Btn'
import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Product_Detail_GSAP() {
  useGSAP(() => {
    // gsap.from(".nav", {
    //         duration: 0.5,
    //         y: -50,
    //         delay: 0
    //     });
        gsap.from(".product-img", {
            duration: 0.5,
            x: -100,
            opacity: 0,
            delay: 0.5
        })
        gsap.from(".product-vars img", {
            duration: 0.5,
            y: 50,
            stagger: 0.2,
            delay: 0.75
        })
        // gsap.from(".product-size size", {
        //     duration: 0.5,
        //     x: 50,
        //     opacity: 0,
        //     stagger: 0.025,
        //     delay: 1
        // })
        gsap.from(".size-btn", {
            duration: 0.3,
            scale: 0,
            delay: 1.25
        })
        gsap.from(".product", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            stagger: 0.25,
            delay: 1.5
  
        })
  });

  return (
    <>
     <div className="container">
        <section className="one clearfix">
            <div className="left">
                <div>
                    <div className="col product-copy">
                    <div class="product-details">
                            <p>02 shirt rock</p>
                          <br/>
                            <p>180.00 USD</p>
                            <br/>
                            <p>100% cotton poplin</p>
                            <p>130 gsm</p>
                            <p>shoulder to arm ponel</p>
                            <p>underarm to hem ponel</p>
                            <p>button clouser</p>
                            <p>vertical chest zip pocket</p>
                            <p>waist pockets with zip clouser</p>
                            <p>ukk zips</p>

                        </div>
                        <div className="product-vars">
                            <img src="s1.png" alt=""/>
                            <img src="s2.png" alt=""/>
                            <img src="s3.png" alt=""/>
                        </div>
                        <button className="size-btn">
                            <a href="./Swiper Slide/index.html" className="link">select your size</a> <i
                                className="ph-bold ph-arrow-right"></i>
                        </button>
                        <div className="other-products">
                            <div className="product">
                                <img src="./New folder/mar_1 (1).png" alt=""/>

                            </div>
                            <div className="product">
                                <img src="./New folder/mar_1 (2).png" alt=""/>

                            </div>
                            <div className="product">
                                <img src="./New folder/mar_1 (3).png" alt=""/>

                            </div>
                            <div className="product">
                                <img src="./New folder/mar_1 (4).png" alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="right">
                <div className="right-child">
                    <div className="product-img">
                        <div className="icon">
                            <img src="1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/><br/><br/>
        <br/><br/><br/>
        <div className="product-vars">
            <img src="s1.png" alt=""/>
            <img src="s2.png" alt=""/>
            <img src="s3.png" alt=""/>
        </div>
        
        <br/><br/><br/>
        <br/><br/><br/>
        <div className="bottom">
            <div className="marquee">
                <div className="marquee__wrapper marquee__wrapper--a">
                    <img src="./1.png" alt=""/>
                    <img src="./New folder/mar_1 (1).png" alt=""/>
                    <img src="./New folder/mar_1 (2).png" alt=""/>
                </div>
                <div className="marquee__wrapper marquee__wrapper--b" aria-hidden="true">
                    <img src="./New folder/mar_1 (3).png" alt=""/>
                    <img src="./New folder/mar_1 (4).png" alt=""/>
                    <img src="./New folder/mar_1 (5).png" alt=""/>
                    <img src="./New folder/mar_1 (6).png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Product_Detail_GSAP