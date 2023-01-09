import React, {} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

import './App.css';


function App() {


  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Blog />
      <Project />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
