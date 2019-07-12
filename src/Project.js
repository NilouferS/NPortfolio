import React from 'react';
import './Project.css';
import kodflix from './images/kodflix.png';
export default function Project() {
    return (
        <div id='project'>
            <h1 className='title'>PROJECTS</h1>
            <div className='projectContainer'>
                <div className='projectItem' >
                    <img className='projectImg' onClick ={() => window.open('https://kodflix-niloufer-shaikh.herokuapp.com/')} src={kodflix}/>
                    <a className='projectLink'href='https://github.com/NilouferS/kodflix'  target="_blank" >KODFLIX</a>
                </div>
                <div className='projectItem' onClick ={() => window.open('https://kodflix-niloufer-shaikh.herokuapp.com/') }>
                    <img className='projectImg' src={kodflix}/>
                    <a href='https://github.com/NilouferS/kodflix'>Calculator</a>
                </div>
                <div className='projectItem' onClick ={() => window.open('https://kodflix-niloufer-shaikh.herokuapp.com/') }>
                    <img className='projectImg' src={kodflix}/>
                    <a href='https://github.com/NilouferS/kodflix'>FLAT PACK</a>
                </div>
            </div>
        </div>
    );
}