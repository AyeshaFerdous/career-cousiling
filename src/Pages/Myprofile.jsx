import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Myprofile = () => {
    const {user} = useContext(AuthContext)
   
    return (
        <div>
          <Helmet>
            <title>My Profile | Career Counseling</title>
         </Helmet>
          <div className='w-11/12 mx-auto my-10 flex flex-col md:flex-row justify-between gap-5'>
           <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-2xl p-5 border">
           <form className='card-body'>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.displayName}
                  placeholder="Your Name"
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
                  value={user.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
            <NavLink to="/updateprofile" className="btn bg-gradient-to-r from-orange-400 to-orange-200">Update Profile</NavLink>
          </div>
           </form>
           </div>

           <div className='border p-5 rounded-lg'>
            <img src={user.photoURL} className='rounded-lg w-full' alt="" />
           </div>
        </div>
        </div>
    );
};

export default Myprofile;