function Projitem({ title, live, github, img, tech }) {
  return (
    <div className="max-w-xl p-6 rounded-md shadow-md bg-zinc-700 hover:bg-zinc-800 text-gray-50 m-2">
      <img src={img} alt="" className="object-cover object-center w-full rounded-md h-40 sm:h-72 dark:bg-gray-500"/>
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase text-blue-400">
          {tech}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      </div>
      <a href={live} target="_blank" rel="noreferrer">
        {" "}
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-gray-200 hover:bg-gray-200 text-gray-200 font-bold text-xs leading-tight uppercase rounded-full hover:text-gray-900 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Live
        </button>
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        {" "}
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-gray-200 hover:bg-gray-200 text-gray-200 font-bold text-xs leading-tight uppercase rounded-full hover:text-gray-900 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Code
        </button>
      </a>
    </div>
  );
}

export default Projitem;
