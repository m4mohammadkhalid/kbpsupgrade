import React from 'react'
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
    return (
<section>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <div className="heading_s1 text-center">
            <h2>Upcoming events</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
        </div>
      </div>
    </div>
    <div className="row event_list justify-content-center">
      <div className="col-lg-6">
        <div className="content_box event_box box_shadow1 animation mb-4 mb-lg-0" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div className="content_img">
            <Link to="#"><img src="assets/images/event_img1.jpg" alt="event_img1" /></Link>
          </div>
          <div className="event_date">
            <h5><span>16</span> May</h5>
            <span className="event_time bg_default">10:00 am 3:00 pm</span>
          </div>
          <div className="content_desc bg-white">
            <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
            <ul className="list_none content_meta">
              <li><i className="ti-user" /> <Link to="#" className="text_default">John Wood</Link></li>
              <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
            </ul>
            <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-12">
            <div className="content_box event_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
              <div className="event_date">
                <h5><span>27</span> Apr</h5>
                <span className="event_time bg_default">9:00 am 4:00 pm</span>
              </div>
              <div className="content_desc bg-white">	
                <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
                <ul className="list_none content_meta">
                  <li><i className="ti-user" /> <Link to="#" className="text_default">John Wood</Link></li>
                  <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                </ul>
                <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
            <div className="content_box event_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
              <div className="event_date">
                <h5><span>22</span> Jun</h5>
                <span className="event_time bg_default">11:00 am 4:00 pm</span>
              </div>
              <div className="content_desc bg-white">
                <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
                <ul className="list_none content_meta">
                  <li><i className="ti-user" /> <Link to="#" className="text_default">John Wood</Link></li>
                  <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                </ul>
                <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
            <div className="content_box event_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
              <div className="event_date">
                <h5><span>22</span> Jun</h5>
                <span className="event_time bg_default">11:00 am 4:00 pm</span>
              </div>
              <div className="content_desc bg-white">
                <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
                <ul className="list_none content_meta">
                  <li><i className="ti-user" /> <Link to="#" className="text_default">John Wood</Link></li>
                  <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                </ul>
                <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default UpcomingEvents
