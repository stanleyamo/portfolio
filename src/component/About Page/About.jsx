import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="About">
            <div className="about-about">
                <h1>About me</h1>
                <img src="" alt="theme_pattern"/>
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src="" alt="profile"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>mzhhmm</p>
                        <p>zmmzhmhz</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/> </div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}}/> </div>
                        <div className="about-skill"><p>JavaScripts</p><hr style={{width:"50%"}}/> </div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/> </div>
                    </div>
                </div>
            </div>

            <div className="about-achievement"></div>
        </div>
    );
};

export default About;