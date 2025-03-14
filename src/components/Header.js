import React from 'react';
import './Header.css';
import logo from '../assets/pics/Logo img/Logo-06.png';

const Header = () => {
  return (
    <nav className="navbar" id='navbar'>
      <div className="nav-content">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#download">Download App</a>
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
