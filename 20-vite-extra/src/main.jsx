import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'          
import App from './App.jsx'
const modules = import.meta.glob('./10/*.js')

Object.values(modules).forEach((module) => {
  module().then((data) => {
    console.log(data);
  })
})



