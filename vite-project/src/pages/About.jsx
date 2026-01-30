import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/landing-page/HeroSection';
import CompanyStory from '../components/about/CompanyStory';
import MissionVission from '../components/about/MissionVission';
import WhyChooseUs from '../components/about/WhyChooseUs';

function About() {
  return (
    <div>
      <Header /> 
      <HeroSection />
      <CompanyStory />
      <MissionVission />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default About
