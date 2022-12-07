import Projitem from './Projitem';
import {useState} from 'react';
import Delete from './Delete';

function Projects({title, img, live, github}){
  // const count = ;
  const[count, setCount] = useState({count1:false, count2: true, count3: false })
  // const[val, setVal] = useState()

  return(
    <div>
      <div class="flex p-2 w-full justify-center space-x-0 mx-auto">
        <button class="min-w-auto w-32 h-10 bg-transparent px-2 rounded-l-full hover:bg-black border-4 border-black text-black hover:text-white font-semibold  hover:w-48 transition-all duration-200 ease-in-out" onClick={() => {setCount({...count, count1: true, count2: false, count3: false})}}>
          HTML/CSS
        </button>
        <button class="min-w-auto w-32 h-10 bg-transparent px-2 rounded-none hover:bg-black border-y-4 border-black text-black hover:text-white font-semibold  hover:w-48 transition-all duration-200 ease-in-out" onClick={() => {setCount({...count, count1: false, count2: true, count3: false})}} >
          Tailwind
        </button>
        <button class="min-w-auto w-32 h-10 bg-transparent px-2 rounded-r-full hover:bg-black border-4 border-black text-black hover:text-white font-semibold hover:w-48 transition-all duration-200 ease-in-out" onClick={() => {setCount({...count, count1: false, count2: false, count3: true})}}>
          React
        </button>
      </div>
      <Delete  fname= {count.count1 ? "" : "jh"} lname="d" />
      <section className="w-[720px] mx-auto flex flex-wrap bg-gray-200 rounded p-[10px]">
        <div className="mx-auto w-[780px]">
          <Projitem />
        </div>
        <div className=" flex justify-between">
          <Projitem/>
          <Projitem/>
        </div>
      </section>
    </div>
  )
}
export default Projects;