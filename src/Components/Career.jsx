import { BsFillStopwatchFill } from "react-icons/bs";
import { PiNotepadFill } from "react-icons/pi";
import { FaEarthOceania } from "react-icons/fa6";

import { FaSquareThreads } from "react-icons/fa6";
import { FaSquareViadeo } from "react-icons/fa6";
const Career = () => {
  return (
    <div className="my-40">
      <div className="max-w-xl  mx-auto text-center p-4 mb-14">
        <h1 className="text-2xl md:text-3xl font-semibold text-uppercase mb-3">What Sets Us Apart</h1>
        <p className="text-3xl md:text-4xl font-bold mb-3">
          Empower Your Career Journey for Greater Success
        </p>
        <hr
          className="border-4 max-w-sm mx-auto border-orange-500 rounded-md"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="2000"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
        <div className="flex flex-col gap-5"  data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="2000">
           <div className="flex flex-col gap-4 items-center lg:items-end">
           <BsFillStopwatchFill className="text-5xl"/>
           <span className="text-2xl font-bold">15 Years & Going</span>
           <p className="text-gray-400 text-end">Unwavering commitment on guiding individuals towards successful and fulfilling career paths.</p>
           </div>

           <div className="flex flex-col gap-4 items-center lg:items-end">
           <PiNotepadFill className="text-5xl"/>
           <span className="text-2xl font-bold">International Assessments</span>
           <p className="text-gray-400 text-end">Offering exceptional career guidance through our specialized Psychometric Assessments.</p>
           </div>
        </div>
        <div className="flex flex-col gap-5"  data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="2000">
        <iframe  width="100%" height="500px" src="https://www.youtube.com/embed/laM9Jxmzs9E?si=Y_PKmgFIQbRKndoP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <div className="flex flex-col items-center gap-4">
        <FaEarthOceania className="text-5xl"/>
        <span className="text-2xl font-bold">Clients from Across the Globe</span>
        <p className="text-gray-400 text-center">Preferred choice for everyone as our results are internationally valid across the globe.</p>
        </div>
        </div>
        <div className="flex flex-col gap-5"  data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="linear"
          data-aos-duration="2000">
        <div className="flex flex-col gap-4 items-center md:items-start">
        <FaSquareViadeo className="text-5xl"/>
        <span className="text-2xl font-bold">Experienced Counsellors</span>
        <p className="text-gray-400 ">Experts dedicated to helping you navigate your career path with confidence and clarity.</p>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start">
        <FaSquareThreads className="text-5xl"/>
        <span className="text-2xl font-bold">Personalized 1:1 Approach</span>
        <p className="text-gray-400 ">One-size-fits-all approach doesn't work when it comes to choosing ideal career paths.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
