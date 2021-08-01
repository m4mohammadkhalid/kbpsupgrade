import React from 'react'

const StudentSay = () => {
    return (
<section className="background_bg bg_fixed" data-img-src="assets/images/pattern_bg3.png">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <div className="heading_s1 text-center">
            <h2>Student Say!</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          <div className="small_divider" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
        <div className="testimonial_slider testimonial_style2 carousel_slider owl-carousel owl-theme" data-margin={30} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;380&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;3&quot;}}">
          <div className="testimonial_box">
            <div className="testimonial_img">
              <img src="assets/images/client_img1.jpg" alt="client" />
            </div>
            <div className="testi_meta">
              <div className="testi_user">
                <h6>Lissa Castro</h6>
                <span className="text_default">Co-Founder</span>
              </div>
              <div className="testi_desc">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium .</p>
              </div>
            </div>
          </div>
          <div className="testimonial_box">
            <div className="testimonial_img">
              <img src="assets/images/client_img2.jpg" alt="client" />
            </div>
            <div className="testi_meta">
              <div className="testi_user">
                <h6>Lissa Castro</h6>
                <span className="text_default">Co-Founder</span>
              </div>
              <div className="testi_desc">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium .</p>
              </div>
            </div>
          </div>
          <div className="testimonial_box">
            <div className="testimonial_img">
              <img src="assets/images/client_img3.jpg" alt="client" />
            </div>
            <div className="testi_meta">
              <div className="testi_user">
                <h6>Lissa Castro</h6>
                <span className="text_default">Co-Founder</span>
              </div>
              <div className="testi_desc">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default StudentSay
