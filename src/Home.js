import React from 'react';
import { Wave } from 'react-animated-text';

import './Home.css';
export default function Home() {
    return (
        <div id='home'>
            <div className="containerHome">
                <div className='homeIconContainer'>
                    <li className='item telephone' onClick={() => window.open("tel:0759652551")} />
                    <li className='item email' onClick={() => window.open('mailto:niloufer.shaikh11@gmail.com')} />
                    <li className='item github' onClick={() => window.open('https://github.com/NilouferS')} />
                    <li className='item linkedin' onClick={() => window.open('https://www.linkedin.com/in/niloufer-shaikh-476158a9/')} />
                </div>
                <div className='details'>
                    <div className='name'>
                        <Wave 
                            id='ni'
                            text='NILOUFER SHAIKH'
                            // iterations= {4} 
                            effect="stretch"
                            delay={3}
                            effectChange={2} />
                    </div>
                    <div className='detailContent'>
                        <Wave
                            text='London based Full-Stack Software Developer'
                            // iterations= {10}
                            delay={6}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
