function Navbtn({text, url}){
    return(
        <a href={url}
        className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
               before:bottom-0 before:left-0 before:bg-black
               before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
               before:transition before:ease-in-out before:duration-300 font-bold mx-1 sm:mx-2 md:mx-4 text-lg sm:text-sm md:text-lg"
     >
        {text}
 </a>
    )
}
export default Navbtn;