import { Link } from "react-router-dom";

const Menu = ({ sideBar }) => (
  <div
    id="mediaMenu"
    className={`tab:hidden absolute w-menuWidth ${
      sideBar ? "translate-y-[150px]" : "-translate-y-outOfWindow"
    } transition-transform h-min z-50 py-10 px-7 m-zeroAuto left-zero right-zero bg-grayishBlue rounded-xl flex flex-col justify-around items-center`}
  >
    <div className="cursor-pointer font-bold w-full h-10 flex justify-center text-white items-center">
      Features
    </div>
    <div className="cursor-pointer font-bold w-full h-10 flex justify-center text-white items-center">
      Pricing
    </div>
    <div className="cursor-pointer font-bold w-full h-10 flex justify-center text-white items-center">
      Resources
    </div>
    <div className="cursor-pointer w-full h-10 flex justify-center text-white items-center">
      <span className="w-11/12 h-one bg-white"></span>
    </div>
    <Link
      to="/login"
      className="cursor-pointer font-bold w-full h-10 flex justify-center text-white items-center"
    >
      Login
    </Link>
    <Link
      to="/register"
      className="cursor-pointer font-bold bg-cyan rounded-full w-full h-10 flex justify-center text-white items-center"
    >
      Sign Up
    </Link>
  </div>
);

export default Menu;
