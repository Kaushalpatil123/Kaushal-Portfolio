import React from 'react'
import Typewriter from "typewriter-effect";
import photo from "../assets/giftphoto.gif"


const Spotlight = () => {
  return (
    <div>
      <div className="bg-[#252525] w-full py-10 pt-32 h-screen">
        <div className="flex gap-5 m-auto w-[80%]">
          <div className="img m-auto">
            <div class="fancy-border-radius m-auto overflow-hidden w-96 h-96">
              <img src={photo} alt="img fill" />
            </div>
          </div>

          <div className="intro pt-20 pl-10 pb-10 text-white m-auto">
            <h1 className="text-6xl font-bold mb-5 text-gradient">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [" Hello, I'm Kaushal Patil..."],
                }}
              />
            </h1>
            <h1 className="text-4xl font-bold mb-5">A Front-end Developer.</h1>
            <div className="w-full">
              <p className="text-[25px]">
                Hi, I am a coding and frontend development enthusiast, always
                open to learning new skills and looking for work opportunities.
                I'm proficient in web development and frontend development, with
                excellent skills in HTML, CSS, and JavaScript. I also have
                experience with libraries like React.js. I am very interested in
                working with new people and learning new skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight