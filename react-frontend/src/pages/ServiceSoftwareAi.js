import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceSoftwareAi() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Enterprise AI Automation & Agentic AI</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          We build AI automation systems that integrate with enterprise workflows, enabling intelligent decision-making and operational efficiency.
        </p>
      </header>

      <section style={{ padding: '80px 5vw', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>AI Automation Services</h2>
            <p style={{ color: '#D1D5DB' }}>We deliver enterprise-ready automation systems that reduce manual effort and improve decision velocity across operations.</p>
          </div>
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Workflow Automation', text: 'Automate operationally intensive processes including document processing, approvals, and IT operations.' },
              { title: 'Agentic AI Systems', text: 'Deploy AI agents that can analyze context, make decisions, and execute tasks autonomously.' },
              { title: 'Infrastructure Integration', text: 'Integrate AI tools into your existing ERP, CRM and operational infrastructure for real-time automation.' },
              { title: 'Generative AI Solutions', text: 'Build secure GenAI capabilities for knowledge retrieval, document generation, and workflow copilots.' },
              { title: 'AI Data Readiness', text: 'Prepare your environment with secure data pipelines and cloud infrastructure built for AI workloads.' },
              { title: 'Security & Governance', text: 'Implement access controls, compliance checks, and monitoring for enterprise AI systems.' },
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
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Business Impact</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#D1D5DB', lineHeight: 1.8 }}>
              <li>Reduce manual workloads and operating costs.</li>
              <li>Increase process speed and decision accuracy.</li>
              <li>Enable intelligent business automation at scale.</li>
            </ul>
          </div>
          <div style={{ background: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Why Enable AI with ELTS?</h3>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
              We focus on practical AI deployment that supports existing enterprise systems and drives measurable improvements in operations.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Discuss your AI strategy</h2>
        <p style={{ color: '#D1D5DB', maxWidth: '760px', margin: '0 auto 32px' }}>
          Book a call with our AI engineering team to design intelligent automation for your business.
        </p>
        <Link to="/contact" className="btn-primary">
          Book a Technical Call
        </Link>
      </section>
    </div>
  );
}
