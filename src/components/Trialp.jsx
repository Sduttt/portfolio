// import Projbtn from "./Projbtn";

function Trialp({title, img, live, github}){
    return(
        <div className="">
            <h1 className="text-center font-zen text-3xl bold" id="project">TOP PROJECTS :</h1>
            {/* <Projbtn/> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-2/3 mx-auto">
                      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={img}/>
                        <div className="text-center relative z-10 w-full">
                          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2"> {title} </h2>
                          <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold text-sm hover:text-white py-1 px-2 border border-gray-700 hover:border-transparent rounded mx-2">
                            <a href={live}>Live Project</a>
                          </button>
                          <button class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold text-sm hover:text-white py-1 px-2 border border-gray-700 hover:border-transparent rounded mx-2">
                            <a href={github}>Code</a>
                          </button>

                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
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
                        <div className="px-2 w-1/2">
                          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
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
                      </div>
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default Trialp;