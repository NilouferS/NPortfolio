import React from  'react';
import self from './images/self.jpg';
import './Home.css';
export default function Home() {
    return (
        <div id='home'>
            <img id='image' src={self} alt={self}></img>
        </div>
        
    );
}