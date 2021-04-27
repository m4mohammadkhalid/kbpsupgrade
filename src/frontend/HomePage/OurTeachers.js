import React from 'react'
import { Link } from "react-router-dom";

const OurTeachers = () => {
    return (
<section className="bg_gray">
  <div className="container">	
    <div className="row">
      <div className="col-12">
        <div className="heading_s1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <h2>Our Teachers</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div className="team_img">
            <img src="assets/images/team_img1.jpg" alt="team1" />
          </div>
          <div className="team_title text-center">
            <h5><Link to="#">Aden Smith</Link></h5>
            <span>Head Of Department</span>
            <ul className="list_none social_icons">
              <li><Link to="#" className="sc_facebook"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#" className="sc_twitter"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#" className="sc_gplus"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#" className="sc_instagram"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
          <div className="team_img">
            <img src="assets/images/team_img2.jpg" alt="team2" />
          </div>
          <div className="team_title text-center">
            <h5><Link to="#">Kally Brooks</Link></h5>
            <span>Professor</span>
            <ul className="list_none social_icons">
              <li><Link to="#" className="sc_facebook"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#" className="sc_twitter"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#" className="sc_gplus"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#" className="sc_instagram"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          <div className="team_img">
            <img src="assets/images/team_img3.jpg" alt="team3" />
          </div>
          <div className="team_title text-center">
            <h5><Link to="#">David clark</Link></h5>
            <span>Chemistry Teacher</span>
            <ul className="list_none social_icons">
              <li><Link to="#" className="sc_facebook"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#" className="sc_twitter"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#" className="sc_gplus"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#" className="sc_instagram"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
          <div className="team_img">
            <img src="assets/images/team_img4.jpg" alt="team4" />
          </div>
          <div className="team_title text-center">
            <h5><Link to="#">Rebeka Alig</Link></h5>
            <span>English Teacher</span>
            <ul className="list_none social_icons">
              <li><Link to="#" className="sc_facebook"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#" className="sc_twitter"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#" className="sc_gplus"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#" className="sc_instagram"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default OurTeachers
