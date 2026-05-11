import React, { useState } from 'react';
import '../styles/Contact.css';
import { submitContactForm } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: `${formData.interest ? `Interest: ${formData.interest}\n\n` : ''}${formData.message}`,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', interest: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page" style={{ paddingTop: '100px', background: '#0B0F14', minHeight: '100vh', color: '#F9FAFB' }}>
      <section className="contact-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1>Get In Touch</h1>
          <p style={{ maxWidth: '760px', margin: '0 auto', color: '#9CA3AF', lineHeight: 1.8 }}>
            Speak directly with an enterprise solutions architect about your infrastructure, security, or automation needs.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '40px' }}>
          <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '36px' }}>
            <div style={{ marginBottom: '30px' }}>
              <h2>Contact Details</h2>
              <p style={{ color: '#D1D5DB', lineHeight: 1.8 }}>
                For enterprise inquiries, send us the details and our team will respond quickly.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '24px' }}>
              <div>
                <h4 style={{ color: '#F9FAFB', marginBottom: '10px' }}>Corporate Headquarters</h4>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>T-21/22 Manish Global Mall, Dwarka Sector 22, New Delhi, Delhi 110077</p>
              </div>
              <div>
                <h4 style={{ color: '#F9FAFB', marginBottom: '10px' }}>Direct Communications</h4>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>Sales: sales@teindi.com<br />Support: support@teindi.com</p>
              </div>
              <div>
                <h4 style={{ color: '#F9FAFB', marginBottom: '10px' }}>Enterprise Desk</h4>
                <p style={{ color: '#9CA3AF', lineHeight: 1.8 }}>+91 981-833-7834</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '36px', display: 'grid', gap: '20px' }}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Area of Interest</label>
              <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
                <option value="">Select an option...</option>
                <option value="Hybrid Cloud Deployment">Hybrid Cloud Deployment</option>
                <option value="Cyber Security Audit">Cyber Security Audit</option>
                <option value="AI Automation Strategy">AI Automation Strategy</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Sending...' : 'Request Architect Call'}
            </button>
            {submitted && (
              <div style={{ color: '#34D399', padding: '12px 14px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.12)', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                ? Request submitted. We will contact you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
