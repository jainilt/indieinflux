import React from "react";
import { useNavigate } from 'react-router-dom'; 
import Btn_grp from "./Btn_grp";
import Sizing_chart_Btn_grp from "./Sizing_chart_Btn_grp";
import Logo from "./Logo";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/all';
import SplitType from 'split-type'

function Cart() {
    const navigate = useNavigate(); 
    
    const handleBackClick = () => {
        navigate(-1);
    };
    const handleBackClick2 = () => {
        navigate(-1); 
    };
    useGSAP(() => {
    
        gsap.from(".cart-header", {
           y:-20,
           opacity: 0,
           duration: 2,
        })
        gsap.from(".ii-cart-inner-section img", {
           x:-20,
           opacity: 0,
           duration: 2,
           scale: 0
        })
        gsap.from(".cart-p", {
           x:20,
           opacity: 0,
           duration: 2,
        })
        gsap.from(".ii-cart-inner-section", {
           y:20,
           opacity: 0,
           duration: 2,
        })
        const myText = new SplitType('.ii-cart-footer');
    gsap.to('.gsapanimate',{
        y:0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
    gsap.to('.ii-cart-subtotal__title',{
        y:0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
    gsap.to('.sunttlamount',{
        y:0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
    gsap.from('.cart-forgsap',{
        y:50,
        stagger: 0.05,
        delay: 0.2,
        duration: 1
    })
    });
    
    return (
        <>
            <div className="all-items-of-cart">
                <Logo />
                <div className="btn-group-second1">
                    <button className="ph-bold ph-arrow-left brd back-cart" onClick={handleBackClick}> Back</button>
                    <button className="brd browse-cart" onClick={handleBackClick2}> Browse</button>
                    <br />
                </div>
                <div className="parent-cart-all">
                    <div className="item-section-parent">
                        <div className="item-section-items">
                            <div className="cart-header">
                                <div className="cart-products">Product</div>
                                <div className="cart-price">Price</div>
                                <div className="cart-quantity">Quantity</div>
                                <div className="cart-total">Total</div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-inner-text">
                        <div className="cart-inner">
                            <div className="cart-mobile-img">
                                <img
                                    className="cart-prod-img"
                                    src="/src/img/download - 2024-03-06T152649.646.png"
                                    alt=""
                                />
                            </div>
                            <div className="cart-inner-container">
                                <div className="ii-cart-inner-section">
                                    <img
                                        className="cart-prod-img"
                                        src="/src/img/download - 2024-03-06T152649.646.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ii-cart-inner-section">
                                    <div className="cart-p">
                                        THERMAL HOOD WASHED BLACK
                                        <span className="ii-cart-detail"> XXL</span>
                                    </div>
                                </div>
                                <div className="ii-cart-inner-section">
                                    <span className="visually-hidden">Regular price</span>
                                    <span>
                                        Rs. 21,900.00
                                        <span className="ii-cart-currency">INR</span>
                                    </span>
                                </div>
                                <div className="ii-cart-inner-section">1</div>
                                <div className="ii-cart-inner-section">
                                    Rs. 21,900.00
                                    <span className="ii-cart-currency">INR</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-inner">
                            <div className="cart-mobile-img">
                                <img
                                    className="cart-prod-img"
                                    src="/src/img/download - 2024-03-06T152649.646.png"
                                    alt=""
                                />
                            </div>
                            <div className="cart-inner-container">
                                <div className="ii-cart-inner-section">
                                    <img
                                        className="cart-prod-img"
                                        src="/src/img/download - 2024-03-06T152638.933.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ii-cart-inner-section">
                                    <div className="cart-p">
                                        THERMAL HOOD WASHED BLACK
                                        <span className="ii-cart-detail"> XXL</span>
                                    </div>
                                </div>
                                <div className="ii-cart-inner-section">
                                    <span className="visually-hidden">Regular price</span>
                                    <span>
                                        Rs. 21,900.00
                                        <span className="ii-cart-currency">INR</span>
                                    </span>
                                </div>
                                <div className="ii-cart-inner-section">1</div>
                                <div className="ii-cart-inner-section">
                                    Rs. 21,900.00
                                    <span className="ii-cart-currency">INR</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-inner">
                            <div className="cart-mobile-img">
                                <img
                                    className="cart-prod-img"
                                    src="/src/img/download - 2024-03-06T152714.078.png"
                                    alt=""
                                />
                            </div>
                            <div className="cart-inner-container">
                                <div className="ii-cart-inner-section">
                                    <img
                                        className="cart-prod-img"
                                        src="/src/img/download (77).png"
                                        alt=""
                                    />
                                </div>
                                <div className="ii-cart-inner-section">
                                    <div className="cart-p">
                                        THERMAL HOOD WASHED BLACK
                                        <span className="ii-cart-detail"> XXL</span>
                                    </div>
                                </div>
                                <div className="ii-cart-inner-section">
                                    <span className="visually-hidden">Regular price</span>
                                    <span>
                                        Rs. 21,900.00
                                        <span className="ii-cart-currency">INR</span>
                                    </span>
                                </div>
                                <div className="ii-cart-inner-section">1</div>
                                <div className="ii-cart-inner-section">
                                    Rs. 21,900.00
                                    <span className="ii-cart-currency">INR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ii-cart-footer">
                        <div className="ii-cart-subtotal">
                            <span className="ii-cart-subtotal__title">S </span>
                            <span className="ii-cart-subtotal__title">u </span>
                            <span className="ii-cart-subtotal__title">b </span>
                            <span className="ii-cart-subtotal__title">t </span>
                            <span className="ii-cart-subtotal__title">o </span>
                            <span className="ii-cart-subtotal__title">t </span>
                            <span className="ii-cart-subtotal__title">a </span>
                            <span className="ii-cart-subtotal__title">l   </span> 
                            <span className="ii-cart-subtotal__price">
                               <span className="sunttlamount">R</span>  
                               <span className="sunttlamount">s</span>
                               <span className="sunttlamount">.</span>
                               <span className="sunttlamount">6</span>
                               <span className="sunttlamount">5</span>
                               <span className="sunttlamount">,</span>
                               <span className="sunttlamount">7</span>
                               <span className="sunttlamount">0</span>
                               <span className="sunttlamount">0</span>
                               <span className="sunttlamount">/-</span>
                                <span className="ii-cart-currency gsapanimate"> I</span>
                                <span className="ii-cart-currency gsapanimate"> N</span>
                                <span className="ii-cart-currency gsapanimate"> R</span>
                            </span>
                        </div>
                        <div className="ii-shipping-note">shipping calculated at checkout.</div>
                        <div className="ii-shipping-note"><p className="textforgsap">Please note duties & taxes are not calculated at the checkout and it is the customers responsibility to pay international customs on arrival.</p></div>
                        <div className="ii-shipping-note textforgsaptwo">No returns or exchanges on discounted / sale items.</div>
                    </div>

                </div>
                <button className=" ph-bold ph-arrow-right brd chekcout-cart-btn cart-forgsap"> Checkout </button>
            </div>

            
        </>
    );
}

export default Cart;
