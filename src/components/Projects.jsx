import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Importing the correct icon

import img1 from "../assets/quiz.jpg";
import img2 from "../assets/e-learning.jpg";
import img3 from "../assets/filpkart.jpeg";
import img4 from "../assets/netflix.png";

const Projects = () => {
  return (
    <div className="p-10">
      <h2 className="font-sans text-3xl font-extrabold mb-5 text-center">My Projects</h2>
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
            <a href="">
              <button className="bg-blue-600 w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
                <p className="font-sans text-md">Link</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
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
            <a href="">
              <button className="bg-blue-600 w-20 h-9 mt-3 flex gap-2 justify-center align-middle items-center rounded-lg">
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
