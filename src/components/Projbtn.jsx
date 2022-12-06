function Projbtn(){
    return(
        <div class="flex bg-gray-100 p-2 w-full justify-center space-x-0 w-96">
        <button class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
          HTML/CSS
        </button>
        <button class="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
          Tailwind
        </button>
        <button class="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
          React
        </button>
      </div>
    )
}
export default Projbtn;