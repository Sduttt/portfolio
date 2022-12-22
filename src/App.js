import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projitem from './components/Projitem'
// import Projects from './components/Projects';
// import Projbtn from './components/Projbtn';
import './App.css';

// title, live, github, img

function App() {
  const [count, setCount] = useState(1)

  let myProj;

  if(count === 0){
    myProj = <section className="w-[720px] mx-auto flex flex-wrap bg-gray-200 rounded p-[10px]">
    <div className="mx-auto w-[780px]">
      <Projitem title="SAAS Landing Page" live="https://fsjs-assignment13.netlify.app/" github="https://github.com/Sduttt/project13" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662141656520.jpeg" />
    </div>
    <div className=" flex justify-between">
      <Projitem title="Business Landing Page" live="https://fsjs-assignment12.netlify.app/" github="https://github.com/Sduttt/project12" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662141256659.jpeg" />
      <Projitem title="Thor Hosting" live="https://fsjs-assignment11.netlify.app/" github="https://github.com/Sduttt/project11" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662140357503.jpeg" />
    </div>
  </section>
  }
  else if(count === 1){
    myProj = <section className="w-[720px] mx-auto flex flex-wrap bg-gray-200 rounded p-[10px]">
    <div className="mx-auto w-[780px]">
      <Projitem title="PayTm Clone" live="https://paytm-clone-tailwind-subham.netlify.app/" github="https://github.com/Sduttt/paytm-tailwind" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662207928332.jpeg" />
    </div>
    <div className=" flex justify-between">
      <Projitem title="RØDE Clone" live="https://rode-clone2.netlify.app/" github="https://github.com/Sduttt/rode-clone" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662222265438.jpeg" />
      <Projitem title="Shopify Clone" live="https://shopify-clone-01.netlify.app/" github="https://github.com/Sduttt/shopify-clone" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662225905858.jpeg" />
    </div>
  </section>
  }

  else if (count === 2){
    myProj = <section className="w-[720px] mx-auto flex flex-wrap bg-gray-200 rounded p-[10px]">
    <div className="mx-auto w-[780px]">
      <Projitem title="PayTm Clone" live="https://firstreactapp-subham.netlify.app/" github="https://github.com/Sduttt/developers-portfolio" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821670253986158.jpeg" />
    </div>
    <div className=" flex justify-between">
      <Projitem title="RØDE Clone" live="https://rode-clone2.netlify.app/" github="https://github.com/Sduttt/rode-clone" img="#" />
      <Projitem title="Shopify Clone" live="https://shopify-clone-01.netlify.app/" github="https://github.com/Sduttt/shopify-clone" img="#" />
    </div>
  </section>
  }

  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      
      {/* buttons */}
      <div className="flex bg-gray-100 p-2 w-full justify-center space-x-0 mx-auto">
        <button className="min-w-auto w-32 h-10 bg-transparent px-2 rounded-l-full hover:bg-black border-4 border-black text-black hover:text-white font-semibold  hover:w-48 transition-all duration-200 ease-in-out" onClick= {() => setCount(0)}>
          HTML/CSS
        </button>
        <button className="min-w-auto w-32 h-10 bg-transparent px-2 rounded-none hover:bg-black border-y-4 border-black text-black hover:text-white font-semibold  hover:w-48 transition-all duration-200 ease-in-out" onClick= {() => setCount(1)}>
          Tailwind
        </button>
        <button className="min-w-auto w-32 h-10 bg-transparent px-2 rounded-r-full hover:bg-black border-4 border-black text-black hover:text-white font-semibold hover:w-48 transition-all duration-200 ease-in-out" onClick= {() => setCount(2)}>
          React
        </button>
      </div>
      
      {/* Projects */}

      {myProj}

      {/* <section className="w-[720px] mx-auto flex flex-wrap bg-gray-200 rounded p-[10px]">
        <div className="mx-auto w-[780px]">
          <Projitem />
        </div>
        <div className=" flex justify-between">
          <Projitem/>
          <Projitem/>
        </div>
      </section> */}
    </>

  );
}

export default App;
