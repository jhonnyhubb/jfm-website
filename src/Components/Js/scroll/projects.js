import React, {useEffect, useState} from 'react';
import Projects from '../projects/projects'

function ProjectsScroll() {
    /* hide to show */
    const[activeShow, setActiveShow] = useState(false)

    useEffect(function(){
        function positionScroll(){
            if(window.scrollY > 800){
                setActiveShow(true)
            } else {
                setActiveShow(false)
            }
        }
        window.addEventListener('scroll', positionScroll)
    }, [])
    /* hide to show */
    return (
        <div>
            <Projects action={activeShow}/>
        </div>
    )
}

export default ProjectsScroll;