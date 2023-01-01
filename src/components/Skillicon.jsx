
function Skillicon({img, text}){
    return(
        <div className="m-2 sm:m-6 text-slate-700 sm:w-28 sm:h-28">
            <img src={img} alt={text} className="w-12 sm:w-20 sm:hover:w-24" />
            <p className="text-center text-xs mr-6"> {text} </p>
        </div>
    )
}

export default Skillicon;