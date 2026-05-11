import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ServiceSoftwareAi() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => { setModalOpen(true); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setModalOpen(false); document.body.style.overflow = 'auto'; };

  return (
    <div>
      <button className="floating-back-btn" onClick={() => navigate(-1)} title="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="page-header" data-aos="fade-up">
        <h1>Enterprise AI Automation &amp; Agentic AI</h1>
        <p style={{ color: 'var(--blue)', fontWeight: 500, marginBottom: '15px' }}>Intelligent Automation for Modern Enterprises</p>
        <p>At ELTS, we help organizations transform operations through Enterprise AI Automation and Agentic AI systems that automate workflows, improve decision-making, and increase operational efficiency at scale. We design AI-driven ecosystems that integrate with existing enterprise infrastructure, enabling businesses to reduce manual processes and accelerate execution.</p>
      </header>

      <section style={{ padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div className="content-wrap">
          <h2 style={{ fontSize: '2.2rem', textAlign: 'center', color: 'var(--text-main)' }} data-aos="fade-up">What We Do</h2>

          <div className="capabilities-grid">
            <div className="cap-card" data-aos="fade-up">
              <h4>Workflow Automation</h4>
              <p>We automate operationally intensive processes across departments, including Document processing (IDP), IT operations, and internal approval workflows.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Agentic AI Systems</h4>
              <p>Agentic AI goes beyond fixed rules. Our AI agents can analyze context, make decisions, execute tasks, and interact with systems entirely autonomously.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Infrastructure Integration</h4>
              <p>We natively integrate AI into your existing ERP platforms, CRM systems, and internal business applications so it becomes part of the operational workflow.</p>
            </div>
            <div className="cap-card" data-aos="fade-up">
              <h4>Generative AI Solutions</h4>
              <p>We implement enterprise-ready GenAI systems for internal knowledge retrieval, intelligent document generation, and advanced workflow copilots.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>AI Data Readiness</h4>
              <p>AI is only as effective as the infrastructure behind it. We architect secure data pipelines, cloud setups, and GPU compute optimizations to prepare your environment.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Security &amp; Governance</h4>
              <p>Strict access control policies, data privacy frameworks, and continuous monitoring to ensure your AI models operate within compliance regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-card)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div data-aos="fade-right">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>Business Impact</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Reduced operational costs and manual dependency</li>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Faster process execution &amp; 24/7 intelligent operations</li>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Scalable business processes &amp; improved decision making</li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>Why ELTS?</h3>
            <p>We focus on practical AI implementation—not experimental hype. Instead of deploying disconnected AI tools, we build integrated AI environments that work across enterprise infrastructure, helping organizations move from manual operations to intelligent automation with measurable business impact.</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-main)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: 'var(--text-main)' }} data-aos="fade-up">Execution in Action</h2>

        <div className="video-case-study" data-aos="fade-up">
          <div className="video-thumbnail">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" alt="AI Case Study" />
          </div>
          <div className="video-info">
            <div>
              <span style={{ color: 'var(--purple)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>Case Study</span>
              <h3>Automating Enterprise Scale</h3>
              <p>See how custom AI workflows replace manual data processing across complex logistical networks.</p>
            </div>
            <button className="read-more-btn" onClick={openModal}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="cta-band" data-aos="fade-up">
        <h2>Ready to automate your workflows?</h2>
        <p>Discuss your data landscape with a lead AI engineer.</p>
        <Link to="/contact" className="btn-primary">Book a Technical Call</Link>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${modalOpen ? 'active' : ''}`}
        onClick={(e) => { if (e.target.classList.contains('modal-overlay')) closeModal(); }}
      >
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal-body">
            <h3>Automating Enterprise Scale: Global Logistics</h3>
            <p><strong style={{ color: '#fff' }}>The Challenge:</strong> A global logistics organization was facing a massive operational bottleneck. Processing thousands of international shipping manifests manually resulted in severe delays and scaling costs.</p>
            <p><strong style={{ color: '#fff' }}>The ELTS Solution:</strong> We developed and trained a secure, custom machine learning model on their proprietary data. We embedded these models directly into their existing operational pipelines, removing the human bottleneck from repetitive tasks.</p>

            <h4>Key Technical Implementations:</h4>
            <ul>
              <li><strong>Intelligent Document Processing (IDP):</strong> AI seamlessly reads, sorts, and inputs complex data from invoices into the company ERP.</li>
              <li><strong>Predictive Anomaly Detection:</strong> The model actively monitors logistics data to flag anomalies before human operators can spot them.</li>
              <li><strong>Automated Compliance Reporting:</strong> The system self-generates regulatory reports automatically.</li>
            </ul>

            <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--blue)', padding: '20px', marginTop: '30px', fontStyle: 'italic', color: 'var(--text-main)' }}>
              "By replacing manual data processing with custom AI workflows, the organization saw a 60% reduction in manual processing time, saving thousands of labor hours per month."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
