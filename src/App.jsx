/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Themes from './components/theme/Themes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Themes />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
