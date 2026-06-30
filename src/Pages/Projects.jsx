/* eslint-disable react/prop-types */
import Projectlist from '../Components/Projects/projlist.json';
import Projitem from '../Components/Projects/Projitem';
import 'animate.css'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Projects({theme}){

    return(
       <>
       <Navbar theme={theme} />
        <div className='mt-12'>
            <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">PROJECTS:</h1>
            <p className="my-2 text-xl text-center text-gray-600 dark:text-gray-300">These are the list of my top favourite projects. Visit my <a href="https://github.com/Sduttt" className="underline">GitHub</a> profile to view all projects.</p>
            <div className="flex flex-wrap px-4 mt-6 justify-center">
                {
                    Projectlist.map((x) => {
                        return(
                            <Projitem key={x.key} tech={x.tech} img={x.img} live={x.live} github={x.github} title={x.title} />
                        )
                    })
                }
            </div>
        </div>
        <Footer theme={theme} />
       </>
    )
}
export default Projects;