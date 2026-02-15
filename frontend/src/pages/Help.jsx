import { useState } from 'react'
import './Help.css'

export default function Help() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How do I create an event?',
      answer: 'Click on "Create Event" in the navigation menu. Fill in event details, set date/time, location, and pricing. Review and publish your event.'
    },
    {
      id: 2,
      question: 'How can I book tickets for an event?',
      answer: 'Browse events in the Events section, click on an event, select number of tickets, and proceed to checkout.'
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers.'
    },
    {
      id: 4,
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel bookings up to 7 days before the event. Visit My Bookings and select the option to cancel.'
    },
    {
      id: 5,
      question: 'How do I edit my event?',
      answer: 'Go to My Events, find your event, click Edit, make changes, and save.'
    },
    {
      id: 6,
      question: 'Is there a refund policy?',
      answer: 'Full refunds are available for cancellations 7+ days before the event. 50% refund for 3-7 days before. No refunds within 3 days.'
    }
  ]

  const helpCategories = [
    { icon: '🎤', title: 'Getting Started', desc: 'Learn basics of creating and managing events' },
    { icon: '🎟️', title: 'Booking & Tickets', desc: 'How to purchase and manage your bookings' },
    { icon: '💳', title: 'Payments', desc: 'Payment methods and transaction information' },
    { icon: '👥', title: 'Account', desc: 'Profile settings and account management' }
  ]

  return (
    <div className="help">
      <div className="page-header">
        <div className="container">
          <h1>Help Center</h1>
          <p>Find answers to common questions and get support</p>
        </div>
      </div>

      <div className="container help-content">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for help..." 
            className="search-input"
          />
        </div>

        <div className="help-categories">
          {helpCategories.map((cat, idx) => (
            <div key={idx} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map(faq => (
              <div key={faq.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFAQ === faq.id ? '−' : '+'}</span>
                </button>
                {openFAQ === faq.id && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h2>Still Need Help?</h2>
          <p>Can't find what you're looking for? Get in touch with our support team.</p>
          <div className="contact-options">
            <div className="contact-option">
              <h4>📧 Email Support</h4>
              <p>support@eventpro.com</p>
              <p className="response-time">Response time: 24 hours</p>
            </div>
            <div className="contact-option">
              <h4>💬 Live Chat</h4>
              <p>Available 9 AM - 6 PM EST</p>
              <button className="btn btn-primary">Start Chat</button>
            </div>
            <div className="contact-option">
              <h4>📞 Phone Support</h4>
              <p>1-800-EVENT-PRO</p>
              <p className="response-time">Mon-Fri, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
