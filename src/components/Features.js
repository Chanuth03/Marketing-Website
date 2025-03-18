import React from 'react';
import './Features.css';
import ar from '../assets/pics/AR.jpg';
import multilingual from '../assets/pics/multilingual.jpg';
import vehiclebook from '../assets/pics/vehiclebook.jpg';
import restaurants from '../assets/pics/restaurents.jpg';
import shops from '../assets/pics/shops.jpg';
import crowd from '../assets/pics/crowd.jpg';
import recomonding from '../assets/pics/recomonding.jpg';
import chatbot from '../assets/pics/chatbot.jpg';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2 data-aos="fade-up">Why Choose CeylonSphere</h2>
      <div className="features-grid">

        <div className="feature-card" style={{ backgroundImage: `url(${ar})` }} data-aos="fade-down" data-aos-delay="200">
          <div className="feature-content">
            <h3>Travel with AR Models</h3>
            {/* <p>We offer AR models for popular destinations in our country</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${multilingual})` }} data-aos="fade-down" data-aos-delay="400">
          <div className="feature-content">
            <h3>Multilingual Guides</h3>
            {/* <p>Multilingual guides are available for all locations, helping travelers navigate with ease and confidence.</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${vehiclebook})` }} data-aos="fade-down" data-aos-delay="600">
          <div className="feature-content">
            <h3>Book Your Dream Trip</h3>
            {/* <p>Taxi drivers can accept trip bookings made by travelers while selecting their destinations, securing a hire in the process.</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${restaurants})` }} data-aos="fade-down" data-aos-delay="800">
          <div className="feature-content">
            <h3>Nearby Restaurants</h3>
            {/* <p>Receive personalized recommendations for the best nearby restaurants at your travel destinations.</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${shops})` }} data-aos="fade-down" data-aos-delay="200">
          <div className="feature-content">
            <h3>Nearby Souvenir Shops</h3>
            {/* <p>Easily discover top-rated souvenir shops near your travel destinations for a memorable shopping experience.</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${crowd})` }} data-aos="fade-down" data-aos-delay="400">
          <div className="feature-content">
            <h3>Real-Time Crowd Alerts</h3>
            {/* <p>Stay informed with real-time crowd alerts at your travel destinations for a smoother and more enjoyable experience.</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${recomonding})` }} data-aos="fade-down" data-aos-delay="600">
          <div className="feature-content">
            <h3>Unforgettable Activities in Sri Lanka</h3>
            {/* <p>Stay informed with real-time crowd alerts at your travel destinations for a smoother and more enjoyable experience.</p> */}
          </div>
        </div>

        <div className="feature-card" style={{ backgroundImage: `url(${chatbot})` }} data-aos="fade-down" data-aos-delay="800">
          <div className="feature-content">
            <h3>24x7 AI Assistant</h3>
            {/* <p>Get instant help and travel recommendations from our intelligent chatbot assistant anytime, anywhere.</p> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;