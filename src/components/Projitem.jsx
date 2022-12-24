function Projitem({title, live, github, img}){
    return(
        <div className="p-[10px] min-w-[470px] hover:min-w-[480px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <div className="flex flex-wrap bg-gray-100 sm:py-24 py-16 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block  absolute inset-0" src={img}/>
            <div className="text-center relative z-10 w-full bg-[rgba(200,200,200,0.8)] w-56 mx-auto p-2 ">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2 font-extrabold text-[#000000]"> {title} </h2>
              <button class="bg-transparent hover:bg-[#000000] text-[#000000] font-semibold text-sm hover:text-white py-1 px-2 border border-[#000000] hover:border-transparent rounded mx-2">
                <a href={live} target= "_blank" rel="noreferrer">View</a>
              </button>
              <button class="bg-transparent hover:bg-[#000000] text-[#000000] font-semibold text-sm hover:text-white py-1 px-2 border border-[#000000] hover:border-transparent rounded mx-2">
                <a href={github} target= "_blank" rel="noreferrer">Code</a>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Projitem;