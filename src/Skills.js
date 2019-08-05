import React from 'react';
import css3 from './images/css3.png';
import github from './images/github.png';
import heroku from './images/heroku.png';
import html5 from './images/html5.png';
import javascript from './images/javascript.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import wordpress from './images/wordpress.png';
import mongoDb from './images/mongo.jpg';
import net from './images/net.png';
import latex from './images/latex.png';
import'./Skills.css' ;

export default function Skills() {
    return (
        <div id='skills'>
            <h1 className='title'>SKILLS</h1>
             <div className='skillContainer'>
                <h2>Front End</h2>
                <div className='skillItem'>
                    <img className='skillIcon' src={css3} alt='a'></img>
                    <img className='skillIcon' src={html5} alt='b'></img>
                    <img className='skillIcon' src={javascript} alt='c'></img>
                    <img className='skillIcon' src={react} alt='d'></img>
               </div>
                <h2>Back End</h2>
                <div className='skillItem'>
                    <img className='skillIcon' src={nodejs} alt='f'></img>
                    <img className='skillIcon' src={mongoDb} alt='j'></img>
                    <img className='skillIcon' src={net} alt='o'></img>
                </div>
                <h2>Others</h2>
                <div className='skillItem'>
                    <img className='skillIcon' src={github} alt='g'></img>
                    <img className='skillIcon' src={latex} alt='z'></img>
                    <img className='skillIcon' src={heroku} alt='h'></img>
                    <img className='skillIcon' src={wordpress} alt='i'></img>
                </div>
            </div> 

        </div>
    );
}