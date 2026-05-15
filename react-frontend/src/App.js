import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/Navbar.css';
import './styles/MobileFooter.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import ServiceCloud from './pages/ServiceCloud';
import ServiceMigration from './pages/ServiceMigration';
import ServiceSecurity from './pages/ServiceSecurity';
import ServiceSoftwareAi from './pages/ServiceSoftwareAi';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ResponsiveFooter from './components/ResponsiveFooter';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    company: false,
    solutions: false,
    services: false,
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 400,
      easing: 'ease-in-out',
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const toggleSection = (name) => {
    setExpandedSections((current) => {
      const isCurrentlyOpen = current[name];
      return {
        company: false,
        solutions: false,
        services: false,
        ...(isCurrentlyOpen ? {} : { [name]: true }),
      };
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedSections({
      company: false,
      solutions: false,
      services: false,
    });
  };

  return (
    <>
      <ScrollToTop />
      {/* Navigation */}
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="logo.png" width="270" height="auto" alt="Elevator Tech Solutions" />
        </Link>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-controls="nav-menu-wrapper"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="nav-menu-wrapper"
          className={`nav-menu-wrapper ${menuOpen ? 'mobile-open' : ''}`}
        >
          <ul className="nav-links">
            <li className={expandedSections.company ? 'expanded' : ''}>
              <Link to="/about" className="desktop-nav-link" onClick={closeMenu}>Company</Link>
              <button
                type="button"
                className="nav-section-toggle mobile-only"
                onClick={() => toggleSection('company')}
                aria-expanded={expandedSections.company}
              >
                <span>Company</span>
                <span className={`section-arrow ${expandedSections.company ? 'open' : ''}`} />
              </button>
              <div className="dropdown-menu">
                <Link to="/about" onClick={closeMenu}>About Us</Link>
                <Link to="/case-studies" onClick={closeMenu}>Case Studies</Link>
                <Link to="/support" onClick={closeMenu}>Support</Link>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
                <Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
                <Link to="/terms-conditions" onClick={closeMenu}>Terms & Conditions</Link>
              </div>
            </li>
            <li className={expandedSections.solutions ? 'expanded' : ''}>
              <Link to="/solutions" className="desktop-nav-link" onClick={closeMenu}>Solutions</Link>
              <button
                type="button"
                className="nav-section-toggle mobile-only"
                onClick={() => toggleSection('solutions')}
                aria-expanded={expandedSections.solutions}
              >
                <span>Solutions</span>
                <span className={`section-arrow ${expandedSections.solutions ? 'open' : ''}`} />
              </button>
              <div className="dropdown-menu">
                <Link to="/solutions" onClick={closeMenu}>System Integration</Link>
                <Link to="/services" onClick={closeMenu}>Cloud Architecture</Link>
                <Link to="/services" onClick={closeMenu}>AI Automation</Link>
              </div>
            </li>
            <li className={expandedSections.services ? 'expanded' : ''}>
              <Link to="/services" className="desktop-nav-link" onClick={closeMenu}>Services</Link>
              <button
                type="button"
                className="nav-section-toggle mobile-only"
                onClick={() => toggleSection('services')}
                aria-expanded={expandedSections.services}
              >
                <span>Services</span>
                <span className={`section-arrow ${expandedSections.services ? 'open' : ''}`} />
              </button>
              <div className="dropdown-menu">
                <Link to="/services/cloud" onClick={closeMenu}>Hybrid Cloud</Link>
                <Link to="/services/migration" onClick={closeMenu}>Cloud Migration</Link>
                <Link to="/services/security" onClick={closeMenu}>Cyber Security</Link>
                <Link to="/services/software-ai" onClick={closeMenu}>Intelligent Software</Link>
              </div>
            </li>
          </ul>
          <Link to="/contact" className="nav-cta" onClick={closeMenu}>
            Book a Consultation
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/cloud" element={<ServiceCloud />} />
        <Route path="/services/migration" element={<ServiceMigration />} />
        <Route path="/services/security" element={<ServiceSecurity />} />
        <Route path="/services/software-ai" element={<ServiceSoftwareAi />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer - appears on all pages */}
      <ResponsiveFooter closeMenu={closeMenu} />
    </>
  );
}

export default App;
