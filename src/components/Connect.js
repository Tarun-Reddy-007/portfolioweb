import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope, FaGithub, FaMedium } from 'react-icons/fa';
import './Connect.css';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' }); // idle | loading | success | error

  const submitMessage = async (name, email, message) => {
    setStatus({ state: 'loading', msg: 'Sending...' });
    try {
      const res = await fetch('https://tarun-c-reddy-default-rtdb.firebaseio.com/UserData.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, ts: Date.now() })
      });
      if (!res.ok) throw new Error('Network response not ok');
      setFormData({ name: '', email: '', message: '' });
      setStatus({ state: 'success', msg: 'Message sent. Thank you!' });
    } catch (err) {
      setStatus({ state: 'error', msg: 'Failed to send. Please retry.' });
    } finally {
      setTimeout(() => setStatus({ state: 'idle', msg: '' }), 3500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus({ state: 'error', msg: 'All fields are required.' });
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ state: 'error', msg: 'Enter a valid email address.' });
      return;
    }
    submitMessage(name, email, message);
  };

  return (
    <div className="connect-page">
      <TopNav />

      <header className="connect-header">
        <h2>Connect</h2>
        <p>Reach out for collaboration, opportunities or a friendly hello.</p>
      </header>

      <main className="connect-content">
        <section className="connect-form-card" aria-labelledby="connect-form-title">
          <h3 id="connect-form-title">Send a message</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send'}
            </button>
            {status.msg && (
              <div className={`form-status ${status.state}`}>{status.msg}</div>
            )}
          </form>
        </section>

        <aside className="connect-social" aria-label="Social links">
          <h3>Elsewhere</h3>
          <ul className="social-list">
            <li><a href="https://www.facebook.com/TARUN.reddy.5268750" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://www.linkedin.com/in/tarun-c-reddy-04684b178/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://www.instagram.com/tarunreddy_007/?hl=en" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="mailto:tarunreddy15112001@gmail.com" aria-label="Email"><FaEnvelope /></a></li>
            <li><a href="https://github.com/Tarun-Reddy-007" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://medium.com/@tarunreddy007" aria-label="Medium" target="_blank" rel="noreferrer"><FaMedium /></a></li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Connect;
