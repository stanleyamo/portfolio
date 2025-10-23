import React, { useState, useEffect} from 'react';
import Switch from "react-switch";
import './Navbar.css'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

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