import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const Sizing_dropdown_for_black_denim = () => {
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
            <div id="blackdenimdropdownsize" className={`dropdown-content-size ${showDropdown ? 'show' : ''}`}>
                <div className='drop-image'>
                    <img src='src/img/dropdown-image.webp' alt='random image' className='dropdown-image' />
                    <p className='dropdownP'>style - Moto Denim Jacket</p>
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
                        <li>Full length - shoulder to hem</li>
                        <li>Sleeve length</li>
                    </ul>   
                    <ul>
                        <li>XXS</li>
                        <li>43 </li>
                        <li>49</li>
                        <li>57.5</li>
                        <li>67</li>
                    </ul>   
                    <ul>
                        <li>XS</li>
                        <li>44.5</li>
                        <li>51.5</li>
                        <li>58.5</li>
                        <li>68</li>
                    </ul>   
                    <ul>
                        <li>S</li>
                        <li>46</li>
                        <li>54</li>
                        <li>59.5</li>
                        <li>69</li>
                    </ul>   
                    <ul>
                        <li>M</li>
                        <li>47.5</li>
                        <li>56.5</li>
                        <li>60.5</li>
                        <li>70</li>
                    </ul>   
                    <ul>
                        <li>L</li>
                        <li>49</li>
                        <li>59</li>
                        <li>61.5</li>
                        <li>71</li>
                    </ul>   
                    <ul>
                        <li>XL</li>
                        <li>50.5</li>
                        <li>61.5</li>
                        <li>62.5</li>
                        <li>72</li>
                    </ul>   
                    <ul>
                        <li>XXL</li>
                        <li>52</li>
                        <li>64</li>
                        <li>63.5</li>
                        <li>73</li>
                    </ul>   
                   
                </div>

            </div>
        </div>
    );
};

export default Sizing_dropdown_for_black_denim;
