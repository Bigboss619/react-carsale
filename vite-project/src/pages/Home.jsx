import React from 'react'
import Header from '../components/Header/Header';
import HeroSection from '../components/landing-page/HeroSection';
import FeatureCar from '../components/landing-page/FeatureCar';
import AgentSection from '../components/landing-page/AgentSection';
import WhyChooseUs from '../components/landing-page/WhyChooseUs';
import Testimonial from '../components/landing-page/Testimonial';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeatureCar />
        <AgentSection />
        <WhyChooseUs />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home
