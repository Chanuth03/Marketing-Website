import React from 'react';
import './SplashScreen.css';
import logo from '../assets/pics/Logo img/Logo-10.png';

const SplashScreen = ({ onFinished }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="CeylonSphere Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;