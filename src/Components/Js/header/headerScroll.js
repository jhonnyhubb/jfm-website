import React, {useEffect, useState} from 'react';
import Header from './header';

function HeaderScroll() {
    /* change color */
    const[activeColor, setActiveColor] = useState(false)

    useEffect(function(){
        function positionScroll(){
            if(window.scrollY > 40){
                setActiveColor(true)
            } else {
                setActiveColor(false)
            }
        }
        window.addEventListener('scroll', positionScroll)
    }, [])
    /* change color */
    return (
        <div>
            <Header action={activeColor}/>
        </div>
    )
}

export default HeaderScroll;