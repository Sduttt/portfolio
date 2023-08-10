import Skillicon from "./Skillicon";
import html from './assets/icons8-html-5-50.svg'
import CSS from './assets/icons8-css3-50.svg'
import git from './assets/icons8-git-50.svg'
import bootstrap from './assets/icons8-bootstrap-50.svg'
import js from './assets/icons8-javascript-50.svg'
import tailwind from './assets/icons8-tailwindcss-50.svg'
import react from './assets/icons8-react-50.svg'
import nextjs from './assets/icons8-nextjs-144.png'
import nodejs from './assets/node-144.png'
import expressjs from './assets/express-250.png'
import mongodb from './assets/mongo-96.png'
import java from './assets/icons8-java-240.png'
import typescript from './assets/icons8-typescript-240.png'
import loading from './assets/icons8-iphone-spinner.gif'
import 'animate.css'


function Skills(){
    return(
        <div className="my-6">
            <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">SKILLS :</h1>
            <div className="flex justify-center flex-wrap  mx-4">
                <Skillicon img={html} text="HTML" />
                <Skillicon img={CSS} text="CSS" />
                <Skillicon img={git} text="Git" />
                <Skillicon img={js} text="JavaScript" />
                <Skillicon img={typescript} text="TypeScript" />
                <Skillicon img={bootstrap} text="Bootstrap" />
                <Skillicon img={tailwind} text="Tailwind CSS" />
                <Skillicon img={react} text="React JS" />
                <Skillicon img={nextjs} text="Next JS" />
                <Skillicon img={nodejs} text="Node.js" />
                <Skillicon img={expressjs} text="Express.js" />
                <Skillicon img={mongodb} text="Mongo DB" />
                <Skillicon img={java} text="Java" />
                <Skillicon img={loading} text="" />

            </div>
        </div>
        )
}
export default Skills;