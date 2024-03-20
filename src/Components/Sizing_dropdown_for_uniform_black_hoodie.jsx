import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const Sizing_dropdown_for_uniform_black_hoodie = () => {
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
            <div id="blackdenimdropdownsize" className={`dropdown-content-size ${showDropdown ? 'show showforuniform' : ''}`}>
                <div className='drop-image'>
                    <img src='src/img/Sizing-chart-uniform-hoodie.webp' alt='random image' className='dropdown-image' />
                    {/* <p className='dropdownP'>style - Moto Denim Jacket</p> */}
                </div>
                <div className='content-details-square'>
                    <ul>
                        <li>Ref</li>
                        <li>A </li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                    <ul>
                        <li>Measurement (cm)</li>
                        <li>Shoulder to shoulder </li>
                        <li>underarm to underarm</li>
                        <li>Full length-shoulder to hem</li>
                        <li>Sleeve length</li>
                    </ul>   
                    <ul>
                        <li>XXS</li>
                        <li>67.5 </li>
                        <li>64.5</li>
                        <li>61</li>
                        <li>55.5</li>
                    </ul>   
                    <ul>
                        <li>XS</li>
                        <li>69</li>
                        <li>67</li>
                        <li>63.5</li>
                        <li>58</li>
                    </ul>   
                    <ul>
                        <li>S</li>
                        <li>70.5</li>
                        <li>69.5</li>
                        <li>66</li>
                        <li>60.5</li>
                    </ul>   
                    <ul>
                        <li>M</li>
                        <li>72</li>
                        <li>72</li>
                        <li>69</li>
                        <li>63</li>
                    </ul>   
                    <ul>
                        <li>L</li>
                        <li>73.5</li>
                        <li>74.5</li>
                        <li>72</li>
                        <li>64</li>
                    </ul>   
                    <ul>
                        <li>XL</li>
                        <li>75</li>
                        <li>77</li>
                        <li>74.5</li>
                        <li>65</li>
                    </ul>   
                    <ul>
                        <li>XXL</li>
                        <li>76.5</li>
                        <li>79.5</li>
                        <li>77</li>
                        <li>66</li>
                    </ul>   
                   
                </div>

            </div>
        </div>
    );
};

export default Sizing_dropdown_for_uniform_black_hoodie;
