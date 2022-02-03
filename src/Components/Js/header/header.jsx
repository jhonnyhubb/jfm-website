import React from 'react';
import Particles from "react-tsparticles";
import '../../css/header.css';
import particlesOptions from "../../Json/particles.json";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"

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
                    <a href="https://github.com/jhonnyhubb" target="_blank" rel="noreferrer"><AiFillGithub size={50} /></a>
                    <a href="https://www.linkedin.com/in/jonas-f%C3%A9lix-5794b4220/" target="blank"><AiFillLinkedin size={50} /></a>
                </div>
            </header>
        </div>
    )
}

export default Header;
        