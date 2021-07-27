import React, { useState, useEffect } from 'react'
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from 'react-router-dom'
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      res.data && window.location.replace("/dashboard");
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>

      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                {/* <img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" /> */}
              </div>
              
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form  onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input className="form-control" ref={userRef} type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" ref={passwordRef} type="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button disabled={isFetching} className="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center forgotpass"><Link to="forgot-password.html">Forgot Password?</Link></div>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Login with</span>
                    <Link to="#" className="facebook"><i className="fab fa-facebook-f" /></Link><Link to="#" className="google"><i className="fab fa-google" /></Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login
