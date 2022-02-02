import React from 'react';
import Particles from "react-tsparticles";
import '../../css/header.css';
import particlesOptions from "../../Json/particles.json";

function Header() {

    return (        
        <div id="jonas-felix">
            <Particles options={particlesOptions}/>      
            
            <header className="App-header">
                <div>
                    <img alt="profile" className="profile-picture" src={require ("../../../Img/profile.jpg")}/>
                </div>
                <h1>
                    Jonas Félix
                </h1>
                <p>
                    Student, Developer & musician
                </p>
                <div className="icons">
                    <a href="https://github.com/jhonnyhubb" target="_blank" rel="noreferrer"><img src="https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg" alt="github" width="50" height="50" /></a>
                    <a href="https://www.linkedin.com/in/jonas-f%C3%A9lix-5794b4220/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="JonasFélix" height="40" width="50" /></a>
                </div>
            </header>
        </div>
    )
}

export default Header;
        