import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="" alt="logo"/>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

            <div>
                <a href="#" className="nav-connect">
                    Connect With Me
                </a>
            </div>

        </div>
    );
};

export default Navbar;