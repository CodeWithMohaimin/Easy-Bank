import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="shadow-lg relative">
      <nav className="flex justify-between lg:px-6 items-center lg:py-0 py-8">
        <div className="pl-4">
          <img src={logo} alt="easy bank" />
        </div>
        <div className="block lg:hidden cursor-pointer pr-4">
          <div className="w-8 h-0.5 bg-darkBlue m-1"></div>
          <div className="w-8 h-0.5 bg-darkBlue m-1"></div>
          <div className="w-8 h-0.5 bg-darkBlue m-1"></div>
        </div>
        <div className="lg:flex lg:static absolute bottom-0 text-center lg:w-auto w-full">
          <ul className="lg:flex lg:gap-8 lg:static absolute lg:bg-transparent bg-hoverBg w-full ">
            <li className="border-b-4 border-transparent lg:hover:border-b-limeGreen text-center duration-300 cursor-pointer text-gray-400 hover:text-gray-700 font-medium text-base hover:border-b-4 block py-6 lg:bg-transparent hover:bg-brightCyan">
              Home
            </li>
            <li className="border-b-4 border-transparent lg:hover:border-b-limeGreen text-center duration-300 cursor-pointer text-gray-400 hover:text-gray-700 font-medium text-base hover:border-b-4 block py-6  lg:bg-transparent hover:bg-brightCyan">
              About
            </li>
            <li className="border-b-4 border-transparent lg:hover:border-b-limeGreen text-center duration-300 cursor-pointer text-gray-400 hover:text-gray-700 font-medium text-base hover:border-b-4 block py-6 lg:bg-transparent hover:bg-brightCyan">
              Contact
            </li>
            <li className="border-b-4 border-transparent lg:hover:border-b-limeGreen text-center duration-300 cursor-pointer text-gray-400 hover:text-gray-700 font-medium text-base hover:border-b-4 block py-6 lg:bg-transparent hover:bg-brightCyan">
              Blog
            </li>
            <li className="border-b-4 border-transparent lg:hover:border-b-limeGreen text-center duration-300 cursor-pointer text-gray-400 hover:text-gray-700 font-medium text-base hover:border-b-4 block py-6 lg:bg-transparent hover:bg-brightCyan">
              Careers
            </li>
          </ul>
        </div>
        <div className="lg:block hidden">
          <a
            className="px-8 py-4 font-semibold text-base rounded-full  transition-colors tracking-wide bg-gradient-to-r from-limeGreen to-brightCyan hover:to-hoverBg hover:from-greenGray"
            href="/"
          >
            Request Invite
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
