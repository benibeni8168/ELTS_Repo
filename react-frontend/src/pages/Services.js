import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Services.css';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="floating-back-btn" onClick={() => navigate(-1)} title="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="page-header" data-aos="fade-up">
        <h1>Enterprise Services</h1>
        <p>We do not provide generic IT support. We engineer highly specialized solutions for organizations facing complex scaling and security challenges.</p>
      </header>

      <section style={{ background: 'var(--bg-main)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div className="service-list">

          <div className="service-row" data-aos="fade-up">
            <span className="card-tag">Infrastructure</span>
            <h3>Hybrid Cloud Deployment</h3>
            <div className="service-data">
              <div className="data-point">
                <strong>Who it's for:</strong>
                Enterprises constrained by legacy on-premise servers struggling to handle modern data loads.
              </div>
              <div className="data-point">
                <strong>The Solution:</strong>
                We architect and deploy an edge-to-cloud environment, moving non-sensitive workloads to the public cloud while securing critical data on-site.
              </div>
              <div className="data-point">
                <strong>The Result:</strong>
                Achieve 99.99% uptime, eliminate hardware maintenance costs, and scale resources dynamically during peak traffic.
              </div>
            </div>
            <div>
              <Link to="/contact" className="cta-link">
                Talk to a Cloud Architect <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="service-row" data-aos="fade-up">
            <span className="card-tag">Resilience</span>
            <h3>Cyber Security Solutions</h3>
            <div className="service-data">
              <div className="data-point">
                <strong>Who it's for:</strong>
                Financial institutions, healthcare providers, and municipalities that cannot afford a single data breach.
              </div>
              <div className="data-point">
                <strong>The Solution:</strong>
                We implement strict Identity Access Management (IAM), continuous environment monitoring, and automated threat isolation protocols.
              </div>
              <div className="data-point">
                <strong>The Result:</strong>
                Total compliance with stringent industry regulations (SOC2, HIPAA) and a mathematically verified reduction in internal and external breach risks.
              </div>
            </div>
            <div>
              <Link to="/contact" className="cta-link">
                Get a Security Audit <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="service-row" data-aos="fade-up">
            <span className="card-tag">Optimization</span>
            <h3>AI Automation &amp; Process</h3>
            <div className="service-data">
              <div className="data-point">
                <strong>Who it's for:</strong>
                Operations teams overwhelmed by repetitive data entry, complex reporting, and manual system monitoring.
              </div>
              <div className="data-point">
                <strong>The Solution:</strong>
                We train and embed secure, custom machine learning models directly into your existing company workflows and data lakes.
              </div>
              <div className="data-point">
                <strong>The Result:</strong>
                Save hundreds of manual hours per week, reduce human error to near-zero, and generate real-time predictive analytics.
              </div>
            </div>
            <div>
              <Link to="/contact" className="cta-link">
                Request an AI Demo <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section style={{ padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div data-aos="fade-up">
          <h2 className="section-title">Strategic Advisory</h2>
          <p className="section-subtitle">We map technology investments directly to your balance sheet.</p>
        </div>

        <div className="advisory-grid">
          <div className="advisory-card" data-aos="fade-up" data-aos-delay="100">
            <h4>1. Infrastructure Audit</h4>
            <p>We analyze your existing codebases, cloud environments, and security postures to identify bottlenecks causing operational slowdowns.</p>
            <div className="metric-badge">Outcome: Identifies 15-30% in wasted spend</div>
          </div>
          <div className="advisory-card" data-aos="fade-up" data-aos-delay="200">
            <h4>2. Architecture Design</h4>
            <p>We design a hyper-specific, scalable deployment roadmap tailored entirely to your organization's regulatory and performance needs.</p>
            <div className="metric-badge">Outcome: Reduces deployment friction by 2x</div>
          </div>
          <div className="advisory-card" data-aos="fade-up" data-aos-delay="300">
            <h4>3. FinOps Optimization</h4>
            <p>Post-deployment, we continuously monitor your cloud usage to kill idle instances and optimize database queries.</p>
            <div className="metric-badge">Outcome: Lowers monthly operational costs by 40%</div>
          </div>
        </div>
      </section>
    </div>
  );
}
