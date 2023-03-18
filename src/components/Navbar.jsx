import Navbtn from "./Navbtn";
import React, { useState } from "react";
import Logo from "./assets/logo-black.png";
import wLogo from "./assets/logo-white.png";
import { CgMenuRight } from "react-icons/cg";
import "animate.css";

function Navbar({ theme }) {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <nav className="hidden sm:flex mx-2 sm:mx-16 font-nav flex justify-between sm:my-[-20px]">
        <button className=" animate__animated animate__bounceInLeft">
          <Navbtn url="#blog" text="BLOG" />
          <Navbtn url="#project" text="PROJECTS" />
        </button>
        <img
          src={theme === "dark" ? wLogo : Logo}
          alt="Logo"
          className="w-40 animate__animated animate__bounce"
        />
        <button className="animate__animated animate__bounceInRight">
          <Navbtn url="#achievement" text="ACHIEVEMENTS" />
          <Navbtn url="#contact" text="CONTACT ME" />
        </button>
      </nav>
      {/* For mobile */}
      <nav className="flex sm:hidden p-4 flex items-center justify-between font-bold">
        <img
          src={theme === "dark" ? wLogo : Logo}
          alt="Logo"
          className="w-32"
        />

        <div className="relative">
          {/* <!-- Dropdown toggle button --> */}
          <button
            className="block p-1 text-3xl dark:text-white bg-transparent bg-gray-100 rounded-md mt-[-25px]"
            onClick={handleClick}>
            <CgMenuRight />
          </button>

          {/* <!-- Dropdown List --> */}
          <div
            className="absolute right-0 w-48 bg-white bg-gray-100 rounded-md shadow-xl"
            style={{ display: isHidden ? "none" : "block" }}>
            <a
              href="#blog"
              className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-300 rounded hover:text-black">
              BLOG
            </a>
            <a
              href="#contact"
              className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-300 rounded hover:text-black">
              CONTACT ME
            </a>
            <a
              href="#project"
              className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-300 rounded hover:text-black">
              PROJECTS
            </a>
            <a
              href="#achievement"
              className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-300 rounded hover:text-black">
              ACHIEVEMENT
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
