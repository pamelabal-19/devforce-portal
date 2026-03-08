import { Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GitGuide from './pages/GitGuide'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/git-para-designers" element={<GitGuide />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App