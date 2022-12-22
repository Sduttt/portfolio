import Projitem from './Projitem';
import {useState} from 'react';
import Delete from './Delete';

function Projects(props){

  const[count, setCount] = useState({count1:false, count2: true, count3: false })


  return(
      <section className="w-[720px] mx-auto flex flex-wrap bg-gray-200 rounded p-[10px]">
        <div className="mx-auto w-[780px]">
          <Projitem />
        </div>
        <div className=" flex justify-between">
          <Projitem/>
          <Projitem/>
        </div>
      </section>
  )
}
export default Projects;