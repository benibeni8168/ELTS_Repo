import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceMigration() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>IT Cloud Migration</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          We migrate applications, databases, and infrastructure to secure cloud ecosystems with minimal downtime and strong risk control.
        </p>
      </header>

      <section style={{ padding: '80px 5vw', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Migration Services</h2>
            <p style={{ color: '#D1D5DB' }}>From infrastructure to business applications, our migration services preserve data integrity and operational continuity.</p>
          </div>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Infrastructure Migration', text: 'Move physical and virtual server environments into secure cloud platforms like AWS, Azure, and Google Cloud.' },
              { title: 'Application Migration', text: 'Replatform legacy applications for better scale and performance without disrupting business users.' },
              { title: 'Data & Database Migration', text: 'Transfer enterprise data securely while preserving accessibility, integrity, and compliance.' },
              { title: 'Hybrid Cloud Transition', text: 'Integrate on-premise systems with cloud infrastructure so critical workloads stay where they belong.' },
              { title: 'Security & Compliance', text: 'Embed security controls and audit-ready processes at every migration stage.' },
              { title: 'Post-Migration Optimization', text: 'Tune your cloud environment for efficiency and long-term cost savings after migration completes.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '30px' }}>
                <h3 style={{ marginBottom: '14px', color: '#3B82F6' }}>{item.title}</h3>
                <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5vw' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why Migration Matters</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#D1D5DB', lineHeight: 1.8 }}>
              <li>Reduce maintenance and hosting costs.</li>
              <li>Improve scalability and business agility.</li>
              <li>Ensure disaster recovery and resilience.</li>
              <li>Enable secure cloud-native operations.</li>
            </ul>
          </div>
          <div style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why ELTS?</h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
              Our migration practice is engineered around risk reduction, operational continuity, and measurable outcomes for enterprise customers.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Talk to a migration architect</h2>
        <p style={{ color: '#D1D5DB', maxWidth: '760px', margin: '0 auto 32px' }}>
          Book a consultation to review your migration strategy, risk profile, and transition roadmap.
        </p>
        <Link to="/contact" className="btn-primary">
          Book a Technical Call
        </Link>
      </section>
    </div>
  );
}
