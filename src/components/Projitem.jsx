function Projitem({title, live, github, img}){
    return(
        <div className="p-[10px] min-w-[350px]">
          <div className="flex flex-wrap bg-gray-100 sm:py-24 py-16 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block  absolute inset-0" src={img}/>
            <div className="text-center relative z-10 w-full bg-[rgba(250,250,250,0.5)] w-56 mx-auto p-2 ">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2 font-bold"> {title} </h2>
              <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold text-sm hover:text-white py-1 px-2 border border-gray-700 hover:border-transparent rounded mx-2">
                <a href={live} target= "_blank" rel="noreferrer">Live Project</a>
              </button>
              <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold text-sm hover:text-white py-1 px-2 border border-gray-700 hover:border-transparent rounded mx-2">
                <a href={github} target= "_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Projitem;