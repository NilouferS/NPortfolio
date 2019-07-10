import React from 'react';
import toggleClassName from './ToggleFn'

export default function Header() {
    return (
        <div id='header' onClick={() => toggleClassName('headerCloseIcon', 'active')}>
               <div id="headerCloseIcon" onClick={() => toggleClassName('header', 'active')}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </div>
            <ul className="headerList">
                <li className="headerListItem">Home</li>
                <li className="headerListItem">About</li>
                <li className="headerListItem">Skills</li>
                <li className="headerListItem">Project</li>
                <li className="headerListItem">Contact</li>
            </ul>

        </div>
    );
}

    // const menuIconEl = document.querySelector('.menu-icon');
    // const sidenavEl = document.querySelector('#header');
    // const sidenavCloseEl = document.querySelector('.headerCloseIcon');

    // Add and remove provided class names
    // function toggleClassName(el, className) {
    //   if (el.hasClass(className)) {
    //     el.removeClass(className);
    //   } else {
    //     el.addClass(className);
    //   }
    // }

    // Open the side nav on click
    // menuIconEl.on('click', function() {
    //   toggleClassName(sidenavEl, 'active');
    // });

    // Close the side nav on click
    // sidenavCloseEl.on('click', function() {
    //   toggleClassName(sidenavEl, 'active');
    // });    