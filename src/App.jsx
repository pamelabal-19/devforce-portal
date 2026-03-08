import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Resources from './components/Resources'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Resources />
      <HowItWorks />
      <About />
      <Footer />
    </>
  )
}

export default App
