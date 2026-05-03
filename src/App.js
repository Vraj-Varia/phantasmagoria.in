import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Stories from './components/Stories';
import Services from './components/Services';
import EventDetail from './components/EventDetail';
import Contact from './components/Contact';

function AppContent() {

  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };
  

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home scrollY={scrollY} />} />
        <Route path="/about" element={<About scrollY={scrollY} />} />
        <Route path="/portfolio" element={<Portfolio scrollY={scrollY} />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
