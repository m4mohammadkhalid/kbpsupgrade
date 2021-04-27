import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>

<header className="header_wrap dark_skin">
  <div className="top-header bg_blue_dark2 light_skin">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <ul className="contact_detail list_none text-center text-md-left">
            <li><Link to="#"><i className="ti-mobile" />123-456-7890</Link></li>
            <li><Link to="#"><i className="ti-email" /><span className="__cf_email__" data-cfemail="95fcfbf3fad5ecfae0e7f8f4fcf9bbf6faf8">[email&nbsp;protected]</span></Link></li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
            <ul className="list_none social_icons social_white text-center text-md-right">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-youtube-outline" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
            <ul className="list_none header_list border_list ml-1">
              <li><Link to="#" data-toggle="modal" data-target="#Login">Login</Link></li>
              <li><Link to="#" className="btn btn-default btn-sm rounded-0">Apply Now</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <nav className="navbar navbar-expand-lg"> 
      <Link className="navbar-brand" to="index.html">
        <img className="logo_light" src="assets/images/logo_white.png" alt="logo" />
        <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
        <img className="logo_default" src="assets/images/logo_dark.png" alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="ion-android-menu" /> </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="dropdown">
            <Link className="nav-link active" to="#" data-toggle="dropdown">Home</Link>
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Pages</Link>
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Course</Link>
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Event</Link>
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Teacher</Link>
          </li>
          <li className="dropdown">
            <Link className="nav-link" to="#" data-toggle="dropdown">Blog</Link>
          </li>
          <li>
            <Link className="nav-link" to="contact.html">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>


        </>
    )
}

export default Header
