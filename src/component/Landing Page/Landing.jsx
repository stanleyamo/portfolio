import React from 'react';
import './Landing.css'
import avatar from '../../assets/avatar.jpg'

const Landing = () => {
    return (
        <div className='hero'>
            <img src={avatar} alt="profile"/>
            <h1><span>I'm Stanley Amo-Brown,</span> software developer based in Ghana.</h1>
            <p>I'm a software developer from Accra</p>

            <div className="hero-action">
                <button
                    className="hero-btn connect-btn"
                    onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                >
                    Connect with me
                </button>

                <a href="/Stanley_AmoBrown_Resume.pdf" download>
                    <button className="hero-btn resume-btn">My Resume</button>
                </a>
            </div>

        </div>
    );
};

export default Landing;