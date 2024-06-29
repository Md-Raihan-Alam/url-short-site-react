import LOGO from "../images/logo.svg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideMenu = () => {
    setSideBar(!sideBar);
  };
  return (
    <header className="w-full h-headerHeight flex justify-between items-center px-5">
      <div className="flex w-3/4 h-headerHeight justify-start items-center">
        <img src={LOGO} width="100" height="50" className="pr-3" alt="Logo" />
        <div className="hidden tab:flex w-full h-full flex-row justify-start items-center">
          <div
            div
            className="cursor-pointer font-bold pr-3 hidden tab:flex justify-center text-gray-600 hover:text-black items-center"
          >
            Features
          </div>
          <div
            div
            className="cursor-pointer font-bold pr-3 hidden tab:flex justify-center text-gray-600 hover:text-black items-center"
          >
            Pricing
          </div>
          <div
            div
            className="cursor-pointer font-bold pr-3 hidden tab:flex justify-center text-gray-600 hover:text-black items-center"
          >
            Resources
          </div>
        </div>
      </div>
      <div className="hidden w-3/12 h-headerHeight tab:flex justify-end items-center overflow-visible">
        <Link
          to="/login"
          className="cursor-pointer font-bold h-10 hidden tab:flex justify-end text-gray-600 items-center pr-6"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="cursor-pointer font-bold bg-cyan rounded-full min-w-btnWidth h-10 hidden tab:flex justify-center hover:opacity-50 text-white items-center"
        >
          Sign Up
        </Link>
      </div>
      <div className="flex tab:hidden" onClick={() => showSideMenu()}>
        <FaBars />
      </div>
      <Menu sideBar={sideBar} />
    </header>
  );
};

export default Header;
