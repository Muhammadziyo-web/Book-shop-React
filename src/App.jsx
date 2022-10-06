import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SectionContent from './components/SectionContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all'>
    <Header />
    <MainContent />
    <SectionContent/>
    <Footer/>

    </div>
  )
}

export default App
