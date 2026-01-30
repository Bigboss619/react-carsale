import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import HeroSection from '../components/landing-page/HeroSection.jsx'
import AgentLoginSection from '../components/login/AgentLoginSection.jsx'
function AgentLogin() {
  return (
    <div>
        <Header />
        <HeroSection />
        <AgentLoginSection />
        <Footer />
    </div>
  )
}

export default AgentLogin
