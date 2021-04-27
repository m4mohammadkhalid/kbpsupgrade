import React from 'react'
import { Link } from "react-router-dom";

const VideoCampus = () => {
    return (
        <section className="parallax_bg overlay_bg_blue_70" data-parallax-bg-image="assets/images/banner5.jpg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <Link to="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup">
            <span className="ripple"><i className="ion-play ml-1" /></span>
          </Link>
          <div className="mt-md-5 mt-4 text_white animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <h2>Video Tutorial For Our Campus</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default VideoCampus
