import React from 'react'
import { Link } from "react-router-dom";

const Slider = () => {
    return (
<section className="banner_section p-0 full_screen">
  <div id="carouselExampleControls" className="banner_content_wrap carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active background_bg overlay_bg_50" data-img-src="assets/images/banner7.jpg">
        <div className="banner_slide_content">
          <div className="container">{/* STRART CONTAINER */}
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="banner_content animation text_white" data-animation="fadeIn" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="zoomIn" data-animation-delay="1s">Welcome To <span className="text_default">eduglobal</span> University</h2>
                  <p className="animation" data-animation="zoomIn" data-animation-delay="1.5s">Lorem is simply text of the printing and typesetting industry.</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>{/* END CONTAINER*/}
        </div>
      </div>
      <div className="carousel-item background_bg overlay_bg_50" data-img-src="assets/images/banner8.jpg">
        <div className="banner_slide_content">
          <div className="container">{/* STRART CONTAINER */}
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="banner_content animation text_white" data-animation="fadeIn" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="zoomIn" data-animation-delay="1s">find your perfect <span className="text_default">University</span></h2>
                  <p className="animation" data-animation="zoomIn" data-animation-delay="1.5s">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>{/* END CONTAINER*/}
        </div>
      </div>
      <div className="carousel-item background_bg overlay_bg_50" data-img-src="assets/images/banner9.jpg">
        <div className="banner_slide_content">
          <div className="container">{/* STRART CONTAINER */}
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-left">
                <div className="banner_content animation text_white" data-animation="fadeInLeft" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="fadeInLeft" data-animation-delay="1s"><span className="text_default">Eduction</span> from a new angle</h2>
                  <p className="animation" data-animation="fadeInLeft" data-animation-delay="1.5s">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="fadeInLeft" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="fadeInLeft" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>{/* END CONTAINER*/}
        </div>
      </div>
      <div className="carousel-item background_bg overlay_bg_50" data-img-src="assets/images/banner10.jpg">
        <div className="banner_slide_content">
          <div className="container">{/* STRART CONTAINER */}
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-right">
                <div className="banner_content animation text_white" data-animation="fadeInRight" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="fadeInRight" data-animation-delay="1s">best <span className="text_default"> online training</span> course</h2>
                  <p className="animation" data-animation="fadeInRight" data-animation-delay="1.5s">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="fadeInRight" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="fadeInRight" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>{/* END CONTAINER*/}
        </div>
      </div>
    </div>
    <div className="carousel-nav">
      <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
        <i className="ion-chevron-left" />
      </Link>
      <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
        <i className="ion-chevron-right" />
      </Link>
    </div>
  </div>
</section>

    )
}

export default Slider
