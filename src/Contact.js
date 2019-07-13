import React from 'react';
import './Contact.css';
export default function Contact() {
    return (
        <div id='contact'>
            <h1 className='title'>CONTACT</h1>
            <ul className='contain'>
                <li className='item telephone'><a href="tel:0759652551">(+44) 7596152551  </a></li>
                <li className='item email'><a href = 'mailto:niloufer.shaikh11@gmail.com'>niloufer.shaikh11@gmail.com  </a></li>
                <li className='item github'><a href = 'https://github.com/NilouferS'>github.com/NilouferS </a></li>
                <li className='item linkedin'><a href = 'https://www.linkedin.com/in/username'>linkedin.com/in/username</a></li>
            </ul>
            
        </div>



   );
}