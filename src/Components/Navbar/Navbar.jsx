import Navbtn from "./Navbtn";
import { useState } from "react";
import bLogo from "../../assets/logo-black.png";
import wLogo from "../../assets/logo-white.png";
import { CgMenuRight } from "react-icons/cg";
import "animate.css";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { url: "/", text: "Home" },
  { url: "/services", text: "Services" },
  { url: "/projects", text: "Projects" },
  { url: "/achievements", text: "Achievements" },
  { url: "/contact", text: "Contact" },
  { url: "/blogs", text: "Blogs" },

];

// eslint-disable-next-line react/prop-types
function Navbar({ theme }) {
  const [isHidden, setIsHidden] = useState(true);
  const { pathname } = useLocation();

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden sm:flex mx-2 sm:mx-6 font-nav justify-between items-center">
        <div className="flex basis-2/5 justify-start">
          {NAV_ITEMS.slice(0, 3).map(({ url, text }) => (
            <Navbtn
              key={url}
              url={url}
              text={text}
              isActive={pathname === url}
            />
          ))}
        </div>

        <Link to="/" className="shrink-0">
          <img
            src={theme === "dark" ? wLogo : bLogo}
            alt="Logo"
            className="w-36 sm:w-32 md:w-40 sm:mt-6 animate__animated animate__fadeIn"
          />
        </Link>

        <div className="flex basis-2/5 justify-end">
          {NAV_ITEMS.slice(3).map(({ url, text }) => (
            <Navbtn
              key={url}
              url={url}
              text={text}
              isActive={pathname === url}
            />
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="flex sm:hidden p-4 items-center justify-between font-bold">
        <Link to="/">
          <img
            src={theme === "dark" ? wLogo : bLogo}
            alt="Logo"
            className="w-32"
          />
        </Link>

        <div className="relative">
          <button
            className="block p-1 text-3xl dark:text-white bg-transparent rounded-md -mt-6.25"
            onClick={handleClick}
          >
            <CgMenuRight />
          </button>

          <div
            className="absolute right-0 w-48 bg-white rounded-md shadow-xl z-10"
            style={{ display: isHidden ? "none" : "block" }}
          >
            {NAV_ITEMS.map(({ url, text }) => (
              <Link
                key={url}
                to={url}
                onClick={() => setIsHidden(true)}
                className={`block px-4 py-1 text-sm rounded hover:bg-gray-300 hover:text-black ${
                  pathname === url
                    ? "text-black font-bold underline"
                    : "text-gray-700"
                }`}
              >
                {text.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
