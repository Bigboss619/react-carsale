import React from 'react'
import LoginSection from '../components/login/LoginSection.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import HeroSection from '../components/landing-page/HeroSection.jsx'
function Login() {
  return (
    <div>
        <Header />
        <HeroSection />
        <LoginSection />
        <Footer />
    </div>
  )
}

export default Login
