// Game2Page.js
import React from 'react';
import './game2page.css';

function Game2Page() {
  return (
    <div>
      <header>
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
            <a href="sign-in.html" className="sign-in-button">Sign In</a>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="game-card">
          <img src="img/game2.jpg" alt="Jungle" />
          <div className="game-description">
            <h2>Game 2 - Jungle</h2>
            <p>Jungle is an immersive deep jungle RPG game. That gives you live realistic yet dream-fulfilling experiences. Jungle
              being the second project released by EK Games, we tended to work on the interactive abilities of the user and the ripple effects 
              it has on your game as a whole.
            </p>
            <a href="download2.html" className="play-now-button">Download Now</a>
          </div>
        </div>
      </div>

      <footer>
        <div className="contact-us-text">
          Contact Us: +1 123-456-7890
        </div>
        <a href="support.html" className="support-button">Support</a>
        <div className="trademarks">
          &copy; 2023 Game Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Game2Page;
