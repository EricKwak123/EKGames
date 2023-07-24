// SignInPage.js
import React from 'react';
import './signinpage.css';

function SignInPage() {
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
        <div className="sign-in-container">
          <img src="img/logo.jpg" alt="Company Logo" className="company-logo" />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="remember-checkbox">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember my credentials</label>
          </div>
          <p>
            Don't have an account? <a href="sign-up.html" className="sign-up-link">Sign Up</a>
          </p>
          <button className="sign-up-button">Sign In</button>
        </div>
      </div>

      <footer>
        <div className="contact-us-text">
          Contact Us: +1 123-456-7890
        </div>
        <a href="support.html" className="support-button">Support</a>
        <div className="social-media-buttons">
          <a href="#" className="social-media-button"></a>
          <a href="#" className="social-media-button"></a>
          <a href="#" className="social-media-button"></a>
        </div>
        <div className="trademarks">
          &copy; 2023 EK Games. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default SignInPage;
