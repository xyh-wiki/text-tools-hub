/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:Contact 页面组件
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '../../context/ToastContext';

export const ContactPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { showToast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      showToast('Please enter a message.', 'error');
      return;
    }
    showToast('Your message has been noted locally. No data was sent to any server.', 'success');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="page section">
      <Helmet>
        <title>Contact | Text Tools Hub</title>
        <meta
          name="description"
          content="Get in touch with the maintainer of Text Tools Hub to suggest new tools or report issues."
        />
      </Helmet>
      <h1>Contact</h1>
      <p>
        Have an idea for a new tool or found an issue? Use the form below to send a message. The
        submission is handled locally and no data is transmitted.
      </p>
      <form onSubmit={onSubmit} className="tool-layout-main" style={{ maxWidth: 600 }}>
        <div className="form-row">
          <label>
            Email (optional)
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Subject
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="Suggestion, bug report, question..."
            />
          </label>
        </div>
        <div className="form-row" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={6}
          />
        </div>
        <div className="form-row">
          <button type="submit" className="btn-primary">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};
