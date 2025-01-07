import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import Myprofile from "../Pages/Myprofile";
import SevicesCards from "../Components/SevicesCards";
import ServiceDetails from "../Pages/ServiceDetails";
import Authlayout from "../layout/Authlayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../Pages/ResetPassword";
import ErrorPage from "../Pages/ErrorPage";
import ContactUs from "../Pages/ContactUs";
import UpdateProfile from "../Pages/UpdateProfile";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('/categories.json'),
            children: [
              {
                path: '/',
                element: <SevicesCards></SevicesCards>,
                loader : ()=> fetch('/services.json')
              },
              {
                path: '/category/:category',
                element: <SevicesCards></SevicesCards>,
                loader : () => fetch('/services.json'),
               },
            ]
        },
        {
          path: '/service/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ()=>fetch('/services.json')
        },
        {
            path: "/myprofile",
            element: <PrivateRoute><Myprofile></Myprofile></PrivateRoute>,
        },
        {
          path: "/updateprofile",
          element: <UpdateProfile></UpdateProfile>,
        },
        {
          path: "/contactus",
          element: <ContactUs/>
        },
        {
          path: "/auth",
          element: <Authlayout/>,
          children: [
            {
                path: "/auth/login",
                element: <Login/>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
              path: "/auth/resetPassword",
              element: <ResetPassword></ResetPassword>,
            }
        ]
        }
      ]
    },
  ]);

  export default router;