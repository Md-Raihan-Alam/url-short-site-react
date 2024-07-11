import React from "react";
import LOGO from "../images/logo.svg";
import {Link} from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col tab:flex-row justify-between items-center bg-black py-12 tab:py-16 px-5 tab:px-20">
      <div className="flex-1 w-full h-min flex justify-center items-center mb-10 tab:mb-0">
        <img src={LOGO} width="121" height="33" alt="Logo" />
      </div>
      <div className="flex-1 w-full tab:w-[60%] h-min flex flex-col tab:flex-row justify-between items-start">
        <div className="w-full h-min flex flex-col justify-center items-center tab:items-start mb-10 tab:mb-0">
          <div className="text-white font-bold mb-5">Features</div>
          <div className="text-gray-400">Link Shortening</div>
          <div className="text-gray-400">Branded Links</div>
          <div className="text-gray-400">Analytics</div>
        </div>
        <div className="w-full h-min flex flex-col justify-center items-center tab:items-start mb-10 tab:mb-0">
          <div className="text-white font-bold mb-5">Resources</div>
          <div className="text-gray-400">Blog</div>
          <div className="text-gray-400">Developers</div>
          <div className="text-gray-400">Support</div>
        </div>
        <div className="w-full h-min flex flex-col justify-center items-center tab:items-start">
          <div className="text-white font-bold mb-5">Company</div>
          <div className="text-gray-400">About</div>
          <div className="text-gray-400">Our Team</div>
          <div className="text-gray-400">Careers</div>
          <div className="text-gray-400">Contact</div>
        </div>
      </div>
      <div className="w-full tab:w-auto h-min flex justify-center items-center">
        <div className="flex space-x-6">
          <Link to="https://web.facebook.com/people/Fahis/61562400830261/"><FaFacebook className="text-white text-3xl cursor-pointer" /></Link>
          <Link to="https://www.linkedin.com/company/fahis-agency/"><FaLinkedin className="text-white text-3xl cursor-pointer" /></Link>
          <FaTwitter className="text-white text-3xl cursor-pointer" />
          <FaInstagram className="text-white text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
