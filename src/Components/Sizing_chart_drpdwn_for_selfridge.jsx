import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const Sizing_chart_drpdwn_for_selfridge = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = (event) => {
        if (!event.target.matches('.dropbtn-size')) {
            setShowDropdown(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', closeDropdown);
        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="dropdown-size">
            <button onClick={toggleDropdown} className="dropbtn-size ph-bold ph-arrow-down">Sizing Chart</button>
            <div id="myDropdown-size" className={`dropdown-content-size selfridge-drpdwn ${showDropdown ? 'show' : ''}`}>
                <div className='drop-image'>
                    <img src='src/img/Sizing-chart-selfridge.webp' alt='random image' className='dropdown-image' />
                    <p className='dropdownP'>style - Moto Denim Jacket</p>
                </div>
                <div className='content-details-square self-size'>
                    <ul>
                        <li>Ref</li>
                        <li>A </li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                    <ul>
                        <li>Measurement (cm)</li>
                        <li>Underarm to underarm</li>
                        <li>Total front length</li>
                        <li>Sleeve length</li>
                    </ul>   
                    <ul>
                        <li>XXS</li>
                        <li>62 </li>
                        <li>56</li>
                        <li>84</li>
                    </ul>   
                    <ul>
                        <li>XS</li>
                        <li>65</li>
                        <li>58.5</li>
                        <li>86</li>
                    </ul>   
                    <ul>
                        <li>S</li>
                        <li>68</li>
                        <li>61</li>
                        <li>86</li>
                    </ul>   
                    <ul>
                        <li>M</li>
                        <li>71</li>
                        <li>63.5</li>
                        <li>90</li>
                    </ul>   
                    <ul>
                        <li>L</li>
                        <li>73.5</li>
                        <li>63.5</li>
                        <li>91.5</li>
                    </ul>   
                    <ul>
                        <li>XL</li>
                        <li>76</li>
                        <li>67.5</li>
                        <li>93</li>
                    </ul>   
                    <ul>
                        <li>XXL</li>
                        <li>78.5</li>
                        <li>69.5</li>
                        <li>94.5</li>
                    </ul>   
                   
                </div>

            </div>
        </div>
    );
};

export default Sizing_chart_drpdwn_for_selfridge;
