/* eslint-disable react/prop-types */
import 'animate.css'

function Projitem({ title, live, github, img, tech }) {
  return (
    <div className="w-full max-w-xs sm:w-80 md:w-96 h-80 m-2 rounded-md shadow-md bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-800 dark:text-gray-50 text-gray-800 animate__animated animate__flipInY flex flex-col overflow-hidden">
      <div className="h-48 sm:h-52 w-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
        <img src={img} alt="" className="object-contain w-full h-full p-3"/>
      </div>
      <div className="p-3 flex flex-col">
        <span className="block text-xs font-medium tracking-widest uppercase text-blue-400">
          {tech}
        </span>
        <h2 className="text-base sm:text-lg font-semibold tracking-wide line-clamp-2">{title}</h2>
        <div className="mt-1 flex gap-2">
          <a href={live} target="_blank" rel="noreferrer" className="inline-block">
            <button
              type="button"
              className="px-3 py-1 border-2 dark:border-gray-200 border-gray-800 dark:hover:bg-gray-200 hover:bg-gray-800 dark:text-gray-200 font-bold text-xs leading-tight uppercase rounded-full dark:hover:text-gray-900 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor-pointer">
              Live
            </button>
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="inline-block">
            <button
              type="button"
              className="px-3 py-1 border-2 dark:border-gray-200 border-gray-800 dark:hover:bg-gray-200 hover:bg-gray-800 dark:text-gray-200 font-bold text-xs leading-tight uppercase rounded-full dark:hover:text-gray-900 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor-pointer">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projitem;
