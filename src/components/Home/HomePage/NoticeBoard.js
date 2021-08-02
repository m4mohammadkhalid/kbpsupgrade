import Marquee from 'react-marquee-master';
import React from 'react'
import { Link } from "react-router-dom";

const OurFaculty = () => {
  const marqueeItems=['1 publishing and graphic design',
 '2Lorem ipsum is a placeholder text commonly', 
 '3 used to demonstrate the visual form of a document '
 , '4 typeface without relying on meaningful content.',
  '5 Lorem ipsum may be used as a placeholder','1 publishing and graphic design',
  '2Lorem ipsum is a placeholder text commonly', 
  '3 used to demonstrate the visual form of a document '
  , '4 typeface without relying on meaningful content.',
   '5 Lorem ipsum may be used as a placeholder'];
    return (
<section className="small_pt">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          <div className="heading_s1 text-center">
            <h2>Notice</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="overlay_bg_danger_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          <div style={{minHeight:'320px'}} className="intro_desc">
             <Marquee height='420'  direction='up' marqueeItems={marqueeItems} />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="overlay_bg_light_green_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.4s">
          <div style={{minHeight:'320px'}} className="intro_desc">
          <Marquee height='420' direction='up' marqueeItems={marqueeItems} />

          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="overlay_bg_default_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.6s">
          <div style={{minHeight:'320px'}} className="intro_desc">
          <Marquee height='420' direction='up' marqueeItems={marqueeItems} />
           
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>

    )
}

export default OurFaculty
