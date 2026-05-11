import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    title: 'Hybrid Cloud Architecture',
    description:
      'Design and implement secure hybrid cloud platforms that deliver reliability, compliance, and seamless workload mobility.',
    path: '/services/cloud',
  },
  {
    id: 2,
    title: 'Cloud Migration',
    description:
      'Migrate legacy applications and infrastructure to a hybrid cloud architecture with low risk and high reliability.',
    path: '/services/migration',
  },
  {
    id: 3,
    title: 'Cyber Security',
    description:
      'Deliver enterprise-grade security operations, identity governance, and threat detection for distributed systems.',
    path: '/services/security',
  },
  {
    id: 4,
    title: 'Intelligent Software & AI',
    description:
      'Build AI-enabled automation and intelligent software products that integrate with enterprise infrastructure.',
    path: '/services/software-ai',
  },
];

export default function Services() {
  return (
    <div className="services-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="services-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1>Services</h1>
          <p style={{ maxWidth: '780px', lineHeight: 1.8, color: '#bdbdbd' }}>
            Our services cover the full lifecycle of enterprise transformation: cloud strategy, security operations, systems
            integration, and AI-first automation. Every engagement is designed around measurable outcomes and long-term resilience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" data-aos="fade-up">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.path} className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
