import React from 'react';
import './Hero.css';

import image1 from '../assets/pics/podi kali 1.png';
import image2 from '../assets/pics/podi kali 2.png';
import image3 from '../assets/pics/podi kali 3.png';
import image4 from '../assets/pics/podi kali 4.png';
import image5 from '../assets/pics/podi kali 5.png';
import image7 from '../assets/pics/podi kali 6.png';
import image8 from '../assets/pics/podi kali 7.png';
import image9 from '../assets/pics/podi kali 8.png';

const Hero = () => {
  // const leftImages = [
  //   { src: image1, delay: 0, top: 20 },
  //   { src: image2, delay: 1, top: 35 },
  //   { src: image3, delay: 0.5, top: 55 },
  //   { src: image4, delay: 1.5, top: 75 }
  // ];

  // const rightImages = [
  //   { src: image5, delay: 0.8, top: 15 },
  //   { src: image7, delay: 1.2, top: 40 },
  //   { src: image8, delay: 0.3, top: 60 },
  //   { src: image9, delay: 1.7, top: 80 }
  // ];

  return (
    <section className="hero" id="hero">
      <div className="hero-background-image"></div>
      <div className="hero-background-blur"></div>

      {/* Left side images */}
      {/* {leftImages.map(({ src, delay, top }, index) => (
        <div
          key={`left-image-${index}`}
          className="floating-image"
          style={{
            '--delay': `${delay}s`,
            top: `${top}%`,
            left: '15%'
          }}
        >
          <img src={src} alt={`Feature ${index + 1}`} />
        </div>
      ))} */}

      {/* Right side images */}
      {/* {rightImages.map(({ src, delay, top }, index) => (
        <div
          key={`right-image-${index}`}
          className="floating-image"
          style={{
            '--delay': `${delay}s`,
            top: `${top}%`,
            right: '15%'
          }}
        >
          <img src={src} alt={`Feature ${index + 5}`} />
        </div>
      ))} */}

      <div className="hero-content">
        <h1>CeylonSphere</h1>
        <h2>Discover the Wonder of<br />Sri Lanka</h2>
        <p>Explore the beauty of Sri Lanka and plan your trip with CeylonSphere</p>
        <a href="#features" className="cta-button">
          Explore More
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
