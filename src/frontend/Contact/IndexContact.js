import React from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
const IndexContact = () => {
    return (
        <>
<NoticeHeader />
            <Header />

            <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" data-parallax-bg-image="assets/images/about_bg.jpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title">
                <h1>Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="small_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                <div className="heading_s1 text-center">
                  <h2>Get In Touch</h2>
                </div>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                <div className="small_divider" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="box_shadow1 radius_all_10">
                <div className="row no-gutters">
                  <div className="col-md-6 animation" data-animation="fadeInLeft" data-animation-delay="0.02s">
                    <div className="padding_eight_all">
                      <div className="field_form">
                        <form method="post" name="enq">
                          <div className="row">
                            <div className="form-group col-12">
                              <input required="required" placeholder="Enter Name" id="first-name" className="form-control" name="name" type="text" />
                            </div>
                            <div className="form-group col-12">
                              <input required="required" placeholder="Enter Email" id="email" className="form-control" name="email" type="email" />
                            </div>
                            <div className="form-group col-12">
                              <input required="required" placeholder="Enter Phone No." id="phone" className="form-control" name="phone" type="tel" />
                            </div>
                            <div className="form-group col-12">
                              <input placeholder="Enter Subject" id="subject" className="form-control" name="subject" type="text" />
                            </div>
                            <div className="form-group col-lg-12">
                              <textarea required="required" placeholder="Message" id="description" className="form-control" name="message" rows={3} defaultValue={""} />
                            </div>
                            <div className="col-lg-12">
                              <button type="submit" title="Submit Your Message!" className="btn btn-default" id="submitButton" name="submit" value="Submit">Submit</button>
                            </div>
                            <div className="col-lg-12 text-center">
                              <div id="alert-msg" className="alert-msg text-center" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animation" data-animation="fadeInRight" data-animation-delay="0.4s">
                    <div className="contact_map map_radius_rtrb overflow-hidden h-100">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193229.77301255226!2d-74.05531241936525!3d40.823236500441624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f613438663b5%3A0xce20073c8862af08!2sW+123rd+St%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1533565007513" title="Tracker" allowFullScreen />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION CONTACT */}
      {/* START SECTION CONTACT */}
      <section className="small_pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                <div className="heading_s1 text-center">
                  <h2>Contact Information</h2>
                </div>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="overlay_bg_danger_90 icon_box text-center text_white radius_all_10 background_bg animation" data-img-src="assets/images/address_img.jpg" data-animation="fadeInUp" data-animation-delay="0.02s">
                <div className="box_icon mb-3">
                  <img src="assets/images/map_icon.png" alt="map_icon" />
                </div>
                <div className="intro_desc">
                  <h5>Address</h5>
                  <p>New Delhi Palam</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="overlay_bg_light_green_90 icon_box text-center text_white radius_all_10 background_bg animation" data-img-src="assets/images/call_img.jpg" data-animation="fadeInUp" data-animation-delay="0.03s">
                <div className="box_icon mb-3">
                  <img src="assets/images/phone_icon.png" alt="phone_icon" />
                </div>
                <div className="intro_desc">
                  <h5>Call Us</h5>
                  <p>++91-9911228484</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="overlay_bg_default_90 icon_box text-center text_white radius_all_10 background_bg animation" data-img-src="assets/images/email_img.jpg" data-animation="fadeInUp" data-animation-delay="0.04s">
                <div className="box_icon mb-3">
                  <img src="assets/images/email_icon.png" alt="email_icon" />
                </div>
                <div className="intro_desc">
                  <h5>Email</h5>
                  <p>codesparrows@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<Footer />
        </>
    )
}

export default IndexContact
