import React from "react";

const Boost = () => {
  return (
    <div className="w-full h-min backgroundBoost bg-darkViolet bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center">
      <div className="w-full h-min flex flex-col justify-center items-center my-10">
        <div className="text-white font-bold text-3xl">
          Boost your links today
        </div>
      </div>
      <div className="w-full h-min flex justify-center items-center mb-10">
        <div className="min-w-heroWidth text-white font-bold bg-cyan rounded-full px-4 py-2 flex justify-center items-center hover:opacity-50">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Boost;
