import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 shadow-md p-5 flex justify-between">
      <h1 className="text-3xl font-semibold font-sans">Kaushal Patil ...</h1>
      <div className="flex gap-12 items-center ">
        <a href="" className="text-xl font-sans hover:scale-75">All Resources</a>
        <button className="h-12 px-4 rounded-xl bg-black text-white p-1 shadow-md font-sans font-semibold">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
