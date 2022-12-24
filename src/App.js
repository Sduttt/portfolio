import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projitem from './components/Projitem'

import './App.css';


function App() {
  const [count, setCount] = useState(1)

  let myProj,projHead;
  let classes0, classes1, classes2;


  if(count === 0){
    myProj = <section className="w-[1000px]  mx-auto flex flex-wrap rounded p-[15px] h-[650px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
    <div className="mx-auto w-[950px] hover:w-[1000px]">
      <Projitem title="SAAS Landing Page" live="https://fsjs-assignment13.netlify.app/" github="https://github.com/Sduttt/project13" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662141656520.jpeg" />
    </div>
    <div className=" flex justify-center w-[1000px]">
      <Projitem title="Business Landing Page" live="https://fsjs-assignment12.netlify.app/" github="https://github.com/Sduttt/project12" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662141256659.jpeg" />
      <Projitem title="Thor Hosting" live="https://fsjs-assignment11.netlify.app/" github="https://github.com/Sduttt/project11" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662140357503.jpeg" />
    </div>
  </section>;
  projHead = <span className='italic text-gray-700 border-b-4 py-0 border-gray-700'>HTML/CSS</span>;
  classes0 = "min-w-auto h-10 px-2 rounded-none bg-black border-y-4 rounded-l-full border-black text-white font-semibold w-48 transition-all duration-200 ease-in-out"
  classes1 = "min-w-auto w-32 h-10 bg-transparent px-2 rounded-none border-y-4 border-black text-black font-semibold transition-all duration-200 ease-in-out";
  classes2 = "min-w-auto w-32 h-10 bg-transparent px-2 rounded-r-full border-4 border-black text-black font-semibold transition-all duration-200 ease-in-out";
  }


  else if(count === 1){
    myProj = <section className="w-[1000px]  mx-auto flex flex-wrap rounded p-[15px] h-[650px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
    <div className="mx-auto w-[950px] hover:w-[1000px] ">
      <Projitem title="PayTm Clone" live="https://paytm-clone-tailwind-subham.netlify.app/" github="https://github.com/Sduttt/paytm-tailwind" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662207928332.jpeg" />
    </div>
    <div className=" flex justify-center w-[1000px]">
      <Projitem title="RØDE Clone" live="https://rode-clone2.netlify.app/" github="https://github.com/Sduttt/rode-clone" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662222265438.jpeg" />
      <Projitem title="Shopify Clone" live="https://shopify-clone-01.netlify.app/" github="https://github.com/Sduttt/shopify-clone" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821662225905858.jpeg" />
    </div>
  </section>;
  projHead = <span className='italic border-b-4 py-0 text-[#38bdf8] border-[#38bdf8]'> Tailwind CSS</span>;
  classes0 = "min-w-auto w-32 h-10 bg-transparent px-2 rounded-none border-y-4 border-black text-black font-semibold transition-all duration-200 ease-in-out rounded-l-full border-4";
  classes1 = "min-w-auto h-10 px-2 rounded-none bg-black border-y-4 border-black text-white font-semibold w-48 transition-all duration-200 ease-in-out";
  classes2 = "min-w-auto w-32 h-10 bg-transparent px-2 rounded-r-full border-4 border-black text-black font-semibold transition-all duration-200 ease-in-out";
  }


  else if (count === 2){
    myProj = <section className="w-[1000px]  mx-auto flex flex-wrap rounded p-[15px] h-[650px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
    <div className="mx-auto w-[950px] hover:w-[1000px]">
      <Projitem title="PayTm Clone" live="https://firstreactapp-subham.netlify.app/" github="https://github.com/Sduttt/developers-portfolio" img="https://findcoder.fra1.digitaloceanspaces.com/62e4c46d4e5c787df69bef82/projects/62e4c46d4e5c787df69bef821670253986158.jpeg" />
    </div>
    <div className=" flex justify-center w-[1000px]">
      <Projitem title="RØDE Clone" live="https://rode-clone2.netlify.app/" github="https://github.com/Sduttt/rode-clone" img="#" />
      <Projitem title="Shopify Clone" live="https://shopify-clone-01.netlify.app/" github="https://github.com/Sduttt/shopify-clone" img="#" />
    </div>
  </section>;
  projHead = <span className='italic border-b-4 py-0 text-[#61DAFB] border-[#61DAFB]'>React</span>;
  classes0 = "min-w-auto w-32 h-10 bg-transparent px-2 rounded-none border-y-4 border-black text-black font-semibold transition-all duration-200 ease-in-out rounded-l-full border-4";
  classes1 = "min-w-auto w-32 h-10 bg-transparent px-2 rounded-none border-y-4 border-black text-black font-semibold transition-all duration-200 ease-in-out";
  classes2 = "min-w-auto h-10 px-2 rounded-r-full bg-black border-4 border-black text-white font-semibold w-48 transition-all duration-200 ease-in-out"
  }

  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      
      {/* buttons */}
      <div className="flex bg-gray-100 p-2 w-full justify-center space-x-0 mx-auto mb-12">
        <button className={classes0} onClick= {() => setCount(0)}>
          HTML/CSS
        </button>
        <button className={classes1} onClick= {() => setCount(1)}>
          Tailwind
        </button>
        <button className={classes2} onClick= {() => setCount(2)}>
          React
        </button>
      </div>
      
      {/* Projects */}
      <h2 className='text-center font-bold text-xl mb-10'>Top 3 {projHead} Projexts: </h2>
      {myProj}

      
    </>

  );
}

export default App;
