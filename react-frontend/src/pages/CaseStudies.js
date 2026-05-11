import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CaseStudies() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="floating-back-btn" onClick={() => navigate(-1)} title="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="page-header" data-aos="fade-up">
        <h1>Proven Impact</h1>
        <p style={{ color: 'var(--text-muted)' }}>Deep dives into our mission-critical enterprise deployments.</p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw 100px' }}>

        <article className="case-study-entry" data-aos="fade-up">
          <div className="case-content-grid">

            <div className="case-text">
              <span className="case-tag">Infrastructure &amp; Security</span>
              <h2>Enterprise-Scale Smart City &amp; Digital Infrastructure Delivery</h2>

              <p style={{ marginBottom: '15px' }}>We have successfully delivered a comprehensive, end-to-end digital infrastructure for a State Capital, encompassing IT, network, cybersecurity, SOC, and data center ecosystems.</p>
              <p style={{ marginBottom: '40px' }}>The solution integrates city-wide network infrastructure with a fully modernized, resilient data center environment—enabling seamless operations, scalability, and real-time intelligence.</p>

              <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem' }}>Our deployment includes:</h4>
              <ul className="tech-list">
                <li><strong>City Network Integration:</strong> Unified connectivity across distributed field systems, enabling secure and high-performance data exchange across urban infrastructure.</li>
                <li><strong>End-to-End Data Center Architecture:</strong> High-availability design covering application compute, AI/ML compute platforms, and enterprise-grade virtualization.</li>
                <li><strong>Next-Generation Storage:</strong> Scalable, high-performance storage systems optimized for both structured and unstructured workloads, including video analytics and AI data pipelines.</li>
                <li><strong>Data Center Networking:</strong> High-speed, resilient network fabric designed for east-west and north-south traffic optimization with built-in redundancy.</li>
              </ul>

              <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', marginTop: '40px' }}>Comprehensive Cybersecurity Stack:</h4>
              <ul className="tech-list">
                <li>Security Operations Center (SOC) with SIEM and advanced analytics</li>
                <li>Endpoint protection using EDR/XDR</li>
                <li>Privileged Identity Management (PIM) and Identity &amp; Access Management (IAM)</li>
                <li>Web Application Firewall (WAF) and Next-Generation Firewall (NGFW)</li>
                <li>Network Intrusion Prevention Systems (NIPS)</li>
                <li>Load Balancing (LB) for application availability</li>
                <li>Integrated Threat Intelligence Platforms for proactive defense</li>
              </ul>

              <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', marginTop: '40px' }}>IT Service &amp; Operations Management:</h4>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Implementation of ITSM and ITOM platforms for streamlined service delivery, monitoring, automation, and operational governance.</p>

              <div className="highlight-box">
                This deployment enables a secure, scalable, and intelligent digital backbone for the city—supporting mission-critical applications, real-time analytics, and future-ready smart governance initiatives.
              </div>
            </div>

            <div className="case-media">
              <div className="video-box">
                <video controls poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop">
                  <source src="herovideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="img-box" style={{ aspectRatio: '16/9', marginTop: '10px' }}>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
                  alt="Security Operations Center Interface"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="img-box" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"
                    alt="City Network Integration"
                  />
                </div>
                <div className="img-box" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=600&auto=format&fit=crop"
                    alt="Enterprise Data Center"
                  />
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}
