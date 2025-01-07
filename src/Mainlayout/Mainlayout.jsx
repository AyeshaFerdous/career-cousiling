import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import { HelmetProvider } from "react-helmet-async";

const Mainlayout = () => {
  return (
    <div>
      <HelmetProvider>
       <ToastContainer position="top-center"/>
      {/* Navbar */}
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
      </HelmetProvider>
     
    </div>
  );
};

export default Mainlayout;
