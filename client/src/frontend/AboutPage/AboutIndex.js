import React,{useState,useEffect} from 'react'

import { Link } from "react-router-dom";
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
import axios from 'axios'

const AboutIndex = () => {
    const [post,setpost]=useState([])
useEffect(()=>{
  axios.get('http://localhost:4000/api/v1/product').then(response=>setpost(response.data)).catch(err=>console.log(err))
})
    return (
        <>  
            <NoticeHeader />
            <Header />

            <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',height:'80px', paddingTop:'18px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 style={{textAlign:'center'}}>About Us</h1>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      {/* START SECTION FEATURE */}
      <section style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'38px'}} className="bg_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                <div className="heading_s1 text-center">
                  <h2>Why Choose KBPS SCHOOL</h2>
                </div>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div style={{borderRadius:'60px',backgroundColor: '#0000'}} className="icon_box text-center icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                <div className="box_icon bg_danger mb-3">
                  <img src="assets/images/book.png" alt="book" />
                </div>
                <div className="intro_desc">
                  <h5>Books &amp; Library</h5>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{borderRadius:'60px',backgroundColor: '#0000'}} className="icon_box text-center icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                <div className="box_icon bg_default mb-3">
                  <img src="assets/images/globe.png" alt="globe" />
                </div>
                <div className="intro_desc">
                  <h5>Learn Courses Online</h5>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{borderRadius:'60px',backgroundColor: '#0000'}} className="icon_box text-center icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                <div className="box_icon bg_light_green mb-3">
                  <img src="assets/images/instructors.png" alt="instructors" />
                </div>
                <div className="intro_desc">
                  <h5>Expert Instructors</h5>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {
    post.map((data,key)=>(

  
      <section className="overflow-hidden res_md_p_0">
        <div className="container-fluid p-0">
          <div className="row no-gutters align-items-center">
            <div className="col-md-6">
              <div style={{borderRadius: '200px 200px 200px 200px'}} className="box_shadow1 bg-white overlap_section padding_eight_all">
                <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.02s">
                  <div className="heading_s1">
                    <h2>{data.name}</h2>
                  </div>
                  <p>{data.description}</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="animation" data-animation="fadeInRight" data-animation-delay="0.03s">
                <div className="overlay_bg_30 about_img z_index_minus1">
                  <img className="w-100" src="assets/images/about_img.jpg" alt="about_img" />
                </div>
                <Link to="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup video_play">
                  <span className="ripple"><i className="ion-play ml-1" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        ))
}
      <section  className="parallax_bg overlay_bg_blue_90" data-parallax-bg-image="assets/images/teacher_bg.jpg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center text_white animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                <div className="heading_s1 heading_light text-center">
                  <h2>Our Teachers</h2>
                </div>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                <div className="team_img">
                  <img src="assets/images/instructor.png" alt="team1" />
                  <ul className="list_none social_icons social_white">
                    <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                    <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                    <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                    <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
                  </ul>
                </div>
                <div className="team_title radius_lbrb_10 text-center">
                  <h5><Link to="#">Aden Smith</Link></h5>
                  <span>Head Of Department</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                <div className="team_img">
                  <img src="assets/images/instructor.png" alt="team2" />
                  <ul className="list_none social_icons social_white">
                    <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                    <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                    <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                    <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
                  </ul>
                </div>
                <div className="team_title radius_lbrb_10 text-center">
                  <h5><Link to="#">Kally Brooks</Link></h5>
                  <span>Professor</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                <div className="team_img">
                  <img src="assets/images/instructor.png" alt="team3" />
                  <ul className="list_none social_icons social_white">
                    <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                    <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                    <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                    <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
                  </ul>
                </div>
                <div className="team_title radius_lbrb_10 text-center">
                  <h5><Link to="#">David clark</Link></h5>
                  <span>Chemistry Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                <div className="team_img">
                  <img src="assets/images/instructor.png" alt="team4" />
                  <ul className="list_none social_icons social_white">
                    <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                    <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                    <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                    <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
                  </ul>
                </div>
                <div className="team_title radius_lbrb_10 text-center">
                  <h5><Link to="#">Rebeka Alig</Link></h5>
                  <span>English Teacher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
   
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
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
              <div className="testimonial_slider testimonial_style1 carousel_slider owl-carousel owl-theme" data-margin={30} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;2&quot;}}">
                <div className="testimonial_box">
                  <div className="testimonial_img">
                    <img className="radius_all_5" src="assets/images/instructor.png" alt="client" />
                  </div>
                  <div className="testi_meta">
                    <div className="testi_user">
                      <h6>Lissa Castro</h6>
                      <span className="text_default">Co-Founder</span>
                    </div>
                    <div className="testi_desc">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testimonial_img">
                    <img className="radius_all_5" src="assets/images/instructor.png" alt="client" />
                  </div>
                  <div className="testi_meta">
                    <div className="testi_user">
                      <h6>Lissa Castro</h6>
                      <span className="text_default">Co-Founder</span>
                    </div>
                    <div className="testi_desc">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testimonial_img">
                    <img className="radius_all_5" src="assets/images/instructor.png" alt="client" />
                  </div>
                  <div className="testi_meta">
                    <div className="testi_user">
                      <h6>Lissa Castro</h6>
                      <span className="text_default">Co-Founder</span>
                    </div>
                    <div className="testi_desc">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                  </div>
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

export default AboutIndex
