import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Skills from "../Components/Skills/Skills";

// eslint-disable-next-line react/prop-types
const Home = ({theme}) => {

    return(
        <>
            <Navbar theme={theme} url1={"/blogs"} text1={"blogs"} url2={"/projects"} text2={"projects"} url3={"/achievements"} text3={"achievements"} url4={"/contact"} text4={"contact"} />
            <About />
            <Skills />
            <Footer theme={theme} />
        </>
    )
}

export default Home;