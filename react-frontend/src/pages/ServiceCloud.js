import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCloud() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Hybrid Cloud Consulting & Services</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          We design, implement, and manage hybrid cloud environments that combine on-premise infrastructure with AWS, Azure, and Google Cloud.
          Our approach helps organizations modernize securely while preserving control of critical systems.
        </p>
      </header>

      <section style={{ padding: '80px 5vw', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>How We Deliver Value</h2>
            <p style={{ color: '#D1D5DB' }}>We help organizations modernize legacy systems, improve performance, and reduce infrastructure costs without compromising security.</p>
          </div>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Hybrid Cloud Strategy & Architecture', text: 'We assess your current infrastructure and design a hybrid architecture tailored to your business needs.' },
              { title: 'Seamless Cloud Migration', text: 'We migrate applications, databases, and workloads with minimal downtime and operational risk.' },
              { title: 'Infrastructure Integration', text: 'We connect on-premise systems with cloud platforms using secure networking and data pipelines.' },
              { title: 'Security & Compliance', text: 'We embed enterprise-grade security controls and compliance-ready architecture throughout the migration journey.' },
              { title: 'Cost Optimization', text: 'We eliminate cloud waste and optimize compute resources so you only pay for what you truly need.' },
              { title: 'Monitoring & Managed Services', text: 'We provide continuous monitoring, performance tuning, and proactive support for mission-critical systems.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '30px' }}>
                <h3 style={{ marginBottom: '14px', color: '#3B82F6' }}>{item.title}</h3>
                <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5vw', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why Migrate?</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#D1D5DB', lineHeight: 1.8 }}>
              <li>Reduce infrastructure and maintenance costs.</li>
              <li>Improve scalability and operational flexibility.</li>
              <li>Enable secure remote and distributed operations.</li>
              <li>Strengthen disaster recovery and availability.</li>
            </ul>
          </div>
          <div style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why ELTS?</h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
              We engineer migration strategies aligned with operational goals, security requirements, and long-term scalability—ensuring your hybrid cloud transition is confident, controlled, and resilient.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5vw' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Ready to modernize your infrastructure?</h2>
          <p style={{ maxWidth: '760px', margin: '0 auto 32px', color: '#D1D5DB' }}>
            Speak with a lead architect about your cloud strategy, migration path, and operational readiness.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Technical Call
          </Link>
        </div>
      </section>
    </div>
  );
}
