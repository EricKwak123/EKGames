// WorkPage.js
import React from 'react';
import './workpage.css';

function WorkPage() {
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
        <div className="jobs-section">
          <div>
            <h2>Our Jobs</h2>
            <p>Here at EK Games, we house a dedicated and talented staff. Working as a team to achieve our vision and create the best environment possible. While maintaining the closest of a family, we dedicate ourselves to professionalism and being a company of the highest quality.</p>
          </div>
          <div>
            <img src="img/jobs.jpg" alt="Jobs" className="jobs-image" />
          </div>
        </div>

        <div className="students-program-section">
          <h2 className="students-program-header">Apply to Our Students Program</h2>
          <div>
            <img src="img/students-program.jpg" alt="Students Program" className="students-program-image" />
          </div>
          <p>We provide a wide range of internships and co-op programs related to our company. We intend to give our community and industry the best development and future we can provide. We intend to give the highest level of training and education an internship can.</p>
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

export default WorkPage;
