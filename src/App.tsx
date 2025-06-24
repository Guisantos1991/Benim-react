import Header from './components/Header'
import MiddleBar from './components/MiddleBar'
import MidSection from './components/MidSection'
import MidService from './components/MidService'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import './index.css'

import { useEffect } from 'react'

function App() {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <MiddleBar />
      <MidSection />
      <MidService />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
