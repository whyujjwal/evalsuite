import React from 'react';
import NewsletterSignup from './components/NewsletterSignup';
import ParticleBackground from './components/ParticleBackground';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

const Header = () => {
  return (
    <header className="Teaser-header animated-header">
      <ParticleBackground />
      <nav className="main-nav">
        <div className="logo">EvalSuite</div>
        <button className="cta-button glow-effect">Early Access</button>
      </nav>
      <div className="hero-content">
        <div className="coming-soon">Coming Soon</div>
        <h1 className="animated-title">
          <span className="gradient-text">Revolutionary</span><br/>
          AI Model Evaluation Platform
        </h1>
        <p className="tagline animated-tagline">
          Transform the way you evaluate AI models.<br/>
          Unprecedented insights. Unmatched precision.
        </p>
        <CountdownTimer />
        <NewsletterSignup />
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Discover More</span>
      </div>
    </header>
  );
};

export default Header;
