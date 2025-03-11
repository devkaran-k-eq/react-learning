import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <div className="w-full block">
          Components
        </div>
      </div>
    </>
  )
}

export default App
