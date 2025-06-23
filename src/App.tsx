import Header from './components/Header'
import MiddleBar from './components/MiddleBar'
import MidSection from './components/MidSection'
import MidService from './components/MidService'
import Services from './components/services'
import './index.css'

function App() {
  

  return (
    <div className="w-full h-full">
      <Header />
      <MiddleBar />
      <MidSection />
      <MidService />
      <Services />
    </div>
  )
}

export default App
