import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/Navbar.css';
// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Support from './pages/Support';
import ServiceCloud from './pages/ServiceCloud';
import ServiceMigration from './pages/ServiceMigration';
import ServiceSecurity from './pages/ServiceSecurity';
import ServiceSoftwareAi from './pages/ServiceSoftwareAi';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      {/* Navigation */}
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="logo.png" width="270" height="auto" alt="Elevator Tech Solutions" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div
          className={`nav-menu-wrapper ${menuOpen ? 'mobile-open' : ''}`}
          style={menuOpen ? { display: 'flex', flexDirection: 'column' } : undefined}
        >
          <ul className="nav-links">
            <li>
              <Link to="/about" onClick={closeMenu}>Company</Link>
            </li>
            <li>
              <Link to="/solutions" onClick={closeMenu}>
                Solutions <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.75rem', marginLeft: '5px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/solutions" onClick={closeMenu}>System Integration</Link>
                <Link to="/services" onClick={closeMenu}>Cloud Architecture</Link>
                <Link to="/services" onClick={closeMenu}>AI Automation</Link>
              </div>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>
                Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.75rem', marginLeft: '5px' }}></i>
              </Link>
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
      </Routes>

      {/* Footer - appears on all pages */}
      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <div>
              <h4 style={{ fontFamily: 'Space Grotesk', marginLeft: -14, fontSize: '1.3rem' }}>
                <Link to="/" className="logo">
                  <img src="logo.png" width="170" height="auto" alt="Elevator Tech" />
                </Link>
              </h4>
              <p style={{ marginBottom: '20px', marginLeft: 0, marginTop: -23, fontSize: '0.95rem' }}>
                Building and securing the next generation of enterprise infrastructure.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.linkedin.com/company/YOUR-LINKEDIN-PAGE"><i className="fa-brands fa-linkedin" style={{ fontSize: '1.2rem' }}></i></a>
              <a href="https://twitter.com/YOUR-TWITTER-HANDLE"><i className="fa-brands fa-x-twitter" style={{ fontSize: '1.2rem' }}></i></a>
              <a href="https://www.instagram.com/YOUR-INSTAGRAM-HANDLE"><i className="fa-brands fa-instagram" style={{ fontSize: '1.2rem' }}></i></a>
              <a href="https://www.youtube.com/@Teinditech"><i className="fa-brands fa-youtube" style={{ fontSize: '1.2rem' }}></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/solutions" onClick={closeMenu}>System Integration</Link>
            <Link to="/services" onClick={closeMenu}>Cloud Architecture</Link>
            <Link to="/services" onClick={closeMenu}>AI Automation</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services/cloud" onClick={closeMenu}>Hybrid Cloud</Link>
            <Link to="/services/migration" onClick={closeMenu}>Cloud Migration</Link>
            <Link to="/services/security" onClick={closeMenu}>Cyber Security</Link>
            <Link to="/services/software-ai" onClick={closeMenu}>Intelligent Software</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
            <Link to="/case-studies" onClick={closeMenu}>Case Studies</Link>
            <Link to="/support" onClick={closeMenu}>Support</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Reach Us</h4>
            <a href="mailto:sales@teindi.com"><i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i> sales@teindi.com</a>
            <a
              href="https://www.google.com/maps/place/Manish+Global+Mall/@28.560376,77.059367,1980m/data=!3m1!1e3!4m6!3m5!1s0x390d1b6685d8affd:0x94de45284c469b11!8m2!3d28.5603764!4d77.0593668!16s%2Fg%2F11v3r7vcfm?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '10px', display: 'block', textDecoration: 'none', transition: '0.3s' }}
            >
              <i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i> T-21/22 Manish Global Mall, New Delhi 110077
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Elevator Tech Solutions LLP. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
