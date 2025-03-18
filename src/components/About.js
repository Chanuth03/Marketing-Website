import React, { useEffect } from 'react';
import './About.css';
import CeylonSphere from '../assets/pics/Logo img/Logo-07.png';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-column').forEach(column => {
      observer.observe(column);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About CeylonSphere</h2>
          <p>Your Ultimate Travel Companion in Sri Lanka</p>
          
          <div className="about-grid">
            <div className="about-column text-content">
              <div className="info-section" data-aos="fade-right" data-aos-delay="200">
                <h3>Who We Are</h3>
                <p>CeylonSphere is a cutting-edge travel companion app designed to transform your Sri Lankan adventure. We combine traditional travel guidance with modern AR technology to create an immersive exploration experience.</p>
              </div>
              
              <div className="info-section" data-aos="fade-right" data-aos-delay="200">
                <h3>Why Choose Us</h3>
                <ul>
                  <li>Advanced AR Technology: Experience historical sites and monuments in their full glory</li>
                  <li>Comprehensive Guides: Detailed information about destinations, history, and cultural significance</li>
                  <li>Offline Access: Enjoy our features without constant internet connectivity</li>
                  <li>Local Insights: Authentic recommendations and cultural context</li>
                </ul>
              </div>
            </div>
            
            <div className="about-column logo-column">
              <div className="logo-container">
                <img src={CeylonSphere} alt="CeylonSphere" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;