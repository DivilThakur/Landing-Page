import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import OurClients from './components/Clients'
import CaseStudies from './components/CaseStudy'
import ContactFooter from './components/ContactFooter'
import AboutHero from './components/About'

const App = () => {

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);


    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='overflow-x-hidden relative'>
      <Hero />

      <div className='relative w-full'>
        <div className='absolute top-0 left-0 w-full h-full z-0 pointer-events-none'>
          <img
            src="./src/assets/images/faded-bg.png"
            alt="Background Pattern"
            className='w-full h-full object-cover '
          />
        </div>
        <div className='relative z-10'>
          <Solutions />
          <OurClients />
        </div>
      </div>
      <AboutHero />
      <CaseStudies />
      <ContactFooter />


      <button
        type="button"
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50 
          p-3 rounded-full shadow-lg 
          bg-[#01558E] text-white hover:cursor-pointer
          hover:bg-[#014473] hover:-translate-y-1 
          transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  )
}

export default App