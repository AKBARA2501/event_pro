import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: 'Neon Nights Festival',
      category: 'Festival',
      date: 'Mar 15, 2026',
      location: 'San Francisco',
      attendees: 1200,
      image: '🌟',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Midnight Gala Night',
      category: 'Party',
      date: 'Mar 20, 2026',
      location: 'New York',
      attendees: 500,
      image: '🎭',
      color: 'pink'
    },
    {
      id: 3,
      title: 'Sunset Beach Bash',
      category: 'Beach Party',
      date: 'Apr 05, 2026',
      location: 'Miami',
      attendees: 5000,
      image: '🌊',
      color: 'cyan'
    }
  ]

  return (
    <div className="home animate-up">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Spark your imagination</span>
            <h1>Create & Manage <span className="text-gradient">Unforgettable</span> Events</h1>
            <p>Host, discover, and manage premium events with ease. Connect with thousands of enthusiasts worldwide.</p>
            <div className="hero-buttons">
              <Link to="/create-event" className="btn btn-primary btn-large">Create Event Now</Link>
              <Link to="/events" className="btn btn-secondary btn-large">Browse Events</Link>
            </div>
          </div>

          <div className="hero-stats glass">
            <div className="stat">
              <h3 className="text-gradient">10K+</h3>
              <p>Events Created</p>
            </div>
            <div className="stat">
              <h3 className="text-gradient">50K+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat">
              <h3 className="text-gradient">100K+</h3>
              <p>Attendees</p>
            </div>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Artify Aura?</h2>
            <p className="section-subtitle">The all-in-one platform for professional event organizers</p>
          </div>
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon">✨</div>
              <h3>Easy Creation</h3>
              <p>Create professional events in minutes with our intuitive builder.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">📈</div>
              <h3>Analytics</h3>
              <p>Track attendance and engagement in real-time.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">💎</div>
              <h3>Premium Access</h3>
              <p>Exclusive features for high-end event management.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Secure</h3>
              <p>Unmatched performance and enterprise-grade security.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Events</h2>
            <p className="section-subtitle">Handpicked experiences just for you</p>
          </div>
          <div className="events-grid">
            {featuredEvents.map(event => (
              <div key={event.id} className={`event-card glass event-card-${event.color}`}>
                <div className="event-image-placeholder">
                  <span className="event-emoji">{event.image}</span>
                  <div className="image-overlay"></div>
                </div>
                <div className="event-info">
                  <span className="badge">{event.category}</span>
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="event-footer">
                    <span className="attendees">👥 {event.attendees}</span>
                    <Link to={`/event/${event.id}`} className="view-btn">View Details →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card glass-dark">
            <h2>Ready to Host Your Next Masterpiece?</h2>
            <p>Join thousands of organizers creating incredible experiences today.</p>
            <Link to="/create-event" className="btn btn-primary btn-large">Start Creating</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
