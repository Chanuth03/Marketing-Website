import React from 'react';
import './Download.css';
import playStore from '../assets/pics/google play.jpg';
import appStore from '../assets/pics/app store.jpg';

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="download-container">
        <div className="download-content">
          <div className="download-text">
            <h2>Download Our App</h2>
            <p>Experience Sri Lanka like never before with CeylonSphere</p>
            
            <div className="app-features">
              <ul>
                <li>Interactive AR Experience</li>
                <li>Offline Maps & Guides</li>
                <li>Real-time Updates</li>
                <li>24x7 Travel Assistant</li>
              </ul>
            </div>

            <div className="store-buttons">
              <a href="#" className="store-button">
                <img src={playStore} alt="Get it on Google Play" />
              </a>
              <a href="#" className="store-button">
                <img src={appStore} alt="Download on App Store" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;