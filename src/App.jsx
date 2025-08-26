import { useState } from 'react'
import Navbar from './Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1 className="text-orange-500 10xl text-10xl font-extrabold">EduMap</h1>
    </>
  )
}

export default App
