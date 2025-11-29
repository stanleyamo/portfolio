import React from 'react';
import './About.css'
import me from '../../assets/me.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src={me} alt="profile"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a software engineer passionate about building clean, efficient, and user-friendly applications. I enjoy solving challenging problems and continuously learning new technologies to create meaningful digital experiences.</p>
                        <p>I love turning ideas into functional applications. With a focus on modern web development, I aim to build projects that are both intuitive and impactful.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/> </div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/> </div>
                        <div className="about-skill"><p>JavaScripts</p><hr style={{width:"50%"}}/> </div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/> </div>
                        <div className="about-skill"><p>Dart</p><hr style={{width:"50%"}}/> </div>
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