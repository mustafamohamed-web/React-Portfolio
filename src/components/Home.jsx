import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mustafa Mohamed
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Junior Developer Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a junior developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive web
          applications.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
