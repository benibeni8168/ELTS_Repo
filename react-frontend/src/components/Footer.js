import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Elevator Tech Solutions</h4>
          <p>Enterprise AI & Cloud Solutions for Modern Business</p>
        </div>
        
        <div className="footer-section">
          <h5>Services</h5>
          <ul>
            <li><a href="#services">Cloud Migration</a></li>
            <li><a href="#services">AI Solutions</a></li>
            <li><a href="#services">Security</a></li>
            <li><a href="#services">Software Development</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-links">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Elevator Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
