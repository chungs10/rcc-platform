import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome to the RCC Website</h1>
      <a id="aboutUsLink" href="#aboutUsSection">Learn more</a>
    </div>
  );
}

export default HeroSection;