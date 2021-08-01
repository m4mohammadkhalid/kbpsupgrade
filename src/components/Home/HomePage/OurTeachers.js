import React from 'react'
import { Link } from "react-router-dom";
import '../css/App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const OurTeachers = () => {
    return (
      <>
      <section className="instructor-section gradient-bg">
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
             <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <div className="heading_s1 text-center">
            <h2>ADMINISTRATION</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          <div className="small_divider" />
        </div>
          </div>
        </div>
        <div className="row">
        <OwlCarousel items={4} autoplay={true} autoplayHoverPause={true} loop={true} margin={10} >

          <div className="col-lg-3 col-md-6" style={{width:'auto',minWidth:'0'}}>
            <div className="single-instructor">
             
              <div className="instructor-image">
                <Link to="#"><img src="assets/images/instructor-1.png" alt="khalid" /></Link>
              </div>
              <div className="instructor-content">
                <h4><Link to="#">john doe</Link></h4>
                <span>founder CEO</span>
              </div>
              <div className="hover-state">
                <ul>
                  <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                  <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                  <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                  <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{width:'auto',minWidth:'0'}}>
            <div className="single-instructor diffrent-bg-color">
              <div className="instructor-image">
                <Link to="#"><img src="assets/images/instructor-3.png" alt="khalid" /></Link>
              </div>
              <div className="instructor-content">
                <h4><Link to="#">arya stark</Link></h4>
                <span>Chemistry Teacher</span>
              </div>
              <div className="hover-state">
                <ul>
                  <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                  <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                  <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                  <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{width:'auto',minWidth:'0'}}>
            <div className="single-instructor">
              <div className="instructor-image">
                <Link to="#"><img src="assets/images/instructor-2.png" alt="khalid" /></Link>
              </div>
              <div className="instructor-content">
                <h4><Link to="#">chris wokes</Link></h4>
                <span>Physics Teacher</span>
              </div>
              <div className="hover-state">
                <ul>
                  <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                  <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                  <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                  <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6" style={{width:'auto',minWidth:'0'}}>
            <div className="single-instructor diffrent-bg-color">
              <div className="instructor-image">
                <Link to="#"><img src="assets/images/instructor-4.png" alt="khalid" /></Link>
              </div>
              <div className="instructor-content">
                <h4><Link to="#">devid walter</Link></h4>
                <span>Math Teacher</span>
              </div>
              <div className="hover-state">
                <ul>
                  <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                  <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                  <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                  <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          </OwlCarousel>
       
        </div>
        
        
      </div>
    </section>
</>
    )
}

export default OurTeachers
