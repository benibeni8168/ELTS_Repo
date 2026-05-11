import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="floating-back-btn" onClick={() => navigate(-1)} title="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="page-header" data-aos="fade-up">
        <h1>Deployable Solutions</h1>
        <p>We solve massive operational bottlenecks through deep system integration and applied artificial intelligence.</p>
      </header>

      <section style={{ padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>

        <div className="solution-block" data-aos="fade-up">
          <div className="solution-content">
            <h2>Enterprise System Integration</h2>
            <p>Data silos destroy enterprise efficiency. We create a unified mesh across your entire technology stack, ensuring your CRM, ERP, and internal databases communicate flawlessly in real-time.</p>
            <ul className="bullet-list">
              <li>Legacy system API modernization</li>
              <li>Multi-cloud data orchestration</li>
              <li>Automated cross-platform syncing</li>
            </ul>
            <div className="result-box">
              <strong>Average Client Result</strong>
              <span>Eliminated data silos, improving executive reporting speed by 3x.</span>
            </div>
            <Link to="/contact" className="btn-outline">Discuss Your Integration Setup</Link>
          </div>
        </div>

        <div className="solution-block" data-aos="fade-up">
          <div className="solution-content">
            <h2>Applied AI &amp; Workflow Automation</h2>
            <p>We operationalize AI to handle heavy lifting. Rather than generic chatbots, we embed custom machine learning directly into your operational pipelines to handle complex, repetitive tasks automatically.</p>
            <ul className="bullet-list">
              <li><strong>Finance:</strong> Automated compliance auditing and anomaly detection.</li>
              <li><strong>Logistics:</strong> Real-time predictive maintenance models for fleets.</li>
              <li><strong>Operations:</strong> Intelligent Document Processing (IDP) for rapid invoice and contract sorting.</li>
            </ul>
            <div className="result-box">
              <strong>Average Client Result</strong>
              <span>Reduced manual processing time by 60%, saving 400+ hours per month.</span>
            </div>
            <Link to="/contact" className="btn-outline">Get an AI Automation Demo</Link>
          </div>
        </div>

        <div className="solution-block" data-aos="fade-up">
          <div className="solution-content">
            <h2>Cloud-Native Software Engineering</h2>
            <p>Off-the-shelf SaaS rarely fits a uniquely complex business model. We engineer highly secure, scalable, bespoke applications designed specifically to run in high-performance cloud environments.</p>
            <ul className="bullet-list">
              <li>Microservices architecture for zero-downtime updates</li>
              <li>Secure DevSecOps deployment pipelines</li>
              <li>High-performance internal portals and dashboards</li>
            </ul>
            <div className="result-box">
              <strong>Average Client Result</strong>
              <span>Replaced 4 fragmented legacy tools with 1 unified, high-speed platform.</span>
            </div>
            <Link to="/contact" className="btn-outline">Talk to a Lead Engineer</Link>
          </div>
        </div>

      </section>

      <section style={{ background: 'var(--bg-main)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up">
          <h2 className="section-title">Execution &amp; Results</h2>
        </div>

        <div className="case-studies-wrap">
          <div className="case-card" data-aos="fade-up">
            <h3>Global Supply Chain Corp</h3>
            <p className="case-text"><strong>Problem:</strong> Processing thousands of international shipping manifests manually led to severe delays and high error rates.</p>
            <p className="case-text"><strong>Solution:</strong> ELTS deployed an Intelligent Document Processing (IDP) AI model integrated directly into their ERP.</p>
            <div className="case-metric">Result: 94% faster processing with zero data-entry errors.</div>
          </div>

          <div className="case-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Regional Retail Bank</h3>
            <p className="case-text"><strong>Problem:</strong> Nightly batch processing on aging on-premise servers took 8 hours, threatening opening-bell operations.</p>
            <p className="case-text"><strong>Solution:</strong> We architected a secure AWS Hybrid Cloud migration, optimizing their databases for modern cloud compute.</p>
            <div className="case-metric">Result: Batch processing reduced from 8 hours to 45 minutes.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
