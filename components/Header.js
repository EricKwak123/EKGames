import React from 'react';
import './Header.css'; // Add the CSS file for the component styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="index.html">
            <img src="img/logo.jpg" alt="Logo" style={{ width: '50px', height: '50px' }} />
          </a>
        </div>
        <nav className="header-nav">
          <a href="games.html">Games</a>
          <a href="about.html">About Us</a>
          <a href="work.html">Work with Us</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <a href="sign-in.html" className="sign-in-button">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
