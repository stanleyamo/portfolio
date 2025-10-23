import React from 'react';
import './About.css'
import random from '../../assets/random.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src="" alt="theme_pattern"/>
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src={random} alt="profile"/>
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

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;