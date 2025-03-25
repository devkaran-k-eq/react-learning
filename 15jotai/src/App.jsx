import { useState } from 'react'
import './App.css'
import {atom, useAtom} from "jotai" 
import Counter  from './Counter'
import { counterAtom } from './atoms';
import DoubleCounter from './DoubleCounter';

// console.log(counterAtom);

function App() {
  const [count] = useAtom(counterAtom)
  return (
    <>
      
      <h1>{count}</h1>
      <Counter/>
      <DoubleCounter/>
    </>
  )
}

export default App
