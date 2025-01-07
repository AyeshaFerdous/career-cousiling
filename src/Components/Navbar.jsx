import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
   const {user, logOut} = useContext(AuthContext);
    const navlinks = <>
     <li className="font-semibold text-md"><NavLink to="/">Home</NavLink></li>
     {
      user && <li className="font-semibold text-md"><NavLink to="/myprofile">My Profile</NavLink></li>
     }
     <li className="font-semibold text-md"><NavLink to="/contactus">Contact Us</NavLink></li>
    </>
  return (
   <div>
     <Helmet>
      <title>Home | Career Counseling</title>
    </Helmet>
    <div className="bg-gradient-to-r from-orange-400 to-orange-200">
      <div className="navbar w-11/12 mx-auto py-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {navlinks}
            </ul>
          </div>
          <a className="text-2xl font-bold text-white">Career Counseling</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
       
        {user && user?.email ? (
          <div className="flex gap-2">
        <div className="relative group">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
          <p className="hidden absolute group-hover:inline bg-white p-1 rounded font-bold">{user.displayName}</p>
        </div>
          <button onClick={logOut} className="btn">
            Log Out
          </button>
          </div>
      
        ) : (
          <Link to="/auth/login" className="btn">
            Login
          </Link>
        )}
        </div>
      
      </div>
    </div>
   </div>
  );
};

export default Navbar;
