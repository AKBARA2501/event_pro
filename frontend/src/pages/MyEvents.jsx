import { Link } from 'react-router-dom'
import './MyEvents.css'

export default function MyEvents() {
  const myEvents = [
    {
      id: 1,
      title: 'My Tech Workshop',
      date: 'Mar 25, 2026',
      attendees: 45,
      capacity: 100,
      status: 'active',
      image: '📚'
    },
    {
      id: 2,
      title: 'Networking Mixer',
      date: 'Mar 30, 2026',
      attendees: 32,
      capacity: 50,
      status: 'active',
      image: '🤝'
    },
    {
      id: 3,
      title: 'Past Team Lunch',
      date: 'Feb 10, 2026',
      attendees: 28,
      capacity: 40,
      status: 'completed',
      image: '🍽️'
    }
  ]

  return (
    <div className="my-events">
      <div className="page-header">
        <div className="container">
          <h1>My Events</h1>
          <p>Manage all your created events in one place</p>
        </div>
      </div>

      <div className="container">
        <div className="events-management">
          <div className="management-toolbar">
            <div className="toolbar-left">
              <button className="filter-btn active">All Events</button>
              <button className="filter-btn">Active</button>
              <button className="filter-btn">Completed</button>
              <button className="filter-btn">Drafts</button>
            </div>
            <Link to="/create-event" className="btn btn-primary">+ Create New Event</Link>
          </div>

          <div className="events-table">
            <div className="table-header">
              <div className="col-title">Event Title</div>
              <div className="col-date">Date</div>
              <div className="col-attendance">Attendance</div>
              <div className="col-status">Status</div>
              <div className="col-actions">Actions</div>
            </div>

            {myEvents.map(event => (
              <div key={event.id} className="table-row">
                <div className="col-title">
                  <span className="row-icon">{event.image}</span>
                  <span>{event.title}</span>
                </div>
                <div className="col-date">{event.date}</div>
                <div className="col-attendance">{event.attendees}/{event.capacity}</div>
                <div className="col-status">
                  <span className={`status-badge ${event.status}`}>{event.status}</span>
                </div>
                <div className="col-actions">
                  <button className="action-btn" title="View">👁️</button>
                  <button className="action-btn" title="Edit">✏️</button>
                  <button className="action-btn" title="Delete">🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
