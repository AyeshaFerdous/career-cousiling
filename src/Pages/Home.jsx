import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Career from "../Components/Career";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  const categories = useLoaderData();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* Banner section */}
      <Banner />
      {/* Heading Section */}
      <div className="max-w-xl mx-auto text-center p-4 mb-14 mt-14">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">OUR SERVICES</h1>
        <p className="text-3xl md:text-4xl font-bold mb-3">Empower Your Career Journey for Greater Success</p>
         <hr className="border-4 max-w-sm mx-auto border-orange-500 rounded-md" data-aos="fade-down" data-aos-offset="200" data-aos-easing="linear" data-aos-duration="1500"/>
      </div>
      <div className="w-11/12 mx-auto">
        {/* categories tab section */}
        <Categories categories={categories}></Categories>

        <Outlet></Outlet>
              
        <Career/>
        <Newsletter/>
      </div>
    </div>
  );
};

export default Home;
