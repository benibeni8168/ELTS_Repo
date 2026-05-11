import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceSecurity() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Cyber Security Solutions</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          We deliver enterprise-grade cybersecurity architecture to protect networks, cloud workloads, applications, and critical data.
        </p>
      </header>

      <section style={{ padding: '80px 5vw', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Security Capabilities</h2>
            <p style={{ color: '#D1D5DB' }}>We build security ecosystems that combine prevention, detection, monitoring, and rapid response for hybrid enterprise environments.</p>
          </div>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Network Security', text: 'Protect enterprise networks with next-gen firewalls, segmentation, and intrusion detection.' },
              { title: 'Endpoint Protection', text: 'Secure devices and servers with advanced threat prevention and monitoring.' },
              { title: 'Cloud & Hybrid Security', text: 'Protect workloads and identities across hybrid cloud environments.' },
              { title: 'Threat Detection (SIEM)', text: 'Detect anomalies in real-time with continuous log monitoring and threat intelligence.' },
              { title: 'Identity & Access Management', text: 'Enforce least privilege with MFA, RBAC, and strong identity controls.' },
              { title: 'Vulnerability Audits', text: 'Find and fix security gaps with penetration testing and compliance assessments.' },
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
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why Cybersecurity Matters</h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
              Modern cyber threats target mission-critical data, infrastructure, and operational continuity. A proactive security strategy is essential to avoid breaches and service disruption.
            </p>
          </div>
          <div style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why ELTS?</h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
              We treat security as a continuous operational practice: prevention, monitoring, and rapid response are designed to work together rather than in isolation.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Secure your infrastructure today</h2>
        <p style={{ color: '#D1D5DB', maxWidth: '760px', margin: '0 auto 32px' }}>
          Talk to a lead security architect about risk reduction, Zero-Trust controls, and compliance.
        </p>
        <Link to="/contact" className="btn-primary">
          Book a Technical Call
        </Link>
      </section>
    </div>
  );
}
