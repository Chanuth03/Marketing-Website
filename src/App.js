import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import About from './components/About';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destinations />
      <Features />
      <About />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
