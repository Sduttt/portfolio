import Skillicon from "./Skillicon";
import git from './assets/icons8-git-50.svg'
import bootstrap from './assets/icons8-bootstrap-50.svg'
import js from './assets/icons8-javascript-50.svg'
import tailwind from './assets/icons8-tailwindcss-50.svg'
import react from './assets/icons8-react-50.svg'
import nextjs from './assets/icons8-nextjs-144.png'
import nodejs from './assets/node-144.png'
import reactNative from './assets/react-native.png'
import gohighlevel from './assets/highlevel.png'
import sql from './assets/icons8-sql-60.png'
import typescript from './assets/icons8-typescript-240.png'
import loading from './assets/icons8-iphone-spinner.gif'
import expo from './assets/expo.svg'
import express from './assets/express.svg'
import mongodb from './assets/mongodb.svg'
import 'animate.css'


function Skills(){
    return(
        <div className="my-6">
            <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">SKILLS :</h1>
            <div className="flex justify-center flex-wrap mx-2 sm:mx-4 px-2">
             
                <Skillicon img={git} text="Git" />
                <Skillicon img={js} text="JavaScript" />
                <Skillicon img={typescript} text="TypeScript" />
                <Skillicon img={bootstrap} text="Bootstrap" />
                <Skillicon img={tailwind} text="Tailwind CSS" />
                <Skillicon img={react} text="React JS" />
                <Skillicon img={reactNative} text="React Native" />
                <Skillicon img={nextjs} text="Next JS" />
                <Skillicon img={gohighlevel} text="Go High Level" />
                <Skillicon img={nodejs} text="Node.js" />
                <Skillicon img={sql} text="SQL" />
                <Skillicon img={expo} text="Expo" darkInvert />
                <Skillicon img={express} text="Express.js" darkInvert />
                <Skillicon img={mongodb} text="MongoDB" />
                <Skillicon img={loading} text="" />

            </div>
        </div>
        )
}
export default Skills;