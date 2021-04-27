import React from 'react'
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
<section className="overflow-hidden small_pt small_pb">
  <div className="container-fluid p-0">
    <div className="row no-gutters ">
      <div className="col-lg-6">
        <div className="bg_gray h-100 d-flex align-items-center padding_eight_all">
          <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.02s">
            <div className="heading_s1"> 
              <h2>About Us</h2>
            </div>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <ul className="list_none list_item">
              <li>
                <div className="counter_content">
                  <h3 className="h1 text_danger"><span className="counter">260</span></h3>
                  <h6>Free Courses</h6>
                </div>
              </li>
              <li>
                <div className="counter_content">
                  <h3 className="h1 text_light_green"><span className="counter">152</span></h3>
                  <h6>Paid Courses</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-6 animation" data-animation="fadeInRight" data-animation-delay="0.03s">
        <div className="overlay_bg_30 about_img z_index_minus1 h-100 background_bg md-height-300" data-img-src="assets/images/about_img.jpg" />
        <Link to="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup video_play">
          <span className="ripple"><i className="ion-play ml-1" /></span>
        </Link>
      </div>
    </div>
  </div>
</section>

    )
}

export default AboutUs
