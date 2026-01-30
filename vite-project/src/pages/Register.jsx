import React from 'react'
import RegisterSection from '../components/register/RegisterSection'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import HeroSection from '../components/landing-page/HeroSection.jsx'
function Register() {
  return (
    <div>
        <Header />
        <HeroSection />
        <RegisterSection />
        <Footer />
    </div>
  )
}

export default Register
