import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ServiceCloud() {
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
        <h1>Hybrid Cloud Consulting &amp; Services</h1>
        <p>At ELTS, we design, implement, and manage hybrid cloud environments that combine on-premise infrastructure with leading cloud platforms like Amazon Web Services, Microsoft Azure, and Google Cloud Platform.</p>
      </header>

      <section style={{ padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div className="content-wrap">

          <div style={{ textAlign: 'center', marginBottom: '20px' }} data-aos="fade-up">
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)' }}>How We Deliver Value</h2>
            <p>We help organizations modernize legacy systems, improve performance, and reduce infrastructure costs—without compromising security or disrupting operations.</p>
          </div>

          <div className="capabilities-grid">
            <div className="cap-card" data-aos="fade-up">
              <h4>1. Hybrid Cloud Strategy &amp; Architecture</h4>
              <p>We assess your current infrastructure and design a hybrid architecture tailored to your business needs. Not everything belongs in the cloud—and we make sure only the right workloads move.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>2. Seamless Cloud Migration</h4>
              <p>We migrate applications, databases, and workloads from on-premise systems to cloud environments with minimal downtime. Legacy systems are restructured to perform efficiently in a hybrid setup.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>3. Infrastructure Integration</h4>
              <p>We connect your on-premise systems with cloud platforms using secure networking, APIs, and data pipelines—ensuring real-time communication and zero operational friction.</p>
            </div>
            <div className="cap-card" data-aos="fade-up">
              <h4>4. Security &amp; Compliance</h4>
              <p>We implement enterprise-grade security across your hybrid environment.</p>
              <ul>
                <li>Data encryption (in transit &amp; at rest)</li>
                <li>Identity &amp; access management</li>
                <li>Compliance-ready architecture (government &amp; enterprise standards)</li>
              </ul>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>5. Cost Optimization</h4>
              <p>Most companies overspend on cloud. We fix that. We monitor usage, eliminate waste, and optimize resources so you only pay for what you actually need.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>6. Monitoring &amp; Managed Services</h4>
              <p>We provide continuous monitoring, performance tuning, and proactive support to ensure high availability and zero downtime for mission-critical systems.</p>
            </div>
          </div>

          <div style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid var(--border)', padding: '40px', borderRadius: '8px', marginTop: '20px', textAlign: 'center' }} data-aos="fade-up">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-main)' }}>Why Hybrid Cloud Matters</h3>
            <p>A fully cloud-based or fully on-premise setup is rarely optimal. Hybrid cloud gives you:</p>
            <div className="why-tags">
              <span className="why-tag">Flexibility to scale</span>
              <span className="why-tag">Control over sensitive data</span>
              <span className="why-tag">Better performance</span>
              <span className="why-tag">Reduced costs</span>
            </div>
          </div>

        </div>
      </section>

      <section style={{ background: 'var(--bg-main)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem', color: 'var(--text-main)' }} data-aos="fade-up">Execution in Action</h2>

        <div className="video-case-study" data-aos="fade-up">
          <div className="video-thumbnail">
            <video controls poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop">
              <source src="cloud-case-study.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-info">
            <div>
              <span style={{ color: 'var(--purple)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>Case Study</span>
              <h3>Data Centre and Public Cloud Deployment</h3>
              <p>Watch how Hybrid Cloud architectures allow rapid scaling without compromising underlying data security.</p>
            </div>
            <button className="read-more-btn" onClick={openModal}>
              Read Full Case Study <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="cta-band" data-aos="fade-up">
        <h2>Ready to optimize your infrastructure?</h2>
        <p>Speak directly with a lead cloud architect about your deployment strategy.</p>
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
            <h3>Enterprise Cloud Scaling: A Deep Dive</h3>
            <p><strong style={{ color: '#fff' }}>The Challenge:</strong> A regional retail bank was facing severe hardware limitations during peak traffic spikes, threatening opening-bell operations. Moving entirely to a public cloud exposed sensitive financial data to unacceptable regulatory risks.</p>
            <p><strong style={{ color: '#fff' }}>The ELTS Solution:</strong> We architected a secure mesh connecting their physical servers to AWS. We kept their critical databases locked in proprietary on-premise servers while pushing front-end applications to the public cloud for infinite scale and speed.</p>

            <h4>Key Technical Implementations:</h4>
            <ul>
              <li><strong>Multi-Environment Orchestration:</strong> Managed AWS and on-premise resources from a unified control plane.</li>
              <li><strong>Dynamic Resource Scaling:</strong> Automated rules shifted compute power based on live traffic, preventing over-provisioning.</li>
              <li><strong>Data Residency Compliance:</strong> Ensured PII never left the bank's physical borders.</li>
            </ul>

            <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--blue)', padding: '20px', marginTop: '30px', fontStyle: 'italic', color: 'var(--text-main)' }}>
              "By adopting the hybrid model, the bank achieved 99.99% uptime and reduced their nightly batch processing time from 8 hours to just 45 minutes, entirely modernizing their operational speed."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
