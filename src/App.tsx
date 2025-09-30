import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesShowcase from './components/ServicesShowcase'
import ParticleField from './components/ParticleField'
import ClientLogoSlider from './components/ClientLogoSlider'
import CaseStudies from './components/CaseStudies'
import ConversionSection from './components/ConversionSection'
import Footer from './components/Footer'
import Divider from './components/Divider'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ServiceDetailPage from './components/ServiceDetailPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null)

  // Handle navigation based on hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#about') {
        setCurrentPage('about')
        setCurrentServiceId(null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#contact') {
        setCurrentPage('contact')
        setCurrentServiceId(null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash.startsWith('#service/')) {
        const serviceId = hash.replace('#service/', '')
        setCurrentPage('service')
        setCurrentServiceId(serviceId)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setCurrentPage('home')
        setCurrentServiceId(null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Navigation handler
  const handleNavigation = (href: string) => {
    if (href === '#about') {
      setCurrentPage('about')
      setCurrentServiceId(null)
      window.location.hash = 'about'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href === '#contact') {
      setCurrentPage('contact')
      setCurrentServiceId(null)
      window.location.hash = 'contact'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href === '#home') {
      setCurrentPage('home')
      setCurrentServiceId(null)
      window.location.hash = ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('#service/')) {
      const serviceId = href.replace('#service/', '')
      setCurrentPage('service')
      setCurrentServiceId(serviceId)
      window.location.hash = href
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // For other links, scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Custom nav items with navigation handler
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <div className="App relative">
      {/* Global Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
        <ParticleField count={80} color="rgba(255,255,255,0.2)" />
      </div>

      <Navbar
        logoSrc="/media/logo.png"
        navItems={navItems}
        onNavigate={handleNavigation}
      />

      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <ClientLogoSlider />
          <ServicesShowcase onNavigate={handleNavigation} />
          <Divider />
          <CaseStudies />
          <Divider />
          <ConversionSection />
          <Footer />
        </>
      ) : currentPage === 'about' ? (
        <>
          <AboutPage />
          <Footer />
        </>
      ) : currentPage === 'contact' ? (
        <>
          <ContactPage />
          <Footer />
        </>
      ) : currentPage === 'service' && currentServiceId ? (
        <>
          <ServiceDetailPage serviceId={currentServiceId} />
          <Footer />
        </>
      ) : null}
    </div>
  )
}

export default App
