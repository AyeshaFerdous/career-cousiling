import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Register = () => {
      const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);
      const navigate = useNavigate();
      const [passwordVisible, setPasswordVisible] = useState(false)
      const [error, setError] = useState({})
    
      const googleProvider = new GoogleAuthProvider();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const email = form.email.value;
       
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
          toast.error("Password does not match requirements");
          return;
        }
        createNewUser(email,password)
        .then(result =>{
          const user = result.user;
          setUser(user);
          updateUserProfile({displayName : name, photoURL : photo})
           .then(()=>{
            toast('Register Successfully!!')
            navigate('/')
           })
           .catch(() =>{
            toast.error('Register failed!!')
           })
        })
        .catch(err =>{
          setError(err)
        })
    }

    const handleGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
           setUser(result.user);
           toast('Google login successfully!!')
           navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
         toast.error('Google login failed');
        })
    }

    const toggleVisibility = ()=>{
        setPasswordVisible(!passwordVisible)
    }
    return (
       <div>
        <Helmet>
      <title>Register | Career Counseling</title>
    </Helmet>
      <div className="my-6">
        <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-2xl p-8 md:p-10 border">
            <h2 className="text-2xl font-semibold text-center">
              Register Your Account
            </h2>
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
            
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your Photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                 <button type='button' onClick={toggleVisibility} className='absolute top-[27rem] right-[5rem] pr-3 flex items-center cursor-pointer'>
             {
                passwordVisible ? <FaEyeSlash/> : <FaEye/>
             }
            </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-orange-400 to-orange-200">Register</button>
              </div>
              
            </form>
            <div className='text-center mb-6 flex mx-auto'>
                <button onClick={handleGoogle} className='btn font-semibold px-12 md:px-24'>
                  <FcGoogle className='text-2xl'/>
                  <span> Sign in with Google</span>
                  </button>
            </div>

            <p className="text-center font-semibold">
              Already have an account?
              <Link className="text-red-500" to="/auth/login">
                 Login
              </Link>
            </p>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Register;