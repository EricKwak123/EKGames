// HomePage.js
import React from 'react';
import './homepage.css';

function HomePage() {
  return (
    <div>
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
            <a href="support.html" className="contact-us-button">Contact Us</a>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <a href="sign-in.html" className="sign-in-button">Sign In</a>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="game-card">
          <img src="img/game1.jpg" alt="Heretics" />
          <h2 className="game-card-title">Heretics</h2>
          <a href="game1.html" className="play-now-button">Play Heretics</a>
        </div>

        <div className="game-card">
          <img src="img/game2.jpg" alt="Jungle" />
          <h2 className="game-card-title">Jungle</h2>
          <a href="game2.html" className="play-now-button">Play Jungle</a>
        </div>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          <strong>EK Games is a new yet advanced indie Game Development firm. We pride ourselves in releasing multiple high-quality games.
            <a href="about.html" style={{ textDecoration: 'underline', color: '#0047AB' }}>Learn more</a>
          </strong>
        </p>
      </div>

      <footer>
        <div className="contact-us-text">
          Contact Us: +1 123-456-7890
        </div>
        <div className="trademarks">
          &copy; 2023 Game Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
