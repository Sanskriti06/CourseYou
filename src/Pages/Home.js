import React from 'react';
import '../App.css';
import Cards from '../Components/Cards.js';
import HeroSection from '../Components/HeroSection';
import Slider from '../Components/Slider';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;