import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Importing the correct icon

import img1 from "../assets/quiz.jpg";
import img2 from "../assets/e-learning.jpg";
import img3 from "../assets/filpkart.jpeg";
import img4 from "../assets/netflix.png";
import img5 from "../assets/die.jpg"
import img6 from "../assets/react.jpeg"
import img7 from "../assets/dashboard.jpg"

const Projects = () => {
  return (
    <div className="p-10">
      <h2 className="font-sans text-3xl font-extrabold mb-5 text-center">
        My Projects
      </h2>
      <div className="relative h-4">
        <FontAwesomeIcon icon={faArrowRight} className="absolute right-1" />
      </div>
      <div className="maincontainer flex gap-5 overflow-x-auto p-5">
        <div className="card min-w-80 max-w-80 rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img1} alt="img1" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">Quiz App</h3>
            <p className="font-sans">
              Designed an engaging and educational Quiz App, providing users
              with an interactive platform for testing knowledge and
              facilitating continuous learning.
            </p>
            <a href="https://quiz-app-nine-peach.vercel.app/">
              <button className="bg-blue-600 w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <div className="card min-w-80 max-w-80 rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img2} alt="img2" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">
              E-learning App
            </h3>
            <p className="font-sans">
              Revolutionize your learning experience with E-learning App, a
              versatile e-learning platform offering interactive courses,
              personalized learning paths, and real-time feedback.
            </p>
            <a href="https://e-learningweb-page.vercel.app/">
              <button className="bg-blue-600 w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <div className="card min-w-80 max-w-80  rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img3} alt="img3" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">
              Flipkart Clone App
            </h3>
            <p className="font-sans">
              FlipClone is a feature-rich e-commerce application that brings you
              the essence of Flipkart's renowned online marketplace. Discover a
              vast range of products.
            </p>
            <a href="https://oasis-product-landing-page.vercel.app/">
              <button className="bg-blue-600 min-w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>

        <div className="card min-w-80 max-w-80  rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img5} alt="img5" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">Game of Die</h3>
            <p className="font-sans">
              Enter a thrilling prehistoric world with Game of Die, where
              strategy and survival collide! Navigate ancient terrains, outwit
              fierce predators, and gather resources to build your tribe's
              legacy.
            </p>
            <a href="https://game-of-die.vercel.app/">
              <button className="bg-blue-600 min-w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <div className="card min-w-80 max-w-80  rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img7} alt="img7" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">
              User Dashboard
            </h3>
            <p className="font-sans">
              Developed the User Dashboard Web Application, utilizing APIs to
              curate dynamic data. Integrated various APIs to provide real-time
              data including details of cryptocurrency, ratings, and user
              reviews.
            </p>
            <a href="https://user-dashboard-wheat.vercel.app/">
              <button className="bg-blue-600 min-w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <div className="card min-w-80 max-w-80  rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img6} alt="img6" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">
              Demo React site
            </h3>
            <p className="font-sans">
              This React-based website delivers a dynamic and responsive user
              experience, tailored to showcase your organization's brand. With
              seamless navigation and custom functionalities,engaging online
              presence.
            </p>
            <a href="https://sites-liart.vercel.app/">
              <button className="bg-blue-600 min-w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <div className="card min-w-80 max-w-80  rounded-lg bg-white hover:scale-105">
          <div className="img">
            <img src={img1} alt="img1" className="h-72 w-full rounded-lg" />
          </div>
          <div className="desc p-3 text-left bg-white rounded-lg">
            <h3 className="text-2xl font-sans font-bold my-2">Quiz App</h3>
            <p className="font-sans">
              Designed an engaging and educational Quiz App, providing users
              with an interactive platform for testing knowledge and
              facilitating continuous learning.
            </p>
            <a href="">
              <button className="bg-blue-600 min-w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
