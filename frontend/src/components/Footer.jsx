import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Artify Aura</h4>
            <p>Your ultimate platform for creating and managing events.</p>
          </div>
          
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/create-event">Create Event</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>Resources</h5>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>Connect</h5>
            <div className="social-links">
              <a href="#facebook" className="social-icon">f</a>
              <a href="#twitter" className="social-icon">𝕏</a>
              <a href="#linkedin" className="social-icon">in</a>
              <a href="#instagram" className="social-icon">📷</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Artify Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
