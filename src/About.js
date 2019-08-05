import React from 'react';
import './About.css';

export default function About() {
    return (
        <div id='about'>
            <h1 className='title'>ABOUT</h1>
            <div className='aboutContainer'>
                <h1 className='aboutItem'>Mission-driven full stack developer with a passion for thoughtful UI design, 
                collaboration, and teaching.</h1><br/>
                <p>Hi. My name is Niloufer. I am ambitious and enthusiastic software developer based in London.
                 I have experience in working with number of technologies in different capacities however I have decided to
              focus on full stack software development. My approach to work is using agile methodology.</p>
                <p>My current experience is working with technologies such as React, JavaScript ES6, HTML5, CSS3.</p>
                <p>I have a Bachelors degree in Computer Engineering from Pune University, India (Compared as BA HONS by UK Naric).
                As a full stack web developer, I enjoy being very focused and driven at my given tasks. These are few of the many skills
                I apply on a daily basis.</p>
                <p>I have a wide range of interests in learning and keeping myself upgraded with new technologies in the market, 
                    meeting & interacting people and attending creative & productive events'.</p><br/> <br/>
                <p>
                    <strong>Current Focus: </strong>
                    <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks </a>  &
                    <a href='https://university.mongodb.com/'> Mongo DB</a>

                </p>
            </div>

        </div>
    );
}