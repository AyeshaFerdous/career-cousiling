import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


 const Login = () => {
    const {userLogin,setUser, setEmail,email} = useContext(AuthContext)
    const location  = useLocation();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false)
    
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password  = form.password.value;
        
       userLogin(email, password)
       .then((result)=>{
        const user = result.user;
        setUser(user);
        toast('🦄 Successfully Login!');
        navigate(location?.state ? location.state : "/")
       
       })
       .catch(()=>{
          toast.error('Login failed!')
       })

       
    }

    const handleGoogle = () =>{
        signInWithPopup(auth, googleProvider)
       .then(result => {
          setUser(result.user);
          toast('Google login Successful!')
          navigate(location?.state ? location.state : "/")
       })
       .catch(()=>{
        toast.error('Google login Failed!')
       })
    }
    const toggleVisibility = ()=>{
        setPasswordVisible(!passwordVisible)
    }
    return (
       <div>
        <Helmet>
          <title>Log In | Career Counseling</title>
       </Helmet>
         <div className='my-6'>
          <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-2xl p-8 md:p-10 border">
        <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e)=> setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button type='button' onClick={toggleVisibility} className='absolute top-[15.5rem] right-[5rem] pr-3 flex items-center cursor-pointer'>
             {
                passwordVisible ? <FaEyeSlash/> : <FaEye/>
             }
            </button>
           
            <label className="label">
              <Link to="/auth/resetPassword" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-orange-400 to-orange-200">Login</button>
          </div>

         
        </form>
        <div className='text-center mb-6 flex mx-auto'>
                <button onClick={handleGoogle} className='btn font-semibold px-12 md:px-24'>
                  <FcGoogle className='text-2xl'/>
                  <span>Sign in with Google</span>
                </button>
        </div>
        <p className="text-center font-semibold">Don't have an account? <Link className="text-red-500" to="/auth/register">Register</Link></p>
      </div>
        </div>
        </div>
       </div>
    );
};

export default Login;