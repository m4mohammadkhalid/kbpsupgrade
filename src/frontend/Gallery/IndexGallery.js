import React from 'react'
import '../css/Gallery.css'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
const IndexGallery = () => {
    return (
<>
<NoticeHeader />
            <Header />

<div className="container">
  <div className="row">
    <div style={{paddingTop:'40px'}} className="col-lg-12 text-center my-2">
      <h4>Gallery</h4>
    </div>
  </div>
  <div className="portfolio-menu mt-2 mb-4">
    <ul>
      <li className="btn btn-outline-dark active" data-filter="*">All</li>
      <li className="btn btn-outline-dark" data-filter=".gts">Class 8th</li>
      <li className="btn btn-outline-dark" data-filter=".lap">Class 6th</li>
      <li className="btn btn-outline-dark text" data-filter=".selfie">Class 5th</li>
    </ul>
  </div>
  <div className="portfolio-item row">
    <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg" className="fancylight popup-btn" data-fancybox-group="light"> 
        <img className="img-fluid" src="https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg" className="fancylight popup-btn" data-fancybox-group="light"> 
        <img className="img-fluid" src="https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23438.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23438.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76507.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76507.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/young-brunette-woman-with-sunglasses-urban-background_1139-893.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/young-brunette-woman-with-sunglasses-urban-background_1139-893.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/laptop-digital-device-screen-mockup_53876-76509.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/laptop-digital-device-screen-mockup_53876-76509.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/young-woman-holding-pen-hand-thinking-while-writing-notebook_23-2148029424.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/young-woman-holding-pen-hand-thinking-while-writing-notebook_23-2148029424.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/female-fashion-concept_23-2147643598.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/female-fashion-concept_23-2147643598.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/girl-city_1157-16454.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/girl-city_1157-16454.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/elegant-lady-with-laptop_1157-16643.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/elegant-lady-with-laptop_1157-16643.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/laptop-mock-up-lateral-view_1310-199.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/laptop-mock-up-lateral-view_1310-199.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/portrait-young-woman_1303-10071.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/portrait-young-woman_1303-10071.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/beautiful-girl-near-wall_1157-16401.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/beautiful-girl-near-wall_1157-16401.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/woman-taking-photograph-her-boyfriend-enjoying-piggyback-ride-his-back_23-2147841613.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/woman-taking-photograph-her-boyfriend-enjoying-piggyback-ride-his-back_23-2147841613.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/business-woman-working-laptop_1388-67.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/business-woman-working-laptop_1388-67.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/group-people-holding-laptop-mockup-charity_23-2148069565.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/group-people-holding-laptop-mockup-charity_23-2148069565.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/portrait-young-cheerful-woman-headphones-sitting-stairs_1262-17488.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/portrait-young-cheerful-woman-headphones-sitting-stairs_1262-17488.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/celebration-concept-close-up-portrait-happy-young-beautiful-african-woman-black-t-shirt-smiling-with-colorful-party-balloon-yellow-pastel-studio-background_1258-934.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/celebration-concept-close-up-portrait-happy-young-beautiful-african-woman-black-t-shirt-smiling-with-colorful-party-balloon-yellow-pastel-studio-background_1258-934.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/pretty-woman-showing-arm-muscles_23-2148056021.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/pretty-woman-showing-arm-muscles_23-2148056021.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/happy-woman-having-video-call-using-laptop-office_23-2148056211.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/happy-woman-having-video-call-using-laptop-office_23-2148056211.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/laptop-mockup-table-with-plants_23-2147955548.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/laptop-mockup-table-with-plants_23-2147955548.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-psd/woman-using-laptop-smartphone_53876-76350.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-psd/woman-using-laptop-smartphone_53876-76350.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/young-couple-taking-selfie-mobile-phone-against-blue-background_23-2148056292.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/young-couple-taking-selfie-mobile-phone-against-blue-background_23-2148056292.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/close-up-blonde-woman-sitting-sofa-using-laptop-with-blank-white-screen_23-2148028738.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/close-up-blonde-woman-sitting-sofa-using-laptop-with-blank-white-screen_23-2148028738.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/group-happy-friends-taking-selfie-cellphone_23-2147859575.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/group-happy-friends-taking-selfie-cellphone_23-2147859575.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/joyful-pretty-girl-with-curly-hair-takes-selfie-mobile-phone_8353-6635.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/joyful-pretty-girl-with-curly-hair-takes-selfie-mobile-phone_8353-6635.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/female-friends-sitting-car-hood-taking-self-portrait_23-2147855623.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/female-friends-sitting-car-hood-taking-self-portrait_23-2147855623.jpg" alt="khalid" />
      </a>
    </div>
    <div className="item  col-lg-3 col-md-4 col-6 col-sm">
      <a href="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg" className="fancylight popup-btn" data-fancybox-group="light">
        <img className="img-fluid" src="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg" alt="khalid" />
      </a>
    </div>
  </div>
</div>

      
      

<Footer />

</>
    )
}

export default IndexGallery
