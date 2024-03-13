import React from 'react'
import Hover_Images from './Hover_Images'
import Human_slider from './Human_slider'
import Nav_bar from './Nav_bar'
import Other_colors from './Other_colors'
import Other_products from './Other_products'
import Right_img_sticky from './Right_img_sticky'

function Random_compo() {
  return (
    <div>
      <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Nav_bar/>
      <div className="container">
        <section className="one clearfix">
          <div className="left">
            <div>
              <div className="col product-copy">
                <div className="product-details">
                  <p>02 shirt rock</p>
                  <p>Rs.1800.00/-</p>
                  <p>100% cotton poplin</p>
                  <p>130 gsm</p>
                  <p>shoulder to arm ponel</p>
                  <p>underarm to hem ponel</p>
                  <p>button clouser</p>
                  <p>vertical chest zip pocket</p>
                  <p>waist pockets with zip clouser</p>
                  <p>ukk zips</p>

                </div>
               <Other_colors/>
                <button className="size-btn">
                  select your size <i
                    className="ph-bold ph-arrow-right"></i>
                </button>
               <Other_products/>
              </div>
            </div>
            
          </div>
         <Right_img_sticky/>
        </section>
        <br /><br /><br />
       {/* <Other_colors/> */}

        <br /><br /><br />
        <br /><br /><br />
        {/* <Human_slider/> */}
      </div>
      <Hover_Images/>
    </>
    </div>
  )
}

export default Random_compo

