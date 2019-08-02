import React from 'react';
import './About.css';

export default function About() {
    return (
        <div id='about'>
            <h1 className='title'>ABOUT</h1>
            <div className='aboutContainer'>
                <h1 className='aboutItem'>Mission-driven full stack developer with a passion for thoughtful UI design, 
                collaboration, and teaching.</h1><br/>
                <h2>Hi. My name is Niloufer. I am ambitious and enthusiastic software developer based in London.
                 I have experience in working with number of technology in different capacities however I have decided to
              focus on full stack software development. My approach to work is using agile methodology.</h2>
                <h2>My current experience is working with technologies such as React, JavaScript ES6, HTML5, CSS3.</h2><br/>
                <h2>I have a Bacheclor of Computer Engineering degree from Pune University, India (Compared as BA HONS by UK Naraic).
                '''''''''''' These are skills I apply on a daily basis.</h2><br/>
                <h2>I have a wide range of interests in learning new technology, meeting new people and
                '''''''''many events'.</h2><br/> <br/>
                <h2>
                    <strong>Current Focus: </strong>
                    <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> 
                    <a href='https://university.mongodb.com/'> Mongo DB</a>

                </h2>
            </div>

        </div>
    );
}