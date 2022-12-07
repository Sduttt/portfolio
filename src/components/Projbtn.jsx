function Projbtn(){
    return(
      <div class="flex bg-gray-100 p-2 w-full justify-center space-x-0 mx-auto">
        <button class="min-w-auto w-32 h-10 bg-transparent px-2 rounded-l-full hover:bg-black border-4 border-black text-black hover:text-white font-semibold  hover:w-48 transition-all duration-200 ease-in-out">
          HTML/CSS
        </button>
        <button class="min-w-auto w-32 h-10 bg-transparent px-2 rounded-none hover:bg-black border-y-4 border-black text-black hover:text-white font-semibold  hover:w-48 transition-all duration-200 ease-in-out">
          Tailwind
        </button>
        <button class="min-w-auto w-32 h-10 bg-transparent px-2 rounded-r-full hover:bg-black border-4 border-black text-black hover:text-white font-semibold hover:w-48 transition-all duration-200 ease-in-out">
          React
        </button>
      </div>
    )
}
export default Projbtn;