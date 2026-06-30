import 'animate.css'
// eslint-disable-next-line react/prop-types
function Skillicon({ img, text, darkInvert }) {
    return (
        <div className="flex flex-col items-center justify-start w-20 my-6 mx-4 text-slate-700 dark:text-slate-100 animate__animated animate__fadeInBottomLeft">
            <div className="w-14 h-14 flex items-center justify-center">
                <img
                    src={img}
                    alt={text}
                    className={`w-14 h-14 object-contain transition-transform duration-200 hover:scale-110${darkInvert ? ' dark:invert' : ''}`}
                />
            </div>
            <p className="text-center text-xs mt-2 leading-tight w-full">{text}</p>
        </div>
    )
}

export default Skillicon;