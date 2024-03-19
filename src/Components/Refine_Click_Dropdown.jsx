import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';

const Random_compo = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
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
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">Collection</button>
      <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
       <ul className='collection-dropdown-ul'>
        
        <li className='collection-dropdown-li'>Drop6</li>
       </ul>
      </div>
    </div>
  );
};

export default Random_compo;
