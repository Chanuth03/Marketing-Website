import React from 'react';
import './Destinations.css';
import sigiriya from '../assets/pics/sigiriya.webp';
import templeOfTooth from '../assets/pics/maligawa.webp';
import ruwanweliSeya from '../assets/pics/ruwanweli.webp';
import ambuluwawa from '../assets/pics/ambuluwawa.webp';
import nineArch from '../assets/pics/ninearch.webp';
import galleFort from '../assets/pics/galu kotuwa.webp';

const Destinations = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {/* Destinations */}
        <div className="destination-card">
          <img src={sigiriya} alt="Destination" />
          <h3>Sigiriya</h3>
          <p>Ancient palace and fortress complex with stunning views</p>
          <div class="tags">
            <span class="tag">Heritage</span>
            <span class="tag">History</span>
          </div>
        </div>

        <div className="destination-card">
          <img src={templeOfTooth} alt="Destination" />
          <h3>Temple Of Tooth</h3>
          <p>Buddhist temple housing the sacred tooth relic of the Buddha</p>
          <div class="tags">
            <span class="tag">Religious</span>
          </div>
        </div>

        <div className="destination-card">
          <img src={ruwanweliSeya} alt="Destination" />
          <h3>Ruwanweli Seya</h3>
          <p>Buddhist stupa with a history of over 2000 years</p>
          <div class="tags">
            <span class="tag">Religious</span>
          </div>
        </div>

        <div className="destination-card">
          <img src={ambuluwawa} alt="Destination" />
          <h3>Ambuluwawa</h3>
          <p>A stunning multi-religious tower complex perched at 3,567 feet, offering panoramic views of the central highlands</p>
          <div class="tags">
            <span class="tag">Religious</span>
            <span class="tag">Nature</span>
          </div>
        </div>

        <div className="destination-card">
          <img src={nineArch} alt="Destination" />
          <h3>Nine Arch Bridge</h3>
          <p>An iconic colonial-era viaduct nestled in misty tea plantations, famous for its nine majestic arches and scenic railway crossings</p>
          <div class="tags">
            <span class="tag">Heritage</span>
            <span class="tag">Nature</span>
          </div>
        </div>

        <div className="destination-card">
          <img src={galleFort} alt="Destination" />
          <h3>Galle Fort</h3>
          <p>A historic Dutch fort and UNESCO World Heritage site</p>
          <div class="tags">
            <span class="tag">Historical</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Destinations;