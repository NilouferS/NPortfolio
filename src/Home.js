import React from 'react';

import './Home.css';
export default function Home() {
    return (
        <div id='home'>
            <div class="containerHome">
                <div className='containHome'>
                    <li className='item telephone'><a href="tel:0759652551">a</a></li>
                    <li className='item email'><a href='mailto:niloufer.shaikh11@gmail.com'>b</a></li>
                    <li className='item github'><a href='https://github.com/NilouferS'>c</a></li>
                    <li className='item linkedin'><a href='https://www.linkedin.com/in/niloufer-shaikh-476158a9/'>d</a></li>
                </div>

                <div class="animate item">
                    <span>I</span><span></span><span>a</span><span>m</span><br />
                    <span></span><span>I</span><span>L</span><span>O</span><span>U</span><span>F</span><span>E</span><span>R</span><span>.</span><span>.</span>
                </div>
            </div>
        </div>
    );
}

