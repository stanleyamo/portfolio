import React, { useState, useEffect} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <ul className="nav-menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About Me</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Portfolio</Link></li>
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