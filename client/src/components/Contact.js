import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_h5ygrvm';
const TEMPLATE_ID = 'template_wdbj2mx';
const USER_ID = 'P6agrXgvNruvO3cZN';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    }, USER_ID)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert('Failed to send message: ' + err.text);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Contact</h2>
        <div className="card" style={{ maxWidth: 500, margin: '0 auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', color: '#cccccc', fontWeight: 600, fontSize: '1.2rem' }}>
              Thank you for reaching out!<br />Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 15 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%', 
                    padding: 10, 
                    borderRadius: 6, 
                    border: '1px solid #444444',
                    background: '#2d2d2d',
                    color: '#e0e0e0',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%', 
                    padding: 10, 
                    borderRadius: 6, 
                    border: '1px solid #444444',
                    background: '#2d2d2d',
                    color: '#e0e0e0',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  style={{ 
                    width: '100%', 
                    padding: 10, 
                    borderRadius: 6, 
                    border: '1px solid #444444',
                    background: '#2d2d2d',
                    color: '#e0e0e0',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ 
                    width: '100%', 
                    padding: 10, 
                    borderRadius: 6, 
                    border: '1px solid #444444',
                    background: '#2d2d2d',
                    color: '#e0e0e0',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 