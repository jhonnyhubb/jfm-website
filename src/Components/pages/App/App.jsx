import React from 'react';
import './App.css';
import Header from '../../Js/header/header.jsx';
import TimelineScroll from '../../Js/scroll/timeline';
import Projects from '../../Js/projects/projects'



function App() {

    return (        
        <div className="App">
            <Header />
            <main>
                <div id="about-me">
                    <h2>Hello!</h2>
                    <p>I'm Jonas Félix de Medeiros from Recife-Pe (Brazil)</p>
                    <p>I'm a chemistry student and i love programming, as well as play music and my the biggest vicious is listen new stories</p>
                    <p>Feel free to get in touch or take a look at my past work below</p>
                </div>
            </main>
            <div id="portfolio">            
                <h1>Portfolio</h1>
            </div>
            <main className="portfolio">
                <h2>My projects</h2>
                    <Projects />
                <h2>Timeline</h2>
                    <TimelineScroll />
            </main> 
            <footer>
                <div>
                    <h2>Contact me</h2>
                    <p>Email:<a href="mailto:jonas.medeiros.felix@gmail.com? subject=subject text"> jonas.medeiros.felix@gmail.com</a></p>
                </div>
            </footer>    
                <div>
                    <p className="copyright">&copy; Copyright 2022-current Jonas Félix de Medeiros</p>
                    <a href="https://github.com/jhonnyhubb/jfm-website" target="_blank" rel="noopener noreferrer" className="code">Website Source Code</a>
                </div>       
        </div>
    );
}

export default App;
