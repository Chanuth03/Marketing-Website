import React from 'react';
import './Footer.css';
import logo from '../assets/pics/Logo img/Logo-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#hero">
            <img src={logo} alt="CeylonSphere Logo" />
          </a>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email:<a href="mailto:ceylonsphere@gmail.com"> ceylonsphere@gmail.com</a></p>
            <p>Phone:<a href="tel:+94775108747">+94 77 510 8747</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/ceylonsphere/?hl=en" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#registration">Registration</a>
              <a href="#download">Download</a>
            </nav>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 CeylonSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;