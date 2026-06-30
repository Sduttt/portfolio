import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Skills from "../Components/Skills/Skills";
import Timeline from "../Components/Experiences/Timeline";

const Home = ({theme}) => {

    return(
        <>
            <Navbar theme={theme} />
            <About />
            <Skills />
            <Timeline />
            <Footer theme={theme} />
        </>
    )
}

export default Home;