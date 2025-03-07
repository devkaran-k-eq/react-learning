import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import { About, Contact, Github, Home, User } from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'

const addOutletReactComponent = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>} />
      <Route path= "contact" element={<Contact/>} />
      <Route path="user/:userId" element={ <User/> } />
      <Route 
      path="github" 
      element={ <Github/> } 
      loader={githubInfoLoader}
      />
      
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={addOutletReactComponent}/>


  </StrictMode>,
)
