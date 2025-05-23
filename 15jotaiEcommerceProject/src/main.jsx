import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.jsx';
import {MyCart} from './components/index.js';
import Maintenance from './pages/Maintenance.jsx';

const checkRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='my-cart' element={<MyCart/>}/>
      <Route path='maintenance' element={<Maintenance/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={checkRoute}/>
  </StrictMode>,
)
