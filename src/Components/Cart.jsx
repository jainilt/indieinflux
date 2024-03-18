import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom' instead of useHistory
import Btn_grp from "./Btn_grp";
import Sizing_chart_Btn_grp from "./Sizing_chart_Btn_grp";
import Logo from "./Logo";

function Cart() {
    const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

    const handleBackClick = () => {
        navigate(-1); // This will navigate back to the previous page
    };

    return (
        <>
            <div className="all-items-of-cart">
                <Logo />
                <div className="btn-group-second1">
                    <button className="ph-bold ph-arrow-left brd back-cart" onClick={handleBackClick}> Back</button>
                    <button className="brd browse-cart">Browse</button>
                    <button className="cartbag">Bag</button>
                    <br />
                    {/* <Sizing_chart_Btn_grp/> */}
                </div>
                <div className="parent-cart-all">
                    <div className="item-section-parent">
                        <div className="item-section-items">
                            <div className="cart-header">
                                {/* <div className="cart-images"></div> */}
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
                            <span className="ii-cart-subtotal__title">Subtotal </span>
                            <span className="ii-cart-subtotal__price">
                                Rs. 65,700/-
                                <span className="ii-cart-currency"> INR</span>
                            </span>
                        </div>
                        <div className="ii-shipping-note">shipping calculated at checkout.</div>
                        <div className="ii-shipping-note">Please note duties &amp; taxes are not calculated at the checkout and it is the customers responsibility to pay international customs on arrival.</div>
                        <div className="ii-shipping-note">No returns or exchanges on discounted / sale items.</div>
                    </div>

                </div>
                <button className=" ph-bold ph-arrow-right brd chekcout-cart-btn"> Checkout</button>
            </div>

            
        </>
    );
}

export default Cart;
