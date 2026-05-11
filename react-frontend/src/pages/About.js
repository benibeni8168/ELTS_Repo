import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      <button className="floating-back-btn" onClick={() => navigate(-1)} title="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="page-header" data-aos="fade-up">
        <h1>Engineering the Future</h1>
        <p>
          We are a dedicated team of systems architects, security specialists, and AI engineers committed to solving enterprise-scale bottlenecks.
        </p>
      </header>

      <section>
        <div className="content-grid">
          <div className="text-block" data-aos="fade-right">
            <h2>Our Philosophy</h2>
            <p>
              <strong>Elevator Technology Solutions LLP (ELTS)</strong> was founded to bridge the gap between emerging technology and operational reality.
              We saw enterprises struggling to adopt <strong>AI and Hybrid Cloud</strong> due to fragmented systems and extreme security liabilities.
            </p>
            <p>
              We don’t sell off-the-shelf software. We act as your dedicated <strong>technical partners, architecting bespoke, deeply integrated environments</strong>—including next-generation, AI-ready products—that prioritize security, scale effortlessly, and map directly to your balance sheet.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h4>99.99%</h4>
                <p>Uptime SLA guarantee for mission-critical systems.</p>
              </div>
              <div className="stat-box">
                <h4>Zero</h4>
                <p>Data breaches in our security-first deployments.</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
              alt="Servers"
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-main)' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up">
          <h2 className="section-title">Our Engineering Standards</h2>
          <p className="section-subtitle">How we guarantee successful enterprise deployments.</p>
        </div>

        <div className="standards-grid">
          <div className="standard-card" data-aos="fade-up" data-aos-delay="100">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Security by Design</h3>
            <p>
              Security is never an afterthought. Every architecture we build begins with a zero-trust foundation, ensuring your data is protected before a single line of application code is written.
            </p>
          </div>
          <div className="standard-card" data-aos="fade-up" data-aos-delay="200">
            <i className="fa-solid fa-code-merge"></i>
            <h3>Agnostic Integration</h3>
            <p>
              We do not lock you into a single vendor ecosystem. Our solutions are designed to be cloud-agnostic, integrating seamlessly across AWS, Azure, Google Cloud, and your on-premise hardware.
            </p>
          </div>
          <div className="standard-card" data-aos="fade-up" data-aos-delay="300">
            <i className="fa-solid fa-chart-line"></i>
            <h3>FinOps Driven</h3>
            <p>
              Technology should reduce costs, not inflate them. We engineer our cloud solutions to be resource-efficient, automatically scaling down idle compute to drastically lower your operational expenditure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
