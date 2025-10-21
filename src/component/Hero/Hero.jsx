import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <img src="" alt="profile"/>
            <h1>I'm Stanley Amo-Brown, software engineer based in Ghana.</h1>
            <p>I'm a software engineer from Accra</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    );
};

export default Hero;