import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/pics/Logo img/Logo-07.png';

const Header = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [activeSection, setActiveSection] = useState('');  // Changed initial state to empty

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 100);

      // Check all sections including hero
      const sections = ['hero', 'features', 'about', 'download'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      setActiveSection(currentSection || 'hero'); // Default to hero if no section found
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hasBackground ? 'with-background' : ''}`} id='navbar'>
      <div className="nav-content">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
            Home
            {activeSection === 'hero' && <span className="indicator"></span>}
          </a>
          <a href="#features" className={activeSection === 'features' ? 'active' : ''}>
            Features
            {activeSection === 'features' && <span className="indicator"></span>}
          </a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
            About
            {activeSection === 'about' && <span className="indicator"></span>}
          </a>
          <a href="#download" className={activeSection === 'download' ? 'active' : ''}>
            Download App
            {activeSection === 'download' && <span className="indicator"></span>}
          </a>
          <a href="#registration" className="register-btn">Join Us</a>
        </div>
        <div className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
