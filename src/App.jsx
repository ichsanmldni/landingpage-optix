import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Download from './components/Download'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='h-[2100px] bg-gradient-to-b from-[#092235] to-[#000000]'>
      <Navbar/>
      <Banner/>
      <About/>
      <Features/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App
