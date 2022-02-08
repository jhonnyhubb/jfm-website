import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './projects.css'

const dogKennel = require('../../../Img/dogKennel.jpg');
const pokedex = require('../../../Img/pokedex.png')


//image inside the className card
export default function projects({action}) {
    return (
        <div className={action ? 'card-group activeShow' : 'card-group hide'}>
            <div className="card">
            <img className="card-img-top" src={dogKennel} alt="dogKennel"/>
                <div className="card-body">
                    <h5 className="card-title">DogKennel</h5>
                    <p className="card-text">this website i practice my knowledge about javascript, css and html</p>
                    <a href="https://jhonnyhubb.github.io/DogKennel/" target="_blank" rel="noreferrer" className="card-text text-uppercase">visit website<small className="text-muted"></small></a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={pokedex} alt="pokedex"/>
                <div className="card-body">
                    <h5 className="card-title">Pokedex</h5>
                    <p className="card-text">In this project i connect the FrontEnd with a external API.</p>
                    <a href="https://jfm-pokedex.netlify.app" target="_blank" rel="noreferrer" className="card-text text-uppercase">visit website<small className="text-muted"></small></a>
                </div>
            </div>
            <div className="card project3">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <a href="https://jhonnyhubb.github.io/DogKennel/" target="_blank" rel="noreferrer" className="card-text text-uppercase">visit website<small className="text-muted"></small></a>
                </div>
            </div>
        </div>
    );
  }