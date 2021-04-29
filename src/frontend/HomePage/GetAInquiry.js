import React from 'react'

const GetAInquiry = () => {
    return (

      <section style={{backgroundImage:'url("assets/images/formbackground.jpg")',borderRadius: '20px',backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}}
      className="pb-0 background_bg bg_blue_dark"
      data-img-src="assets/images/formbackground.jpg"
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-7">
            <div style={{backgroundColor:'#6c757dbd' , borderRadius: '20px'}}
              className="register_form text_white padding_eight_all animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.02s"
            >
              <div className="heading_s1 heading_light">
                <h2>
                  Get a Free <span className="text_default">Inquiry</span>
                </h2>
              </div>
              <p >
                If you are going to use a passage of Lorem Ipsum, you need
                to be sure there isn't anything hidden in the middle of text
              </p>
              <form
                method="post"
                name="enq"
                className="pt-md-2 form_transparent"
              >
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      required="required"
                      placeholder="Enter Name *"
                      className="form-control"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      required="required"
                      placeholder="Enter Email *"
                      className="form-control"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      required="required"
                      placeholder="Enter Phone No *"
                      className="form-control"
                      name="phone"
                      type="tel"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <div className="custom_select">
                      <select className="form-control">
                        <option>Select Course</option>
                        <option>Select Course 1</option>
                        <option>Select Course 2</option>
                        <option>Select Course 3</option>
                        <option>Select Course 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group col-sm-12">
                    <textarea
                      required="required"
                      placeholder="Message *"
                      className="form-control"
                      name="message"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      title="Submit Your Message!"
                      className="btn btn-default rounded-0"
                      name="submit"
                      value="Submit"
                    >
                      Register Now
                    </button>
                  </div>
                  <div className="col-sm-12">
                    <div id="alert-msg" className="alert-msg text-center" />
                  </div>
                </div>
              </form>
            </div>
            <div className="large_divider" />
          </div>
          <div className="col-lg-6 col-md-5">
            <div
              className="text-center animation"
              data-animation="fadeInRight"
              data-animation-delay="0.03s"
            >
              <img src="assets/images/girl_img.png" alt="girl_img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}

export default GetAInquiry
