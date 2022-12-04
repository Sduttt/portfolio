
function Button({url, text}){
    return(
        <button className="px-6 py-2" >
            <a href={url} className= ""> {text} </a>
        </button>
    )
}

export default Button;