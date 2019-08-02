import React from 'react';
import { Wave } from 'react-animated-text';

import './Home.css';
export default function Home() {
    return (
        <div id='home'>
            <div class="containerHome">
                <div className='homeIconContainer'>
                    <li className='item telephone'>
                        <a className='iconHome' href="tel:0759652551" target="_blank" rel="noopener noreferrer">
                            i</a>
                    </li>
                    <li className='item email'>
                        <a className='iconHome' href='mailto:niloufer.shaikh11@gmail.com'target="_blank" rel="noopener noreferrer">
                            i</a>
                    </li>
                    <li className='item github'>
                        <a className='iconHome' href='https://github.com/NilouferS'target="_blank" rel="noopener noreferrer">
                            i</a>
                    </li>
                    <li className='item linkedin'>
                        <a className='iconHome' href='https://www.linkedin.com/in/niloufer-shaikh-476158a9/'target="_blank" rel="noopener noreferrer">
                            i</a>
                    </li>
                </div>
                <div>
                    <Wave
                        text= 'NILOUFER SHAIKH'
                        // iterations= {4} 
                        effect="stretch"
                        delay= {3}
                        effectChange={2}/>
                </div>
                <div>
                    <Wave 
                        text= 'London based Full-Stack Software Developer'
                        // iterations= {10}
                        delay={6}
                    />
                </div> 
            </div>
        </div>
    );
}
