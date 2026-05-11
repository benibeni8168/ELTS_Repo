import React, { useState } from 'react';
import '../styles/Home.css';
import { submitContactForm } from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [contactForm, setContactForm] = useState({ email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  
  // State to manage the Case Study Modal visibility securely
  const [caseStudyModal, setCaseStudyModal] = useState(false);

  const openCaseStudyModal = () => {
    setCaseStudyModal(true);
    document.body.style.overflow = 'hidden'; // Locks background scroll
  };

  const closeCaseStudyModal = () => {
    setCaseStudyModal(false);
    document.body.style.overflow = 'auto'; // Restores background scroll
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setContactMessage('');

    try {
      await submitContactForm({
        name: 'Website Contact Form',
        email: contactForm.email,
        company: '',
        message: contactForm.message,
      });

      setContactMessage('Thank you! We have received your message and will get back to you soon.');
      setContactForm({ email: '', message: '' });
      setTimeout(() => setContactMessage(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setContactMessage('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* HERO SECTION */}
      <header className="hero" id="home">
        <div className="enterprise-visual" data-aos="fade-left">
          <video autoPlay loop muted playsInline>
            <source src="herovideo2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-glow"></div>

        <div className="hero-content" data-aos="fade-up">
          <h1>Enterprise Agentic AI, Hybrid Cloud & Cyber Security Solutions</h1>
          <p>
            We design, migrate, and secure mission-critical digital infrastructure for{' '}
            <span className="gradient-highlight">
              enterprises, government organizations, public sector undertakings (PSUs), and smart cities
            </span>
            .
          </p>
          <a href="#contact" className="btn-primary">
            Book a Consultation
          </a>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section id="services">
        <div data-aos="fade-up" style={{ textAlign: 'center', paddingTop: '40px' }}>
          <h2 className="section-title">Core Capabilities</h2>
          <p className="section-subtitle">
            We don't sell generic software. We engineer specific solutions that solve complex enterprise bottlenecks.
          </p>
        </div>

        <div className="grid-layout" style={{ paddingBottom: '60px' }}>
          <Link to="/services/cloud" className="clean-card card-link-wrap" data-aos="fade-up" data-aos-delay="100" style={{ textDecoration: 'none' }}>
            <i className="fa-solid fa-cloud"></i>
            <h3>Hybrid Cloud</h3>
            <p>
              We design and deploy <strong>secure, scalable data center and cloud solutions</strong> tailored for enterprise environments.
            </p>
            <span className="card-link">Explore Cloud</span>
          </Link>

          <Link to="/services/security" className="clean-card card-link-wrap" data-aos="fade-up" data-aos-delay="200" style={{ textDecoration: 'none' }}>
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Security Solutions</h3>
            <p>
              We provide comprehensive cybersecurity integration services alongside our own suite of advanced security products,
              ensuring robust protection across the digital ecosystem.
            </p>
            <span className="card-link">Explore Security</span>
          </Link>

          <Link to="/services/software-ai" className="clean-card card-link-wrap" data-aos="fade-up" data-aos-delay="300" style={{ textDecoration: 'none' }}>
            <i className="fa-solid fa-microchip"></i>
            <h3>AI Automation</h3>
            <p>Automating IT with the power of AI.</p>
            <span className="card-link">Explore AI</span>
          </Link>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="case-studies">
        <div data-aos="fade-up" style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
          <h2 className="section-title">Proven Impact</h2>
          <p className="section-subtitle">How we have transformed operations for our enterprise partners.</p>
        </div>

        <div className="grid-layout">
          <div className="case-card" data-aos="fade-up">
            <div className="case-content">
              <span className="case-tag">Smart City Deployment</span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                Enterprise-Scale Digital Infrastructure
              </h3>

              {/* Fully restored 3-video block structure matching original HTML */}
              <div className="video-grid">
                <div className="video-item">
                  <video autoPlay loop muted playsInline>
                    <source src="herovideo.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="video-item">
                  <video autoPlay loop muted playsInline>
                    <source src="herovideo2.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="video-item">
                  <video autoPlay loop muted playsInline>
                    <source src="herovideo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <button 
                className="case-stat" 
                onClick={openCaseStudyModal}
                style={{ cursor: 'pointer', display: 'inline-block', marginTop: '20px' }}
              >
                Learn More <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ textAlign: 'center' }}>
        <div data-aos="fade-up" style={{ paddingTop: '80px' }}>
          <h2 className="section-title">Ready to scale securely?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Speak directly with an enterprise solutions architect. No sales scripts, just technical strategy.
          </p>
        </div>

        <div className="contact-container" data-aos="fade-up">
          <form onSubmit={handleContactSubmit}>
            <div className="input-group">
              <label>Work Email</label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={contactForm.email}
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="input-group">
              <label>How can we help?</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Briefly describe your infrastructure or automation needs..."
                value={contactForm.message}
                onChange={handleContactChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }} disabled={submitting}>
              {submitting ? 'Sending...' : 'Request Consultation'}
            </button>
          </form>
          {contactMessage && (
            <div style={{ marginTop: '15px', padding: '10px', color: contactMessage.includes('Error') ? '#ff6b6b' : '#51cf66', fontSize: '0.95rem' }}>
              {contactMessage}
            </div>
          )}
          <div className="trust-text">
            <i className="fa-solid fa-lock"></i> Your information is secure. We will never spam you.
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <div data-aos="fade-up">
          <p className="trust-label">Trusted by innovative enterprise teams</p>
          <div className="client-logos">
            <i className="fa-brands fa-aws"></i>
            <i className="fa-brands fa-microsoft"></i>
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-stripe"></i>
          </div>

          <div className="metrics-grid">
            <div className="metric-item">
              <h3>40%</h3>
              <p>Average IT Cost Reduction</p>
            </div>
            <div className="metric-item">
              <h3>Zero</h3>
              <p>Migration Downtime</p>
            </div>
            <div className="metric-item">
              <h3>3x</h3>
              <p>Faster Deployment Cycles</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULLY RESTORED CASE STUDY MODAL */}
      <div 
        className={`modal-overlay ${caseStudyModal ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target.id === 'caseStudyModal') closeCaseStudyModal();
        }}
        id="caseStudyModal"
      >
        <div className="modal-content" style={{ textAlign: 'left' }}>
          <button 
            className="modal-close" 
            onClick={closeCaseStudyModal}
            style={{ cursor: 'pointer' }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal-body">
            <h3 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '24px' }}>
              Enterprise-Scale Smart City & Digital Infrastructure Delivery
            </h3>
            <p>
              We have successfully delivered a comprehensive, end-to-end digital infrastructure for a State Capital, encompassing IT, network, cybersecurity, SOC, and data center ecosystems.
            </p>
            <p>
              The solution integrates city-wide network infrastructure with a fully modernized, resilient data center environment—enabling seamless operations, scalability, and real-time intelligence.
            </p>
            
            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
              Our Deployment Includes:
            </h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '25px' }}>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                <strong>City Network Integration:</strong> Unified connectivity across distributed field systems, enabling secure and high-performance data exchange across urban infrastructure.
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                <strong>End-to-End Data Center Architecture:</strong> High-availability design covering application compute, AI/ML compute platforms, and enterprise-grade virtualization.
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                <strong>Next-Generation Storage:</strong> Scalable, high-performance storage systems optimized for both structured and unstructured workloads, including video analytics and AI data pipelines.
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                <strong>Data Center Networking:</strong> High-speed, resilient network fabric designed for east-west and north-south traffic optimization with built-in redundancy.
              </li>
            </ul>

            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
              Comprehensive Cybersecurity Stack:
            </h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '25px' }}>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Security Operations Center (SOC) with SIEM and advanced analytics.
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Endpoint protection using EDR/XDR.
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Privileged Identity Management (PIM) and Identity & Access Management (IAM).
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Web Application Firewall (WAF) and Next-Generation Firewall (NGFW).
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Network Intrusion Prevention Systems (NIPS).
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Load Balancing (LB) for application availability.
              </li>
              <li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--blue)', position: 'absolute', left: 0, top: '4px' }}></i>
                Integrated Threat Intelligence Platforms for proactive defense.
              </li>
            </ul>

            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
              IT Service & Operations Management:
            </h4>
            <p>
              Implementation of ITSM and ITOM platforms for streamlined service delivery, monitoring, automation, and operational governance.
            </p>
            
            <p style={{ marginTop: '30px', fontStyle: 'italic', color: '#fff' }}>
              This deployment enables a secure, scalable, and intelligent digital backbone for the city—supporting mission-critical applications, real-time analytics, and future-ready smart governance initiatives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}