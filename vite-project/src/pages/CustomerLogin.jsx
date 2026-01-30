import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CustomerLoginSection from '../components/login/CustomerLoginSection'
import HeroSection from '../components/landing-page/HeroSection'
function CustomerLogin() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CustomerLoginSection />
      <Footer />
    </div>
  )
}

export default CustomerLogin
