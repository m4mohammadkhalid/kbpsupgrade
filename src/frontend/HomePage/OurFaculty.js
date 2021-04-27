import React from 'react'
import { Link } from "react-router-dom";

const OurFaculty = () => {
    return (
<section className="small_pt">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          <div className="heading_s1 text-center">
            <h2>Our Faculty</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="overlay_bg_danger_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          <div className="intro_desc">
            <h5>Faculty of Pharmacy</h5>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="overlay_bg_light_green_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.4s">
          <div className="intro_desc">
            <h5>Faculty of Computer Science</h5>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="overlay_bg_default_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.6s">
          <div className="intro_desc">
            <h5>Faculty of Design</h5>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          <div className="medium_divider" />
          <Link to="#" className="btn btn-default rounded-0">View All Faculty <i className="ion-ios-arrow-thin-right ml-1" /></Link>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default OurFaculty
