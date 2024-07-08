import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Mongodb from "../assets/mongodb.png";
import Tailwind from "../assets/tailwind.png";
import Figma from "../assets/figma.png";
import Postman from "../assets/postman.svg";

const Skills = () => {
  return (
    <div className=" skillbackground text-center pb-10 pt-10 justify-center items-center">
      <h2 className="font-sans text-3xl font-extrabold">My Skills</h2>
      <div className=" p-10 w-[50%] m-auto overflow-hidden">
        <div className="skill flex gap-8">
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "#ff0000" }}
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <FontAwesomeIcon
            icon={faCss3}
            style={{ color: "#185bcd" }}
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <FontAwesomeIcon
            icon={faJs}
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#1964e6" }}
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <img
            src={Mongodb}
            alt="Mongodb"
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <img
            src={Postman}
            alt="Postman"
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <img
            src={Figma}
            alt="Figma"
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <img
            src={Tailwind}
            alt="Tailwind"
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="h-20 w-20 hover:scale-125 transform ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
