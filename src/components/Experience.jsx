import React,{useEffect} from 'react'
import img1 from "../assets/experience1.jpg"
import img2 from "../assets/experience2.jpg"
import img3 from "../assets//experience3.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div className=" experience py-5 justify-center text-center">
      <h2 className="font-sans text-3xl font-extrabold my-10">My Experience</h2>
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          data-aos="zoom-in-right"
          className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-[40%]"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72"
            src={img1}
            alt="img1"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-[40%]"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72"
            src={img2}
            alt="img2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-[40%]"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72"
            src={img3}
            alt="img3"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience