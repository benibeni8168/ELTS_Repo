import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ServiceSecurity() {
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
        <h1>Cyber Security Solutions &amp; Software</h1>
        <p style={{ color: 'var(--blue)', fontWeight: 500, marginBottom: '15px' }}>Securing Digital Infrastructure Against Modern Threats</p>
        <p>At ELTS, we deliver enterprise-grade cybersecurity solutions designed to protect critical infrastructure, networks, applications, and data from evolving cyber threats. As organizations adopt hybrid environments, connected systems, and remote operations, we help construct secure digital ecosystems through advanced security architecture and proactive threat management.</p>
      </header>

      <section style={{ padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div className="content-wrap">
          <h2 style={{ fontSize: '2.2rem', textAlign: 'center', color: 'var(--text-main)' }} data-aos="fade-up">What We Do</h2>

          <div className="capabilities-grid">
            <div className="cap-card" data-aos="fade-up">
              <h4>Network Security</h4>
              <p>We secure enterprise networks via next-generation firewalls, secure segmentation, intrusion detection systems (IDS), and VPN access security.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Endpoint Protection</h4>
              <p>Every device is a potential attack surface. We deploy advanced security solutions to protect servers, workstations, and remote systems from malware.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Cloud &amp; Hybrid Security</h4>
              <p>We implement strict frameworks that protect workloads, identities, and data across distributed AWS, Azure, and Google Cloud environments.</p>
            </div>
            <div className="cap-card" data-aos="fade-up">
              <h4>Threat Detection (SIEM)</h4>
              <p>Continuous log monitoring, threat intelligence integration, and automated incident detection to neutralize anomalies in real-time.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Identity Access (IAM)</h4>
              <p>Secure identity frameworks including Multi-factor authentication (MFA), role-based access control, and strict privileged access governance.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Vulnerability Audits</h4>
              <p>Identify security gaps across infrastructure via comprehensive assessments, penetration testing, and compliance-focused audits.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-card)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div data-aos="fade-right">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>Why Cybersecurity Matters</h3>
            <p style={{ marginBottom: '15px' }}>Modern cyberattacks actively target operational disruption, financial systems, sensitive data, and connected government infrastructure. Without a proactive security strategy, organizations risk catastrophic downtime and compliance violations.</p>
          </div>
          <div data-aos="fade-left">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>Why ELTS?</h3>
            <p>We approach cybersecurity as an operational strategy—not just a software deployment. Our team designs security ecosystems that combine prevention, detection, monitoring, and rapid response to ensure infrastructure remains resilient against evolving digital threats.</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-main)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: 'var(--text-main)' }} data-aos="fade-up">Execution in Action</h2>

        <div className="video-case-study" data-aos="fade-up">
          <div className="video-thumbnail">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" alt="Security Case Study" />
          </div>
          <div className="video-info">
            <div>
              <span style={{ color: 'var(--purple)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>Case Study</span>
              <h3>SOC &amp; Security Products</h3>
              <p>Learn how our proactive security frameworks eliminate lateral movement inside enterprise networks and municipal infrastructure.</p>
            </div>
            <button className="read-more-btn" onClick={openModal}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="cta-band" data-aos="fade-up">
        <h2>Is your infrastructure truly secure?</h2>
        <p>Speak directly with a lead security architect about performing a comprehensive audit.</p>
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
            <h3>Zero-Trust Implementation: Municipal Infrastructure</h3>
            <p><strong style={{ color: '#fff' }}>The Challenge:</strong> A growing smart city network relied on outdated perimeter defenses. The risk of a catastrophic data breach—which could lead to operational paralysis and a loss of public trust—became imminent.</p>
            <p><strong style={{ color: '#fff' }}>The ELTS Solution:</strong> We engineered and deployed a state-of-the-art Security Operations Center (SOC), transitioning the municipal network to a strict Zero-Trust architecture where every request is cryptographically verified.</p>

            <h4>Key Technical Implementations:</h4>
            <ul>
              <li><strong>Identity Access Management (IAM):</strong> Enforced strict role-based controls guaranteeing least privilege.</li>
              <li><strong>Continuous Threat Monitoring:</strong> 24/7 automated network surveillance detects and isolates anomalies instantly.</li>
              <li><strong>Automated Compliance:</strong> Frameworks continuously align with regulatory standards, generating audit reports automatically.</li>
            </ul>

            <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--blue)', padding: '20px', marginTop: '30px', fontStyle: 'italic', color: 'var(--text-main)' }}>
              "Following the SOC deployment, the municipality achieved full compliance and has reported zero network breaches."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
