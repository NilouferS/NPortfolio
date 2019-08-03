import React from 'react';
import './Project.css';
import kodflix from './images/kodflix.png';
import flat from './images/flat.png';
import indi from './images/indi.png';

export default function Project() {
    return (
        <div id='project'>
            <h1 className='title'>PROJECTS</h1>
            <div id='projectContainer'>
                <div className='projectItem' >
                    <img 
                        className='projectImg'  
                        src={kodflix}
                        alt='kodflix' 
                        onClick ={() => window.open('https://kodflix-niloufer-shaikh.herokuapp.com/')} 
                        title='click to view' 
                    />
                    <a className='projectLink'href='https://github.com/NilouferS/kodflix'  target='_blank' rel="noopener noreferrer">KODFLIX</a>
                </div>
                <div className='projectItem'>
                    <img 
                        className='projectImg' 
                        src={flat}  
                        alt='flat-pack'
                        onClick ={() => window.open('https://flat-pack-forum.herokuapp.com/')}
                        title='click to view'
                    />
                    <a  className='projectLink' href='https://github.com/NilouferS/flat-pack-forum' target='_blank' rel="noopener noreferrer">FLAT-PACK</a>
                </div>
                <div className='projectItem'>
                    <img 
                        className='projectImg' 
                        src={indi} 
                        alt='indifood'
                        onClick ={() => window.open('http://indifoodstore.com') }
                        title='Click to view'
                    />
                    <a  className='projectLink' href='https://github.com/NilouferS/kodflix'>IndiFoodStore</a>
                </div>
            </div>   
        </div>
    );
}

