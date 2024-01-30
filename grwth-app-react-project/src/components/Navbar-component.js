import React, { useState } from 'react';
import logo from '../images/logo.png'; // Adjust the path as necessary

export function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="/home"> <img src={logo} alt="logo" /> </a>
                </div>
                <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}  >
                    {/* Icon for hamburger menu (three horizontal lines) */}
                    <i className="fas fa-bars"></i>
                </button>
                <div className={`main-menu ${isNavExpanded ? 'active' : ''}`}>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/login"><i className="fas fa-user"></i> Log in</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
