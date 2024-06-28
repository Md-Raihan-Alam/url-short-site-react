import React from "react";
import illusWorking from "../images/illustration-working.svg";
const Hero = () => {
  return (
    <div className="flex flex-col tab:flex-row-reverse justify-center items-center">
      <picture className="tab:w-3/6">
        <img src={illusWorking} alt="Working" />
      </picture>
      <div className="flex flex-col justify-center items-center tab:items-start w-full tab:w-3/6 h-min my-5">
        <div className="w-full tab:w-heroWidth tab:ml-7 justify-center items-center tab:items-start font-bold text-3xl text-center my-4 px-2 tab:px-0 tab:text-start">
          More than just shorter Links
        </div>
        <div className="w-full tab:w-heroWidth tab:ml-7 justify-center items-center tab:items-start text-GRAY text-center my-4 px-5 tab:px-0 tab:text-start">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </div>
        <div className="text-white tab:ml-7 font-bold min-w-heroWidth bg-cyan rounded-full px-4 py-2 flex justify-center items-center">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Hero;
