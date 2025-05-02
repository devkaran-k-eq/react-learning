import { useEffect } from 'react'
import {heading as headingFontSize } from  "./assets/1.module.css"
import style2 from  "./assets/2.module.css"
import './App.css'
import styles from './assets/3.css?inline'
import './assets/3.css'
import image from "./assets/react.svg"

console.log(headingFontSize);
console.log(style2);
console.log(image);


function App() {

  useEffect(() => {
    const moduleElement = document.querySelector('.module');
    if (moduleElement) {
      moduleElement.className = `${headingFontSize} ${style2.heading}`;
    }
  }, []);

  return (
    <>
      <h1 className='module'>Module css</h1>
    </>
  )
}

export default App
