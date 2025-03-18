import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Download from './components/Download';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinished = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinished={handleSplashFinished} />
      ) : (
        <>
          <Header />
          <Hero />
          <Features />
          <About />
          <RegistrationForm />
          <Download />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
