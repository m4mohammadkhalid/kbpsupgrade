import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import serverApi from "../../../apis/serverApi";
import { getMessages } from "../../../actions/messageAction";
import { useDispatch } from "react-redux";

const GetAInquiry = ({ reff }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      await serverApi.post("/messages", data);
      setloading(false);
      toast.success("Sent Successfully", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset();
      dispatch(getMessages());
    } catch (error) {
      toast.error("an error happened while sending the message", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setloading(false);
  };


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
              <form onSubmit={handleSubmit(onSubmit)} className="pt-md-2 form_transparent" >
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      required="required"
                      placeholder="Enter Name *"
                      className="form-control"
                      type="text"
                        id="name"
                        name="name"
                        className="form-control shadow-none"
                        {...register("name", {
                          required: "Name Required",
                          maxLength: 20,
                          minLength: 5,
                        })}

                    />
                    {errors.name && errors.name.type === "required" && (
                        <div className="text-danger">
                          You must enter your name
                        </div>
                      )}
                      {errors.name && errors.name.type === "minLength" && (
                        <div className="text-danger">
                          Your name must be at least 5 characters
                        </div>
                      )}
                      {errors.name && errors.name.type === "maxLength" && (
                        <div className="text-danger">
                          Your name must be at most 20 characters
                        </div>
                      )}
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      required="required"
                      placeholder="Enter Email *"
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      className="form-control shadow-none"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <div className="text-danger">
                          You must enter your email
                        </div>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <div className="text-danger">
                          You must enter a valid email
                        </div>
                      )}
                  </div>
                  <div style={{marginTop:'10px'}} className="form-group col-sm-12">
                    <input
                      required="required"
                      placeholder="Enter Phone No *"
                      className="form-control"
                      type="text"
                      id="subject"
                      className="form-control shadow-none"
                      name="subject"
                      {...register("subject", {
                        required: true,
                        maxLength: 50,
                        minLength: 5,
                      })}
                    />
                     {errors.subject && errors.subject.type === "required" && (
                        <div className="text-danger">
                          You must enter a subject
                        </div>
                      )}
                      {errors.subject &&
                        errors.subject.type === "minLength" && (
                          <div className="text-danger">
                            Subject must be at least 5 characters
                          </div>
                        )}
                      {errors.subject &&
                        errors.subject.type === "maxLength" && (
                          <div className="text-danger">
                            Subject must be at most 50 characters
                          </div>
                        )}
                  </div>
                  
                  <div style={{marginTop:'10px'}} className="form-group col-sm-12">
                    <textarea
                      required="required"
                      placeholder="Message *"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      type="text"
                      name="message"
                      id="message"
                      rows="3"
                      className="form-control md-textarea shadow-none"
                      {...register("message", {
                        required: true,
                        minLength: 20,
                      })}
                    />
                    {errors.message && errors.message.type === "required" && (
                        <div className="text-danger">
                          You must enter a message
                        </div>
                      )}
                      {errors.message &&
                        errors.message.type === "minLength" && (
                          <div className="text-danger">
                            Message must be at least 20 characters
                          </div>
                        )}
                  </div>
                  <div style={{marginTop:'10px'}} className="col-md-12">
                  {!loading && (
                      <input
                        type="submit"
                        className="btn btn-primary shadow-none "
                        value="Send"
                      />
                    )}
                    {loading && (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
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
