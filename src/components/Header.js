import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/pics/Logo img/Logo-07.png';

const Header = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 100);

      const sections = ['hero', 'features', 'about', 'download'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      setActiveSection(currentSection || 'hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${hasBackground ? 'with-background' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`} id='navbar'>
      <div className="nav-content">
        <img href="#hero" src={logo} alt="Logo" className="logo" />
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={closeMobileMenu}>
            Home
            {activeSection === 'hero' && <span className="indicator"></span>}
          </a>
          <a href="#features" className={activeSection === 'features' ? 'active' : ''} onClick={closeMobileMenu}>
            Features
            {activeSection === 'features' && <span className="indicator"></span>}
          </a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMobileMenu}>
            About
            {activeSection === 'about' && <span className="indicator"></span>}
          </a>
          <a href="#download" className={activeSection === 'download' ? 'active' : ''} onClick={closeMobileMenu}>
            Download App
            {activeSection === 'download' && <span className="indicator"></span>}
          </a>
          <a href="#registration" className="register-btn" onClick={closeMobileMenu}>Join Us</a>
        </div>
        
        <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
