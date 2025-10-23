import React, { useState, useEffect} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <ul className="nav-menu">
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div>
                <a href="#" className="nav-connect">
                    Connect With Me
                </a>

                <button
                    className="dark-mode-btn"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </div>
    );
};

export default Navbar;