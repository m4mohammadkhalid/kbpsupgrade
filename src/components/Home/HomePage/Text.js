


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";
import { domainName } from "../../../apis/serverApi";
import '../css/App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Text = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

 
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#EFF9EE' }}>
        <div className="section-title text-center">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <div className="heading_s1 text-center">
          <h2>Top <span> Student</span></h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
        </div>
        </div>
        
        <div className="row" >
          <OwlCarousel items={5} autoplay={true} autoplayHoverPause={true} loop={true} margin={10} >

            {projects.map((proj) => (
              <div className="col-3" style={{ width: 'auto', minWidth: '0' }}>
                <div className="our-team" style={{ borderRadius: '40px' }}>
                  <div className="picture ">
                  <ModalImage
            small={domainName + proj.projectImage}
            large={domainName + proj.projectImage}
            alt={proj.title}
          />
                  </div>
                  <div className="team-content">
                    <h4 className="name">{proj.title}</h4>
                  </div>
                  <ul className="social">
                    <div className="team-content">
                      <h5 className="name">{proj.description}</h5>
                    </div>
                  </ul>
                </div>
              </div>

            ))}

          </OwlCarousel>

        </div>

      </div>

    </>
  )
}

export default Text
