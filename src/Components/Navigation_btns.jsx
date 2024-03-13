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
          <Link className='nav1' to="/Btn_grp"><Button variant="secondary">Btn_grp</Button></Link>
          <Link className='nav1' to="/Product_Detail"><Button variant="secondary">Product_Detail</Button></Link>
          {/* <Link className='nav1' to="/Drop6_360_Compo"><Button variant="secondary">Drop6</Button></Link>
          <Link className='nav1' to="/Drop6_360_Compo"><Button variant="secondary">Drop6</Button></Link> */}
          <Link className='nav1' to="/Hover_Images"><Button variant="secondary">Archieve</Button></Link>
        </li>
      </ul>
    </nav>
    </>
  );
}
function Navigation_btns() {
    return (
    
        <Router>
          <Routes>
            
            <Route path="/Drop6_home" element={<Drop6_home />} />
            <Route path="/*" element={<Navigation/>} />
            <Route path="/Product_Detail" element={<Product_Detail />} />
            <Route path="/Drop6_360_Compo" element={<Drop6_360_Compo />} />
            <Route path="/Hover_Images" element={<Hover_Images />} />
            {/* <Route path="/VideoCompo" element={<VideoCompo />} /> */}
            <Route
              path="/*"
              element={<Navigation />}
            />
          </Routes>
        </Router>
        
      );
}

export default Navigation_btns