import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <Link to="/" className="logo">
        <i className="fas fa-rocket"></i>
        Elevator Tech
      </Link>

      <button 
        className="menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
        <Link to="/contact" className="nav-cta">Get Started</Link>
      </div>
    </nav>
  );
}
