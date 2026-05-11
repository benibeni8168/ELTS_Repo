import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Support() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ issueType: '', email: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ issueType: '', email: '', description: '' });
  };

  return (
    <div>
      <button className="floating-back-btn" onClick={() => navigate(-1)} title="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <header className="page-header" data-aos="fade-up">
        <h1>Talk to an Engineer</h1>
        <p>Skip the automated bots. Submit your details below to connect directly with our technical support team.</p>
      </header>

      <div className="support-wrapper" data-aos="fade-up" data-aos-delay="100">

        <div className="trust-banner">
          <i className="fa-solid fa-shield-halved"></i>
          <div>
            <p><strong>Priority Response Active</strong></p>
            <span>We typically respond to enterprise inquiries within 15–30 minutes. Your data is encrypted and strictly confidential.</span>
          </div>
        </div>

        <form className="support-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Issue Category</label>
            <select name="issueType" value={formData.issueType} onChange={handleChange} required>
              <option value="" disabled>Select the affected system...</option>
              <option value="Cloud Infrastructure">Cloud Infrastructure / Server Outage</option>
              <option value="Security">Security Protocol / Access Issue</option>
              <option value="Software">Software / AI Integration Bug</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>

          <div className="input-group">
            <label>Work Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g., cto@yourcompany.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Description of Issue</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Please provide specific details, error codes, or system logs if applicable..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit">Submit Ticket Securely</button>

          {submitted && (
            <div className="success-msg">
              <i className="fa-solid fa-circle-check"></i> Ticket received. An engineer will email you shortly.
            </div>
          )}
        </form>

      </div>

      <div className="secondary-support" data-aos="fade-up">
        <button className="support-link"><i className="fa-solid fa-book-open"></i> API Documentation</button>
        <button className="support-link"><i className="fa-solid fa-file-shield"></i> Security Advisories</button>
        <button className="support-link"><i className="fa-solid fa-server"></i> System Status</button>
      </div>
    </div>
  );
}
