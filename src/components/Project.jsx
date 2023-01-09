import React from "react";
import Projectlist from './assets/projlist.json';
import Projitem from './Projitem'

function Project(){
    // console.log(Projectlist)

    return(
        <div id="project">
            <h1 className="text-center font-zen text-3xl bold">PROJECTS:</h1>
            <div className="flex flex-wrap m-2 justify-center">
                {
                    Projectlist.map((x) => {
                        return(
                            <Projitem key={x.key} tech={x.tech} img={x.img} live={x.live} github={x.github} title={x.title} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Project;