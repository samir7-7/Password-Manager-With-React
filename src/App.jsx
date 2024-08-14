import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh]'>
      <Navbar />
      <Manager/>
    </div>
  )
}

export default App
