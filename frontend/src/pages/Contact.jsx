import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Message sent:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, SF, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@eventpro.com',
      emoji: '🌉'
    },
    {
      city: 'New York',
      address: '456 Broadway, New York, NY 10013',
      phone: '+1 (212) 555-0456',
      email: 'ny@eventpro.com',
      emoji: '🗽'
    },
    {
      city: 'London',
      address: '789 High Street, London, UK SW1A 1AA',
      phone: '+44 (20) 7946 0958',
      email: 'uk@eventpro.com',
      emoji: '🇬🇧'
    }
  ]

  return (
    <div className="contact">
      <div className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-layout">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>📞 Quick Contact</h3>
              <div className="contact-item">
                <span className="label">General Inquiries</span>
                <a href="mailto:support@eventpro.com">support@eventpro.com</a>
              </div>
              <div className="contact-item">
                <span className="label">Phone</span>
                <a href="tel:+18005386876">+1 (800) 538-6876</a>
              </div>
              <div className="contact-item">
                <span className="label">Hours</span>
                <span>Mon-Fri, 9 AM - 6 PM EST</span>
              </div>
            </div>

            <div className="info-card">
              <h3>🕐 Response Time</h3>
              <p>We typically respond to inquiries within 24 hours during business days.</p>
            </div>

            <div className="info-card">
              <h3>🌍 Follow Us</h3>
              <div className="social-links">
                <a href="#facebook" className="social">Facebook</a>
                <a href="#twitter" className="social">Twitter</a>
                <a href="#linkedin" className="social">LinkedIn</a>
                <a href="#instagram" className="social">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="offices-section">
          <h2>Our Offices</h2>
          <div className="offices-grid">
            {offices.map((office, idx) => (
              <div key={idx} className="office-card">
                <span className="office-emoji">{office.emoji}</span>
                <h3>{office.city}</h3>
                <address className="office-address">{office.address}</address>
                <div className="office-contact">
                  <p>
                    <strong>Phone:</strong> <a href={`tel:${office.phone}`}>{office.phone}</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
