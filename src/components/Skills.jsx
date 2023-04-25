import Skillicon from "./Skillicon";
import html from './assets/icons8-html-5-50.svg'
import CSS from './assets/icons8-css3-50.svg'
import git from './assets/icons8-git-50.svg'
import bootstrap from './assets/icons8-bootstrap-50.svg'
import js from './assets/icons8-javascript-50.svg'
import tailwind from './assets/icons8-tailwindcss-50.svg'
import react from './assets/icons8-react-50.svg'
import firebase from './assets/icons8-firebase-240.png'
import nodejs from './assets/node-144.png'
import expressjs from './assets/express-250.png'
import mongodb from './assets/mongo-96.png'
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
                <Skillicon img={bootstrap} text="Bootstrap" />
                <Skillicon img={tailwind} text="Tailwind CSS" />
                <Skillicon img={react} text="React" />
                <Skillicon img={firebase} text="Firebase" />
                <Skillicon img={nodejs} text="Node.js" />
                <Skillicon img={expressjs} text="Express.js" />
                <Skillicon img={mongodb} text="Mongo DB" />
                <Skillicon img={loading} text="Loading..." />

            </div>
        </div>
        )
}
export default Skills;