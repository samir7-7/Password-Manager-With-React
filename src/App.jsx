import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw]'>
      <Navbar />
      <div className='min-h-[86.3vh] inset-0 -z-10 h-full bg-red-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
        <Manager />
      </div>
      <Footer />
    </div>
  )
}

export default App
