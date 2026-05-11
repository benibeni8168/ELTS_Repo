import React from 'react';

const caseStudies = [
  {
    id: 1,
    title: 'Smart City Platform Deployment',
    tag: 'Digital Infrastructure',
    summary: 'Delivered enterprise-grade digital infrastructure for a metropolitan smart city initiative, enabling citizen services, analytics, and secure operations.',
    impact: '40% faster response times, zero downtime during cutover, and improved compliance visibility.',
  },
  {
    id: 2,
    title: 'Hybrid Cloud Modernization',
    tag: 'Cloud Transformation',
    summary: 'Migrated a legacy public sector application into a hybrid cloud architecture, preserving compliance and reducing hosting costs.',
    impact: '30% reduction in operational expenditures and improved disaster recovery readiness.',
  },
];

export default function CaseStudies() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Case Studies</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          Explore how we help organizations modernize infrastructure, secure operations, and deliver measurable business outcomes.
        </p>
      </header>

      <section style={{ padding: '80px 5vw', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '32px' }}>
          {caseStudies.map((study) => (
            <div key={study.id} style={{ background: '#111827', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', padding: '40px' }}>
              <span style={{ color: '#7C3AED', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{study.tag}</span>
              <h2 style={{ margin: '20px 0', color: '#F9FAFB' }}>{study.title}</h2>
              <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>{study.summary}</p>
              <p style={{ marginTop: '24px', color: '#3B82F6', fontWeight: 600 }}>{study.impact}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
