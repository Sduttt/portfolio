import Navbtn from "./Navbtn";
import React,{useState} from "react";
import Logo from "./assets/logo-black.png";

function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden)
  }
  return (
    <>
      <nav className="hidden sm:flex mx-2 sm:mx-16 font-nav flex justify-between sm:my-[-20px]">
        <button>
          <Navbtn url="#blog" text="BLOG" />
          <Navbtn url="#project" text="PROJECTS" />
        </button>
        <img src={Logo} alt="Logo" className="w-40" />
        <button>
          <Navbtn url="#contact" text="CONTACT ME" />
          <Navbtn
            url="https://www.canva.com/design/DAFNyTHsrxM/ALKIElHB_CxCWcaAdPN-Aw/view?utm_content=DAFNyTHsrxM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            text="RESUME"
          />
        </button>
      </nav>
      <nav className="flex sm:hidden p-4 flex items-center justify-between font-bold">
      <img src={Logo} alt="Logo" className="w-32" />

        <div className="relative">
          {/* <!-- Dropdown toggle button --> */}
          <button className="block p-2 bg-transparent bg-gray-100 rounded-md mt-[-25px]" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          {/* <!-- Dropdown List --> */}
          <div className="absolute right-0 w-48 bg-white bg-gray-100 rounded-md shadow-xl" style={{display: isHidden ? "none" : "block"}}>
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
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
