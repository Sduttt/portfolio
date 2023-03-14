import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Achievements from "./components/Achievements/Achivements";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-full w-full bg-[#f5f5f5] dark:bg-[#343B3E]">
      <Navbar theme={theme} />
      <About />
      <Skills />
      <Blog />
      <Project />
      <Achievements />
      <Contact />
      <Footer theme={theme} />
      <div
        className="z-[100] fixed left-[0] bottom-[5%] bg-zinc-500 rounded-r-full p-1
    border-top-right-radius:50% border-bottom-right-radius:50%; ">
        {" "}
        <div
          className="text-3xl font-bold bg-zinc-200 dark:bg-gray-900 p-2 ml-2 rounded-full cursor-pointer dark:text-white text-black"
          onClick={switchTheme}>
          {theme !== "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
