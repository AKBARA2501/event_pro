import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: 'Tech Summit 2026',
      category: 'Conference',
      date: 'Mar 15, 2026',
      location: 'San Francisco',
      attendees: 1200,
      image: '🎤'
    },
    {
      id: 2,
      title: 'Annual Gala Night',
      category: 'Party',
      date: 'Mar 20, 2026',
      location: 'New York',
      attendees: 500,
      image: '🎭'
    },
    {
      id: 3,
      title: 'Music Festival',
      category: 'Festival',
      date: 'Apr 05, 2026',
      location: 'Miami',
      attendees: 5000,
      image: '🎵'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Create & Manage Unforgettable Events</h1>
            <p>Host, discover, and manage events with ease. Connect with thousands of event enthusiasts.</p>
            <div className="hero-buttons">
              <Link to="/create-event" className="btn btn-primary btn-large">Create Event Now</Link>
              <Link to="/events" className="btn btn-outline btn-large">Browse Events</Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>10K+</h3>
              <p>Events Created</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat">
              <h3>100K+</h3>
              <p>Attendees</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Artify Aura?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Easy Creation</h3>
              <p>Create professional events in minutes with our intuitive event builder.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Track attendance, engagement, and event metrics in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Payments</h3>
              <p>Secure payment processing with multiple payment options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>Notifications</h3>
              <p>Keep attendees updated with automated email reminders.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎟️</div>
              <h3>Ticketing</h3>
              <p>Flexible ticketing options with QR code validation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Connect with event enthusiasts worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <h2 className="section-title">Featured Events</h2>
          <div className="grid grid-3">
            {featuredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">{event.image}</div>
                <div className="event-info">
                  <span className="badge badge-primary">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p className="event-date">📅 {event.date}</p>
                  <p className="event-location">📍 {event.location}</p>
                  <p className="event-attendees">👥 {event.attendees} attending</p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Host Your Event?</h2>
          <p>Join thousands of event organizers who use Artify Aura</p>
          <Link to="/create-event" className="btn btn-secondary">Start Creating</Link>
        </div>
      </section>
    </div>
  )
}
