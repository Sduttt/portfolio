import React, {} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

import './App.css';


function App() {


  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Project />
      <Footer />
    </>

  );
}

export default App;
