// AboutPage.js
import React from 'react';
import './aboutpage.css';

function AboutPage() {
  return (
    <div>
      <header>
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
      </header>

      <div className="content">
        <div className="about-us-text-container">
          <h2>About Us</h2>
          <p className="about-us-text">
            <strong>
              EK Games is a new yet advanced indie Game Development firm. We pride ourselves in releasing multiple high-quality games.
              Started in 2019, EK Games has released 2 global successes in the form of games Heretics and Jungle. Each game led by our 
              small yet very skilled team. We value feedback and the quality of our games and wish to build the game and community with our 
              users. 
              We wish to create a fitting and safe environment where users of any past or present can enjoy our products to the fullest.
              <a href="about.html" style={{ textDecoration: 'underline', color: '#0047AB' }}>Learn more</a>
            </strong>
          </p>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pvOvm6iwAkc?controls=0"
            title="EK Games Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <footer>
        <div className="contact-us-text">
          Contact Us: +1 123-456-7890
        </div>
        <div className="trademarks">
          &copy; 2023 EK Games. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
