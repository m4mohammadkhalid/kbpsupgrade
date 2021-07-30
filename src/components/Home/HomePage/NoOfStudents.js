import React from 'react'

const NoOfStudents = () => {
    return (
<section className="parallax_bg overlay_bg_blue_70" data-parallax-bg-image="assets/images/video_bg.jpg">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-6 ">
        <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div className="counter_icon">
            <img src="assets/images/counter_icon1.png" alt="counter_icon1" />
          </div>
          <div className="counter_content">
            <h3 className="counter_text"><span className="counter">1800</span>+</h3>
            <p>Students</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 ">
        <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.03s">
          <div className="counter_icon">
            <img src="assets/images/counter_icon2.png" alt="counter_icon2" />
          </div>
          <div className="counter_content">
            <h3 className="counter_text"><span className="counter">70</span></h3>
            <p>Courses</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 ">
        <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          <div className="counter_icon">
            <img src="assets/images/counter_icon3.png" alt="counter_icon3" />
          </div>
          <div className="counter_content">
            <h3 className="counter_text"><span className="counter">700</span>+</h3>
            <p>Certified teachers</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-6 ">
        <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.05s">
          <div className="counter_icon">
            <img src="assets/images/counter_icon4.png" alt="counter_icon4" />
          </div>
          <div className="counter_content">
            <h3 className="counter_text"><span className="counter">1200</span>+</h3>
            <p>Award Winning</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default NoOfStudents
