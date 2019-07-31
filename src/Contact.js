import React from 'react';
import './Contact.css';
export default function Contact() {
    return (
        <div id='contact'>
            <h1 className='title'>CONTACT</h1>
            {/* <h2>Get in touch for further information</h2> */}
            <ul className='contain'>
                <li className='item telephone'><a href="tel:0759652551"> telephone </a></li>
                <li className='item email'><a href = 'mailto:niloufer.shaikh11@gmail.com'>niloufer.shaikh11@gmail.com  </a></li>
                <li className='item github'><a href = 'https://github.com/NilouferS'> </a></li>
                <li className='item linkedin'><a href = 'https://www.linkedin.com/in/niloufer-shaikh-476158a9/'>rgegr</a></li>
            </ul>
            
        </div>



   );
}