import React, {useEffect, useState} from 'react';
import Home from '../Timeline/timeline';

function TimelineScroll() {
    /* hide to show */
    const[activeShow, setActiveShow] = useState(false)

    useEffect(function(){
        function positionScroll(){
            if(window.scrollY > 1150){
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
            <Home action={activeShow}/>
        </div>
    )
}

export default TimelineScroll;