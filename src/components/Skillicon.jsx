
function Skillicon({img, text}){
    return(
        <div className="m-6 text-slate-700  w-28 h-28">
            <img src={img} alt={text} className="w-20 hover:w-24" />
            <p className="text-center text-xs mr-6"> {text} </p>
        </div>
    )
}

export default Skillicon;