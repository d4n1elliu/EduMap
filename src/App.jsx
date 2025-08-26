import { useState } from 'react'
import Navbar from './Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div>
      </div>
      <h1 className="text-orange-500 8xl text-8xl font-extrabold">EduMap</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
