import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
      <Helmet>
      <title>Contact Us | Career Counseling</title>
    </Helmet>
      <div data-aos="fade-down"
    data-aos-offset="200"
    data-aos-easing="linear"
    data-aos-duration="600"
    className="mb-24">
      <div className="max-w-xl  mx-auto text-center p-4 mb-14 mt-14">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">Contact Us</h1>
        <p className="text-3xl md:text-4xl font-bold mb-3">
        Get In Touch With Us
        </p>
        <hr
          className="border-4 max-w-sm mx-auto border-orange-500 rounded-md"
          
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
        <div className="flex gap-4 items-center">
        <FaSquarePhone className="text-5xl"/>
        <div className="flex flex-col gap-3">
            <span className="text-xl md:text-2xl font-medium">Call to ask any question</span>
            <span className="text-xl md:text-2xl font-bold">+8812456987</span>
        </div>
        </div>

        <div className="flex gap-4 items-center">
        <MdEmail className="text-5xl"/>
        <div className="flex flex-col gap-3">
            <span className="text-xl md:text-2xl font-medium">Email Us</span>
            <span className="text-xl md:text-2xl font-bold">careercounseling@gmail.com</span>
        </div>
        </div>

        <div className="flex gap-4 items-center">
        <FaLocationDot className="text-5xl"/>
        <div className="flex flex-col gap-3">
            <span className="text-xl md:text-2xl font-medium">Visit Our Office</span>
            <span className="text-xl md:text-2xl font-bold">Gulsan, Dhaka</span>
        </div>
        </div>
      </div>
      
      <div className="max-w-xl  mx-auto text-center mb-14 mt-14">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Submit Form</h1>
        <hr
          className="border-4 max-w-sm mx-auto border-orange-500 rounded-md"
        />
      </div>
     
      <div className="w-11/12 lg:w-7/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="mt-3 p-4 border-none outline-none bg-slate-100 rounded-3xl w-full" type="text" placeholder="First Name*"/>
            <input className="mt-3 p-4 border-none outline-none bg-slate-100 rounded-3xl w-full" type="text" placeholder="Last Name*"/>

            <input className="mt-3 p-4 border-none outline-none bg-slate-100 rounded-3xl w-full" type="text" placeholder="Phone Number*"/>
            <input className="mt-3 p-4 border-none outline-none bg-slate-100 rounded-3xl w-full" type="text" placeholder="Email Number*"/>

            <div className="md:col-span-2">
              <textarea rows="9" className="mt-3 p-4 border-none outline-none bg-slate-100 rounded-3xl w-full" type="text" placeholder="Write your Message Here"></textarea>
            </div>

            <button className="btn bg-gradient-to-r from-orange-400 to-orange-200 rounded-3xl  md:col-span-2 font-medium">Submit</button>
             
            
          </div>
         </div>

     </div>
    </div>
   
  );
};

export default ContactUs;
