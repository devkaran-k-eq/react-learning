import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    userName: "devkaran",
    age: 22
  }
  return (
    <>
      {/* <h1 className="bg-green-400 rounded-xl p-4">Tailwind Test</h1> */}
      <Card channel="chai aur code" myArr={myObj.age} />
    </>
  )
}

export default App
