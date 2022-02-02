import React from 'react';
import '../../css/styles.css';

function Header({action}) {  
    return (
        <header >
            <nav id="menu" className={action ? 'activeColor' : ''}>
                <ul>
                    <li className="name">
                        <a href="#jonas-felix">Jonas Félix</a>
                    </li>
                    <li className="about">
                        <a href="#about-me">About me</a>
                    </li>
                    <li className="about">
                        <a href="#portfolio">Portfolio</a>
                    </li>        
                </ul>
            </nav>                       
        </header>
    );
}

export default Header;