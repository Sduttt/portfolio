import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Projbtn from './components/Projbtn';
import './App.css';

function App() {


  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects {(count) => {count.count3 ? className = "bg-black" : className = "bg-gray"}} />
      
    </>

  );
}

export default App;
