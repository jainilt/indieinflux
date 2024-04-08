import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import VideoCompo from './VideoCompo'
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import Drop6_360_Compo from './Drop6_360_Compo'
import Other_colors from './Other_colors'
import Logo from './Logo'
import Drop6_home from './Navigation'
import Rotate360Degree from './Rotate360Degree_blue_denim_jacket'
import Btn_grp from './Btn_grp'
import Product_Detail from './Product_Detail'
import Hover_Images from './Hover_Images'
import Cart from './Cart'
import Black_denim_jacket_component from './Black_denim_jacket_component'
import Archive_move_image from './Archive_move_image'
import Signup from './Signup'
import Uniform from './Uniform'
import Uniform_hoodie_brown from './Uniform_hoodie_brown'
import Uniform_hoodie_black from './Uniform_hoodie_black'
import Selfridges_home from './Selfridges_home'
import Admin from './Admin'
import Selfridge_rotate_360 from './Selfridge_rotate_360'
function Navigation() {
  return (
    <>
    <div className='NavLogo'>
      <Logo/>
    </div>
    <VideoCompo/>
    <nav className='navvvvv'>
      <ul>
        <li>
          <Link className='nav1' to="/Drop6_home"><Button variant="secondary">Drop6</Button></Link>
          <Link className='nav1' to="/Uniform"><Button variant="secondary">Uniform</Button></Link>
          <Link className='nav1' to="/Selfridges_home"><Button variant="secondary">Selfridges</Button></Link>
          {/* <Link className='nav1' to="/Black_denim_jacket_component"><Button variant="secondary">Black_denim_jacket_component</Button></Link> */}
          <Link className='nav1' to="/Archive_move_image"><Button variant="secondary">Archive</Button></Link>
          {/* <Link className='nav1' to="/Product_Detail"><Button variant="secondary">Product_Detail</Button></Link> */}
          <Link className='nav1' to="/Hover_Images"><Button variant="secondary">Upcoming</Button></Link>
          <Link className='nav1' to="/Signup"><Button variant="secondary">Login</Button></Link>
          <Link className='nav1' to="/Admin"><Button variant="secondary">Admin</Button></Link>
          {/* <Link className='nav1' to="/Selfridge_rotate_360"><Button variant="secondary">Login</Button></Link> */}
          {/* <Link className='nav1' to="/Uniform_hoodie_brown"><Button variant="secondary">UniformBrown</Button></Link> */}
          {/* <Link className='nav1' to="/Uniform_hoodie_black"><Button variant="secondary">UniformBlack</Button></Link> */}
          {/* <Link className='nav1' to="/Other_colors"><Button variant="secondary">Other_colors</Button></Link> */}
          {/* <Link className='nav1' to="/Drop6_360_Compo"><Button variant="secondary">Drop6</Button></Link>
          <Link className='nav1' to="/Drop6_360_Compo"><Button variant="secondary">Drop6</Button></Link> */}
          {/* <Link className='nav1' to="/Cart"><Button variant="secondary">Cart</Button></Link> */}
        </li>
      </ul>
    </nav>
    </>
  );
}
function Navigation_btns() {
    return (
    
          <Routes>
            
            <Route path="/Drop6_home" element={<Drop6_home />} />
            <Route path="/Black_denim_jacket_component" element={<Black_denim_jacket_component />} />
            <Route path="/Product_Detail" element={<Product_Detail />} />
            <Route path="/Uniform_hoodie_black" element={<Uniform_hoodie_black />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Hover_Images" element={<Hover_Images />} />
            <Route path="/Uniform" element={<Uniform />} />
            <Route path="/Archive_move_image" element={<Archive_move_image />} />
            <Route path="/Uniform_hoodie_brown" element={<Uniform_hoodie_brown />} />
            {/* <Route path="/Other_colors" element={<Other_colors />} /> */}
            <Route path="/Drop6_360_Compo" element={<Drop6_360_Compo />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Selfridges_home" element={<Selfridges_home />} />
            <Route path="/Selfridge_rotate_360" element={<Selfridge_rotate_360 />} />
            <Route path="/*" element={<Navigation/>} />
            {/* <Route path="/VideoCompo" element={<VideoCompo />} /> */}
            <Route
              path="/*"
              element={<Navigation />}
            />
          </Routes>
        
      );
}

export default Navigation_btns