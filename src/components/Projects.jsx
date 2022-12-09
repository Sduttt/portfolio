import Projitem from './Projitem';
import {useState} from 'react';
import Delete from './Delete';

function Projects(props){
  // const count = ;
  const[count, setCount] = useState({count1:false, count2: true, count3: false })

  // const[val, setVal] = useState()

// hover:bg-black; hover:text-white  w-48 transition-all duration-200 ease-in-out

  return(
    <div>
      <div className="flex p-2 w-full justify-center space-x-0 mx-auto">
        {/* <button className="min-w-auto w-32 h-10 bg-transparent px-2 rounded-l-full border-4 border-black text-black font-semibold   " onClick={() => {setCount({...count, count1: true, count2: false, count3: false})}}>
          HTML/CSS
        </button>
        <button className="min-w-auto w-32 h-10 bg-transparent px-2 rounded-none border-y-4 border-black text-black font-semibold   " onClick={() => {setCount({...count, count1: false, count2: true, count3: false})}} >
          Tailwind
        </button>
        <button className="min-w-auto w-32 h-10 bg-transparent px-2 rounded-r-full border-4 border-black text-black font-semibold   " onClick={() => {setCount({...count, count1: false, count2: false, count3: true})}}>
          React
        </button> */}
        <button className={props.className} onClick={() => {setCount({...count, count1: false, count2: false, count3: true}, props.sendData(count))}}>
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