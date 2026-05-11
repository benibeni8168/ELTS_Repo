import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ServiceMigration() {
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
        <h1>IT Cloud Migration</h1>
        <p style={{ color: 'var(--blue)', fontWeight: 500, marginBottom: '15px' }}>Modernize Infrastructure. Minimize Downtime. Maximize Scalability.</p>
        <p>At ELTS, we help organizations migrate applications, workloads, databases, and infrastructure from traditional on-premise environments to secure and scalable cloud ecosystems. Our services reduce operational complexity, improve performance, and enable businesses to scale faster while maintaining security and business continuity.</p>
      </header>

      <section style={{ padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div className="content-wrap">
          <h2 style={{ fontSize: '2.2rem', textAlign: 'center', color: 'var(--text-main)' }} data-aos="fade-up">What We Do</h2>

          <div className="capabilities-grid">
            <div className="cap-card" data-aos="fade-up">
              <h4>Infrastructure Migration</h4>
              <p>We migrate physical and virtual server environments to cloud platforms such as AWS, Microsoft Azure, and Google Cloud Platform with minimal operational disruption.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Application Migration</h4>
              <p>Legacy and business-critical applications are restructured, optimized, and migrated to cloud-native or hybrid environments for scalable performance.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Data &amp; Database Migration</h4>
              <p>We securely transfer enterprise data, databases, and storage systems while maintaining 100% data integrity, accessibility, and strict compliance.</p>
            </div>
            <div className="cap-card" data-aos="fade-up">
              <h4>Hybrid Cloud Transition</h4>
              <p>Not every workload should move fully to the cloud. We build hybrid environments integrating existing on-premise systems with modern cloud infrastructure.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Security &amp; Compliance</h4>
              <p>Security is integrated at every stage: Data encryption, Identity access management, Backup recovery, and Compliance-focused deployment architecture.</p>
            </div>
            <div className="cap-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Post-Migration Optimization</h4>
              <p>Migration is just the beginning. We optimize cloud resources, monitor performance, and reduce unnecessary spending to ensure long-term efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-card)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div data-aos="fade-right">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>Why Migrate?</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Reduce infrastructure &amp; maintenance costs</li>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Improve scalability and flexibility</li>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Enable remote and distributed operations</li>
              <li style={{ marginBottom: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--blue)', marginRight: '10px' }}></i> Strengthen disaster recovery capabilities</li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>Why ELTS?</h3>
            <p>We don't approach cloud migration as a simple data transfer process. We engineer migration strategies aligned with operational goals, security requirements, and long-term scalability—ensuring organizations move to the cloud with confidence, control, and minimal business disruption.</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-main)', padding: '100px 5vw', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: 'var(--text-main)' }} data-aos="fade-up">Execution in Action</h2>

        <div className="video-case-study" data-aos="fade-up">
          <div className="video-thumbnail">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" alt="Migration Case Study" />
          </div>
          <div className="video-info">
            <div>
              <span style={{ color: 'var(--purple)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>Case Study</span>
              <h3>Enterprise Cloud Transition</h3>
              <p>Learn how we migrated a massive, aging regional banking infrastructure to a secure, high-speed modern cloud with zero operational downtime.</p>
            </div>
            <button className="read-more-btn" onClick={openModal}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="cta-band" data-aos="fade-up">
        <h2>Ready to modernize your systems?</h2>
        <p>Speak directly with a lead migration architect about your transition strategy.</p>
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
            <h3>Enterprise Cloud Transition: Regional Bank</h3>
            <p><strong style={{ color: '#fff' }}>The Challenge:</strong> A regional bank was running entirely on aging, siloed legacy infrastructure. Nightly batch processing took up to 8 hours, threatening operations. Migrating this data carried severe risks of operational downtime and potential data corruption.</p>
            <p><strong style={{ color: '#fff' }}>The ELTS Solution:</strong> We designed and executed a strictly governed, risk-free migration to a secure modern cloud environment using automated deployment tools to move the data rapidly while maintaining 100% integrity.</p>

            <h4>Key Technical Implementations:</h4>
            <ul>
              <li><strong>Parallel Environment Syncing:</strong> Allowed operations to continue seamlessly in the background.</li>
              <li><strong>Strict Risk Mitigation:</strong> Extensive pre-migration stress testing guaranteed zero data loss.</li>
              <li><strong>FinOps Restructuring:</strong> Optimized workloads to fully leverage cloud compute efficiencies.</li>
            </ul>

            <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--blue)', padding: '20px', marginTop: '30px', fontStyle: 'italic', color: 'var(--text-main)' }}>
              "Post-migration, the bank reported zero instances of operational downtime and saw their critical batch processing times reduced by 90%."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
