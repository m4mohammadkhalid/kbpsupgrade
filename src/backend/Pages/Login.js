import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {postLogin} from "../../store/asyncMethods/AuthMethods"
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
	const dispatch = useDispatch();
	const { loginErrors, loading } = useSelector((state) => state.AuthReducer);
	const [state, setState] = useState({
		email: '',
		password: '',
	});
	const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const userLogin = (e) => {
		e.preventDefault();
		dispatch(postLogin(state));
	};
	useEffect(() => {
		if (loginErrors && loginErrors.length > 0) {
			loginErrors.map((error) => toast.error(error.msg));
		}
	}, [loginErrors]);
    return (
        <>

<div className="main-wrapper login-body">
  <div className="login-wrapper">
    <div className="container">
      <div className="loginbox">
        <div className="login-left">
          <img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
        </div>
        <Toaster
						position='top-right'
						reverseOrder={false}
						toastOptions={{
							style: {
								fontSize: '14px',
							},
						}}
					/>
        <div className="login-right">
          <div className="login-right-wrap">
            <h1>Login</h1>
            <p className="account-subtitle">Access to our dashboard</p>
            {/* Form */}
            <form onSubmit={userLogin}>
              <div className="form-group">
                <input className="form-control" name="email" onChange={handleInputs} value={state.email} type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input className="form-control" name="password" onChange={handleInputs} value={state.password} type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <button value={loading ? '...' : 'Login'} className="btn btn-primary btn-block" type="submit">Login</button>
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
