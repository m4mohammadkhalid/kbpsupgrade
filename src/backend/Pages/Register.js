import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { postRegister } from '../../store/asyncMethods/AuthMethods';

import { Link } from 'react-router-dom'

const Register = (props) => {


  const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { loading, registerErrors, user } = useSelector(
		(state) => state.AuthReducer
	);

	const dispatch = useDispatch();
	const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const userRegister = async (e) => {
		e.preventDefault();
		dispatch(postRegister(state));
	};
	useEffect(() => {
		if (registerErrors.length > 0) {
			registerErrors.map((error) => toast.error(error.msg));
		}
    if(user){
      props.history.push('/dashboard')
    }
	}, [registerErrors, user]);


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
              <Toaster
						position='top-right'
						reverseOrder={false}
						toastOptions={{
							style: {
								fontSize: '14px',
							},
						}}
					/>
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Form */}
                <form onSubmit={userRegister}>
                  <div className="form-group">
                    <input className="form-control" name="name" type="text" value={state.name}
										onChange={handleInputs} placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="email" value={state.email}
										onChange={handleInputs} type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="password" value={state.password}
										onChange={handleInputs} type="password" placeholder="Password" />
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
                <div className="text-center dont-have">Already have an account? <Link to="/admin">Login</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register
