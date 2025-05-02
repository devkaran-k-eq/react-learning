const modules = import.meta.glob('./10/*.js')
import { useEffect } from 'react'
import { heading as headingFontSize } from "./assets/1.module.css"
import style2 from "./assets/2.module.css"
import './App.css'
import styles from './assets/3.css?inline'
import './assets/3.css'
import Image from "./assets/react.svg"


Object.values(modules).forEach((module) => {
  module().then((data) => {
    console.log(data);
  })
})


// console.log(Image);

function App() {

  useEffect(() => {
    const moduleElement = document.querySelector('.module');
    if (moduleElement) {
      moduleElement.className = `${headingFontSize} ${style2.heading}`;
      document.getElementById("Image").src = Image


      document.addEventListener('click', () => {
        Object.values(modules).forEach((module) => {
          module().then((data) => {
            console.log(modules);
          })
        })
      })
    }
  }, []);

  return (
    <>
      <h1 className='module'>Module css</h1>
      <img src={Image} id="Image" />
    </>
  )
}

export default App
