import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videobg7 from '../Assets/videobg7.mp4';

function HeroSection() {
  return (
    <div className='hero-containerrr'>
      <video src={videobg7} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for? Enroll Now!</p>
      {/* <p>Enroll now!</p> */}
      <div className='hero-btns'>
        
      </div>
    </div>
  );
}

export default HeroSection;