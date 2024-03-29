import 'animate.css'
// eslint-disable-next-line react/prop-types
function Skillicon({img, text}){
    return(
        <div className="my-2 sm:my-4 md:my-6 text-slate-700 dark:text-slate-100 sm:w-22 md:w-28 sm:h-28 mx-1 animate__animated animate__fadeInBottomLeft">
            <img src={img} alt={text} className="w-12 md:w-20 md:hover:w-24" />
            <p className="text-center text-xs mr-6"> {text} </p>
        </div>
    )
}

export default Skillicon;