import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import '../../App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Text = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#EFF9EE' }}>
        <div className="section-title text-center">
          <h2>Top <span> Student</span></h2>
        </div>
        <div className="row" >
          <OwlCarousel items={5} autoplay={true} autoplayHoverPause={true} loop={true} margin={10} >

            {posts.map((p) => (

              <div className="col-3" style={{ width: 'auto', minWidth: '0' }}>
                <div className="our-team" style={{ borderRadius: '40px' }}>
                  <div className="picture ">
                    <img className="img-fluid" alt="khalida" src="https://picsum.photos/130/130?image=1027" />
                  </div>
                  <div className="team-content">
                    <h4 className="name">{p.title}</h4>
                  </div>
                  <ul className="social">
                    <div className="team-content">
                      <h5 className="name">Class Name</h5>
                      <h4 className="title">Topper 4</h4>
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
