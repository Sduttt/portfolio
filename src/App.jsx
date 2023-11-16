import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";


//pages
import Home from './Pages/Home'
import Blogs from './Pages/Blogs';
import Projects from './Pages/Projects';
import Achievements from './Pages/Achievements';
import Contact from './Pages/Contact';
import Private from './Pages/Private';
import Error from './Pages/Error';

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
    <div className="min-h-screen w-full bg-[#f5f5f5] dark:bg-[#343B3E]">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home theme={theme} switchTheme={switchTheme} />} />
          <Route path='/blogs' element={<Blogs theme={theme} />} />
          <Route path='/projects' element={<Projects theme={theme} />} />
          <Route path='/achievements' element={<Achievements theme={theme} />} />
          <Route path='/contact' element={<Contact theme={theme} />} />
          <Route path='/private' element={<Private theme={theme} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

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
  )
}

export default App
