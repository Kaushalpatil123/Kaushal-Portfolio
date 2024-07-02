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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
              Purezza Technologies (Frontend Developer)
            </h5>
            <h6 className="text-left text-xl">Jan 2024 - Present</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              ● Developed and maintained dynamic user interfaces for various
              React.js applications, ensuring a seamless user experience.
              <br />● Collaborated with cross-functional teams to integrate
              APIs, enhancing application functionality and performance.
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
              Oasis Infobyte (Web Developer)
            </h5>
            <h6 className="text-left text-xl">May 2023 - Jun 2023</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              ● Developed a Temperature App facilitating real-time temperature
              conversion, streamlining user experience with swift and accurate
              results.
              <br />● Designed a visually appealing product landing page on the
              renowned Flipkart platform to showcase the products, Implemented
              compelling visuals and a seamless layout, contributing to a 40%
              increase in user interaction and interest.
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
              Sync Inten's (Web Developer)
            </h5>
            <h6 className="text-left text-xl">Apr 2023 - May 2023</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
              ● Crafted a Quiz App with a user-friendly interface, providing an
              engaging experience through multiple-choice questions.Implemented
              real-time feedback to enhance user interaction.
              <br />
              ● Engineered a Music App with seamless audio streaming, offering users an
              immersive listening experience. Integrated playlist
              functionalities for personalized content curation while optimizing
              app performance for smooth operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience