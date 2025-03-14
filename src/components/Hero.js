import React, { useState, useEffect } from 'react';
import './Hero.css';
// Import images
import img07 from '../assets/pics/img07.jpg';
import img14 from '../assets/pics/img14.jpg';
import img15 from '../assets/pics/img15.jpg';
import img16 from '../assets/pics/img16.jpg';
import img17 from '../assets/pics/img17.jpg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [
    img07,
    img14,
    img15,
    img16,
    img17
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-backgrounds">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>
      <div className="hero-content">
        <h1>Discover the Wonder of<br />Sri Lanka</h1>
        <p>Explore the beauty of Sri Lanka and plan your trip with CeylonSphere</p>
      </div>
    </section>
  );
};

export default Hero;
