import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };


  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input className="form-control"  type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                  </div>

                  <div className="form-group mb-0">
                    <button className="btn btn-primary btn-block" type="submit">Register</button>
                  </div>
                </form>
                {/* /Form */}
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                </div>
                {/* Social Login */}
                <div className="social-login">
                  <span>Register with</span>
                  <Link to="#" className="facebook"><i className="fab fa-facebook-f" /></Link><Link to="#" className="google"><i className="fab fa-google" /></Link>
                </div>
                {/* /Social Login */}
                <div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
                {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register
