import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import '../css/Marquee.css'
const Header = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://m4mohammadkhalid.github.io/file/slider.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>KBPS SCHOOL</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          to="assets/images/favicon.png"
        />
      </Helmet>
        <div style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}} className="site-header" >
    <div style={{padding:'0px 10px 0px 20px'}}>
      <div className="row">
        <div className="col-lg-2 col-md-4 khalidmedia">
          <div className="site-brand">
            <img className="logofix" style={{width:'160px',height:'130px' }} src="assets/images/kbps.png"  alt="khalid" />
            <div className="navbar-brandd">
                <h1>KBPS SCHOOL</h1>
            </div>
          </div>
        </div>
        <div style={{paddingTop:"40px"}} className="col-lg-5 col-md-4 navbar-branddd">
							<div className="top-header-item">
								{/* <h4><p> <span class="fast-flicker">KBPS</span> SCHOOL</p></h4> */}
                <h4 style={{color:'#1E2264'}}>KBPS SCHOOL</h4>
                <h6>Better Education For A Better Tomorrow</h6>
							</div>
				</div>
        <div style={{paddingTop:"30px",paddingLeft:'60px'}} className="navbar-branddd col-lg-5 col-md-4">
							<div className="top-header-item">
								<h6>ONLINE ADMISSION FOR CLASSES I TO VIII...CLICK HERE</h6>
                <h6 style={{fontSize:'14px',marginLeft:'40px'}}>ONLINE ADMISSION FOR CLASSES I SESSION 2021-22</h6>
							</div>
              <div style={{marginLeft:'40px'}}>
              <img style={{width:'160px',height:'60px',marginRight:'60px' }} src="assets/images/global-presence.png" alt="Developer Khalid" />
              <img style={{width:'140px',height:'60px' }} src="assets/images/login-btn.png" alt="Global Presence" />
              </div>
				</div>
      </div>
        
    </div>
  </div>
      <header style={{backgroundColor:'#1E2264'}} className="header_wrap dark_skin">
        
        <div  className="container">
          <nav className="navbar navbar-expand-lg">
            <Link style={{ padding: '6px 0px 1px 0px', fontSize: '30px', textAlign: 'center' }} to="/" className="navbar-brand navbar-brandd signnn">             
              <p> <span class="fast-flicker">KBPS</span> SCHOOL</p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ion-android-menu" />
            </button>
            <div 
              className="collapse navbar-collapse justify-content-center navbar-nav1"
              id="navbarSupportedContent"
            >
              <ul  className="navbar-nav navbar-nav1">
                <li className="dropdown">
                  <NavLink style={{color:'white'}} activeClassName="active_class"
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="dropdown ">
                  <NavLink style={{color:'white'}} to="/about" activeClassName="active_class" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink style={{color:'white'}} activeClassName="active_class" className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink style={{color:'white'}} activeClassName="active_class" className="nav-link" to="/event">
                    News & Event
                  </NavLink>

                </li>
                <li className="dropdown">
                  <NavLink style={{color:'white'}} activeClassName="active_class" className="dropdown-toggle nav-link" to="#">
                    Administration
                  </NavLink>
                  <div className="dropdown-menu">
                            <ul> 
                                <li><NavLink  className="dropdown-item nav-link nav_item" to="/principal">Principal</NavLink></li> 
                                <li><NavLink  className="dropdown-item nav-link nav_item" to="/headmasters">Headmasters</NavLink></li>
                                <li><NavLink  className="dropdown-item nav-link nav_item" to="/tc">School Transfer<br /> Certificates</NavLink></li>
                                <li><NavLink  className="dropdown-item nav-link nav_item" to="/teacher">Administrative Staff</NavLink></li>
                                <li><NavLink  className="dropdown-item nav-link nav_item" to="/vacancies">Vacancies</NavLink></li>
                            </ul>
                        </div>
                </li>
                <li className="dropdown">
                  <NavLink style={{color:'white'}} activeClassName="active_class" className="nav-link" to="/facility">
                    Facility
                  </NavLink>
                </li>
                <li>
                  <NavLink style={{color:'white'}} activeClassName="active_class" to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink style={{color:'white'}} to="/login" className="nav-link">
                    Admin
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
