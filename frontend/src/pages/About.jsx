import './About.css'

export default function About() {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
    { name: 'Mike Chen', role: 'CTO', emoji: '👨‍💻' },
    { name: 'Emma Wilson', role: 'Head of Design', emoji: '👩‍🎨' },
    { name: 'Alex Rodriguez', role: 'Head of Marketing', emoji: '👨‍📊' }
  ]

  return (
    <div className="about">
      <div className="page-header">
        <div className="container">
          <h1>About Artify Aura</h1>
          <p>Revolutionizing the way events are created and managed</p>
        </div>
      </div>

      <div className="container about-content">
        <section className="about-intro">
          <div className="intro-content">
            <h2>Our Mission</h2>
            <p>
              At Artify Aura, we believe that organizing events should be simple, accessible, and enjoyable. 
              Our mission is to empower event organizers of all sizes with the tools and resources they need 
              to create unforgettable experiences for their audiences.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-box">
              <span className="number">10K+</span>
              <span className="text">Events Created</span>
            </div>
            <div className="stat-box">
              <span className="number">50K+</span>
              <span className="text">Active Users</span>
            </div>
            <div className="stat-box">
              <span className="number">100K+</span>
              <span className="text">Attendees</span>
            </div>
          </div>
        </section>

        <section className="about-story">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-item">
              <span className="number">2020</span>
              <h3>Founded</h3>
              <p>Artify Aura was founded with a vision to simplify event management for everyone.</p>
            </div>
            <div className="story-item">
              <span className="number">2021</span>
              <h3>First 1000 Events</h3>
              <p>We reached our first 1000 events milestone and expanded our features.</p>
            </div>
            <div className="story-item">
              <span className="number">2023</span>
              <h3>Global Expansion</h3>
              <p>Artify Aura went global, reaching users in 50+ countries worldwide.</p>
            </div>
            <div className="story-item">
              <span className="number">2024</span>
              <h3>10,000 Events</h3>
              <p>Celebrated hosting 10,000+ events with millions of attendees.</p>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="icon">💡</span>
              <h3>Innovation</h3>
              <p>We constantly innovate to bring the best solutions to event management.</p>
            </div>
            <div className="value-card">
              <span className="icon">🤝</span>
              <h3>Community</h3>
              <p>We foster a vibrant community of event organizers and attendees.</p>
            </div>
            <div className="value-card">
              <span className="icon">🎯</span>
              <h3>Excellence</h3>
              <p>We are committed to delivering excellence in everything we do.</p>
            </div>
            <div className="value-card">
              <span className="icon">🌍</span>
              <h3>Accessibility</h3>
              <p>We believe event management should be accessible to everyone.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Our Team</h2>
          <p className="team-intro">Meet the brilliant minds behind Artify Aura</p>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-member">
                <span className="member-avatar">{member.emoji}</span>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of event organizers creating amazing experiences with Artify Aura.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Create Your First Event</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </section>
      </div>
    </div>
  )
}
