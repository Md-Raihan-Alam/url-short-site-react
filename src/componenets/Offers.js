import React from "react";
import bandRecog from "../images/icon-brand-recognition.svg";
import iconDetail from "../images/icon-detailed-records.svg";
import iconFull from "../images/icon-fully-customizable.svg";
const Offers = () => {
  return (
    <div id="offers">
      <div className="w-full h-8 flex justify-center items-center mb-5">
        <div className="w-full h-min flex justify-center items-center text-3xl font-bold text-center pt-4">
          Advanced Statistics
        </div>
      </div>
      <div className="w-full h-min flex justify-center items-center mb-16">
        <div className="max-w-descWidth h-min py-4 flex justify-center items-center text-center text-GRAY">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </div>
      </div>
      <div className="flex flex-col tab:flex-row relative h-min justify-center flex-nowrap tab:flex-wrap items-center">
        <div className="w-full tab:w-[60%] h-[20px] bg-cyan rounded-full absolute rotate-90 tab:rotate-0 tab:top-[8.5rem]"></div>
        <div className="shadow-2xl bg-white mb-28 tab:mx-5 rounded-sm w-offerWidth relative py-7 h-offerHeight flex flex-col justify-center tab:justify-start items-center">
          <div className="flex justify-center items-center absolute -top-[60px] tab:left-[10px] w-svgWidth rounded-full h-svgWidth bg-darkViolet">
            <img src={bandRecog} alt="Brand Recognition" />
          </div>
          <div className="w-full h-min py-4 mt-10 font-bold text-2xl flex justify-center items-center tab:justify-start tab:pl-4">
            Brand Recognition
          </div>
          <div className="w-full h-min flex justify-center items-center text-center px-3 tab:pl-4 tab:text-start tab:pr-4">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </div>
        </div>
        <div className="shadow-2xl bg-white mb-28 tab:mb-12 tab:mx-5 rounded-sm w-offerWidth relative py-7 h-offerHeight flex flex-col justify-center items-center tab:justify-start">
          <div className="flex justify-center items-center absolute -top-[60px] tab:left-[10px] w-svgWidth rounded-full h-svgWidth bg-darkViolet">
            <img src={iconDetail} alt="Detailed Records" />
          </div>
          <div className="w-full h-min py-4 mt-10 font-bold text-2xl flex justify-center items-center tab:justify-start tab:pl-4">
            Detailed Records
          </div>
          <div className="w-full h-min flex justify-center items-center text-center px-3 tab:pl-4 tab:text-start tab:pr-4">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="shadow-2xl bg-white tab:mx-5 rounded-sm w-offerWidth relative py-7 h-offerHeight flex flex-col justify-center items-center tab:justify-start">
          <div className="flex justify-center items-center absolute -top-[60px] tab:left-[10px] w-svgWidth rounded-full h-svgWidth bg-darkViolet">
            <img src={iconFull} alt="Fully Customizable" />
          </div>
          <div className="w-full h-min py-4 mt-10 font-bold text-2xl flex justify-center items-center tab:justify-start tab:pl-4">
            Fully Customizable
          </div>
          <div className="w-full h-min flex justify-center items-center text-center px-3 tab:pl-4 tab:text-start tab:pr-4">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
