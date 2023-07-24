import React from 'react';
import './Footer.css'; // Add the CSS file for the component styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-us-text">Contact Us: +1 123-456-7890</div>
      <a href="support.html" className="support-button">
        Support
      </a>
      <div className="trademarks">&copy; 2023 Game Website. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
