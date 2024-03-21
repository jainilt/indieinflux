import React, { useState, useEffect } from 'react';
import Product_detail_for_hoodies from './Product_detail_for_hoodies';
import Sizing_dropdown_for_uniform_black_hoodie from './Sizing_dropdown_for_uniform_black_hoodie';
import Btn_grp_for_uniform_hoodies from './Btn_grp_for_uniform_hoodies';
function Uniform_hoodie_black() {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);


  return (
    <>
    <Sizing_dropdown_for_uniform_black_hoodie/>
    <Btn_grp_for_uniform_hoodies/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='uniform-parent'>
        <div className="uniform_hoodie_black_img">
          <img src='src/img/uniform/uniform-image-1.png'/>
        </div>
        <div className="uniform_hoodie_black_img">
        <img src='src/img/uniform-image-1(2).webp'/>
        </div>
      </div>
      <Product_detail_for_hoodies/>
    {/* <Human_slider/> */}
    {/* <Styled_With/> */}
    </>
  );
}

export default Uniform_hoodie_black;
