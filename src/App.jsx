/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element:<div> <Home /></div>
  },
  {
    path: "/about",
    element: <div><About /></div> 
  },
  {
    path: "/portfolio",
    element: <div><Portfolio /></div>
  },
  {
    path: "/contact",
    element: <div><Contact /></div>
  },
  {
    path: "navbar",
    element: <div><Navbar /></div>
  }
])

function App() {
  
  return (
   <di>
    <RouterProvider router={router} />
   </di>
  )
}

export default App
