import React, { useState, useEffect} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.svg';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div className="navbar">
            <img src="" alt="logo"/>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
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