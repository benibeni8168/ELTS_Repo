import React from 'react';

export default function Support() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0B0F14', color: '#F9FAFB' }}>
      <header style={{ padding: '160px 5vw 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Support</h1>
        <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          Our support team helps keep your infrastructure running securely and reliably. Contact us for operations support, incident response, or managed services.
        </p>
      </header>

      <section style={{ padding: '80px 5vw', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Service Desk',
                description: 'Submit support requests, monitor incident progress, and get expert guidance from our operations team.',
              },
              {
                title: 'Managed Operations',
                description: 'We help you operate critical environments with security, change control, and 24/7 monitoring.',
              },
              {
                title: 'Incident Response',
                description: 'Rapid support for production incidents, root cause analysis, and recovery planning across your digital ecosystem.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#111827', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '30px' }}>
                <h2 style={{ marginBottom: '14px', color: '#7C3AED' }}>{item.title}</h2>
                <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#111827', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '34px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Support</h2>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8, marginBottom: '18px' }}>
              Email us at <a href="mailto:sales@teindi.com" style={{ color: '#3B82F6', textDecoration: 'none' }}>sales@teindi.com</a> or use the contact page to request a consultation.
            </p>
            <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
              For urgent infrastructure issues, our support desk is available to help restore operations quickly and securely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
