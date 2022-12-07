function Projitem({title, live, github, img}){
    return(
        <div className="p-[10px] min-w-[350px]">
          <div className="flex flex-wrap bg-gray-100 sm:py-24 py-16 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={img}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2"> {title} </h2>
              <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold text-sm hover:text-white py-1 px-2 border border-gray-700 hover:border-transparent rounded mx-2">
                <a href={live}>Live Project</a>
              </button>
              <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold text-sm hover:text-white py-1 px-2 border border-gray-700 hover:border-transparent rounded mx-2">
                <a href={github}>Code</a>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Projitem;