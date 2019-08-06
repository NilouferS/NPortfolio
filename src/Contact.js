import React from 'react';
import './Contact.css';
export default function Contact() {
    return (
        <div id='contact'>
            <h1 className='title'>CONTACT</h1>
            <ul className='contain'>
                <li className='item telephone' onClick={() => window.open("tel:0759652551")}>
                    <a href="tel:0759652551">(+44) 7596152551 </a></li>
                <li className='item email' onClick={() => window.open('mailto:niloufer.shaikh11@gmail.com')}>
                    <a href='mailto:niloufer.shaikh11@gmail.com'>niloufer.shaikh11@gmail.com </a></li>
                <li className='item github' onClick={() => window.open('https://github.com/NilouferS')}>
                    <a href='https://github.com/NilouferS'>github.com/NilouferS </a></li>
                <li className='item linkedin' onClick={() => window.open('https://www.linkedin.com/in/niloufershaikh/')}>
                    <a href='https://www.linkedin.com/in/niloufershaikh/'>linkedin.com/in/niloufer-shaikh-476158a9/</a></li>
            </ul>
        </div>
    );
}