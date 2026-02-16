import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">🪄</span> Artify Aura
          </Link>

          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/create-event">Create Event</Link></li>
            <li><Link to="/my-events">My Events</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <div className="navbar-actions">
            <Link to="/profile" className="btn btn-outline">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
