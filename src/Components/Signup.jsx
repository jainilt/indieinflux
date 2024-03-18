import React from 'react';
import './Signup_Css.css'
import Logo from './Logo';
import Archive_move_image from './Archive_move_image';
const Signup = () => {
  return (

    <>  
        <Logo/>
        <Archive_move_image/>
        <div className="login">
      
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className='b'>Login</button>
    </div>
    </>
  );
};

export default Signup;
