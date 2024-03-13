import React, { useState } from 'react';

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
      <button onClick={toggleDropdown} className="dropbtn">Dropdown</button>
      <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
       <ul>
        
        <li>About</li>
        <li>Home</li>
        <li>Hi</li>
        <li>Hello</li>
        <li>World</li>
       </ul>
      </div>
    </div>
  );
};

export default Random_compo;
