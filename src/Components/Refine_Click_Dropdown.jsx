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
        <button onClick={toggleDropdown} className="collection-dropdown-li">Drop6</button>
      </div>
    </div>
  );
};

export default Random_compo;
