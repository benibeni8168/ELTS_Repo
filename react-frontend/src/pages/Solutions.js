import React from 'react';

export default function Solutions() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Solutions</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          We deliver integrated solutions that combine secure cloud platforms, intelligent automation, and resilient operations.
          Our focus is on practical deployments that support enterprise scale, regulatory requirements, and future-ready workflows.
        </p>
      </header>

      <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '80px 5vw' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'System Integration',
                description:
                  'Connect on-premise systems, cloud services, and data pipelines into a cohesive environment that operates securely and reliably.',
              },
              {
                title: 'Cloud Architecture',
                description:
                  'Design hybrid and multi-cloud architectures that balance cost, performance, and compliance while enabling rapid innovation.',
              },
              {
                title: 'AI Automation',
                description:
                  'Embed intelligent automation into workflows so business processes can adapt, scale, and execute with minimal manual effort.',
              },
              {
                title: 'Security Operations',
                description:
                  'Create proactive protection layers through continuous monitoring, incident response, and identity-driven controls.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#111827', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '30px' }}>
                <h2 style={{ marginBottom: '14px', color: '#3B82F6' }}>{item.title}</h2>
                <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gap: '20px', background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '34px' }}>
            <h2 style={{ fontSize: '2rem' }}>Outcomes We Deliver</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: '14px' }}>
              <li style={{ color: '#D1D5DB', lineHeight: 1.8 }}>Reduced time to market for enterprise applications.</li>
              <li style={{ color: '#D1D5DB', lineHeight: 1.8 }}>Stronger security posture across hybrid environments.</li>
              <li style={{ color: '#D1D5DB', lineHeight: 1.8 }}>Lower operational risk and clearer technical ownership.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
