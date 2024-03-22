import React from 'react'
import Nav_bar from './Nav_bar'
import Btn_grp_for_Uniform from './Btn_grp_for_Uniform'
import Collection_dropdown_for_Uniform from './Collection_dropdown_for_Uniform'
import Uniform_hoodie_black from './Uniform_hoodie_black'
import Uniform_hoodie_brown from './Uniform_hoodie_brown'
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';

function Navigation() {
    return (
      <>
            
            <div>
                <Nav_bar />
                <Btn_grp_for_Uniform/>
                <Collection_dropdown_for_Uniform/>
                <div className='uniform-collection-page-container'>
                    <div className='uniform-collection-main-image'>
                        <img className='uniform-main-img' src='src/img/uniform_top_img.webp' />
                    </div>
                </div>

                <section>
                    <div className='uniform-items'>
                        <div className='uniform-items-image animate'>
                        <Link to="/Uniform_hoodie_black"><img className='uni-item-i' src='src/img/uniform/uniform-image-1.png' /></Link>
                            
                            <p className='uniform-p-price'>thermal hood <br/> 21,527/- INR</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-2.png' />
                            <p className='uniform-p-price'>full sweatpant <br/> 14046/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-3.png' />
                            <p className='uniform-p-price'>heavy dart tee <br/> 9059/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-4.png' />
                            <p className='uniform-p-price'>heavy ls tee <br/> 10721/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-5.png' />
                            <p className='uniform-p-price'>heavy hood  <br/> 12051/- inr</p>
                        </div>
                    </div>
                    <div className='uniform-items'>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-6.png' />
                            <p className='uniform-p-price'>eternal zip  <br/> 13215/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-7.png' />
                            <p className='uniform-p-price'>box crew  <br/> 9890/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-8.png' />
                            <p className='uniform-p-price'>cropped full zip  <br/> 12384/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-9.png' />
                            <p className='uniform-p-price'>cropped heavy hood  <br/> 11220/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-10.png' />
                            <p className='uniform-p-price'>full zip <br/> 12882/- inr</p>
                        </div>
                    </div>
                    <div className='uniform-items'>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-11.png' />
                            <p className='uniform-p-price'>dart tee  <br/> 4903/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-12.png' />
                            <p className='uniform-p-price'>heavy flare  <br/> 11553/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-13.png' />
                            <p className='uniform-p-price'>heavy gocar  <br/> 15792/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-14.png' />
                            <p className='uniform-p-price'>ls maxi - cotton spandex  <br/> 9142/- inr</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-15.png' />
                            <p className='uniform-p-price'>sleeveless maxi - cotton spandex  <br/> 7480/- inr</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='uniform-collection-page-container'>
                <div className='uniform-collection-main-image'>
                    <img className='uniform-main-img' src='src/img/uniform_top_img3.webp' />
                </div>
            </div>
            <section>
                    <div className='uniform-items'>
                        <div className='uniform-items-image animate'>
                        <Link to="/Uniform_hoodie_brown"><img className='uni-item-i' src='src/img/uniform/uniform-image-46.webp' /></Link>
                            
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-47.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-48.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-49.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-50.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                    </div>
                    <div className='uniform-items'>
                    <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-51.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-52.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-53.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-54.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-55.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        
                    </div>
                    <div className='uniform-items'>
                    <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-56.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-57.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-58.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-59.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        <div className='uniform-items-image animate'>
                            <img className='uni-item-i' src='src/img/uniform/uniform-image-60.webp' />
                            <p className='uniform-p-price'>Hello</p>
                        </div>
                        
                    </div>
                </section>
      </>
    );
  }
function Uniform() {
    return (
        <>
            <Routes>
            
            <Route path="/Uniform_hoodie_black" element={<Uniform_hoodie_black />} />
            <Route path="/Uniform_hoodie_brown" element={<Uniform_hoodie_brown />} />
            <Route
              path="/*"
              element={<Navigation />}
            />
          </Routes>
        </>
    )
}

export default Uniform
