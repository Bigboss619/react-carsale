import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/landing-page/HeroSection'
import CustomerRegisterSection from '../components/register/CustomerRegisterSection'
function CustomerRegister() {
  return (
    <div>
        <Header />
        <HeroSection />
        <CustomerRegisterSection />
        <Footer />
    </div>
  )
}

export default CustomerRegister
