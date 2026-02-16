import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { eventAPI } from '../services/api'
import './MyEvents.css'

export default function MyEvents() {
  const [myEvents, setMyEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMyEvents()
  }, [])

  const fetchMyEvents = async () => {
    try {
      setLoading(true)
      const response = await eventAPI.getMyEvents()
      setMyEvents(response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching my events:', err)
      setError('Failed to load your events.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="container" style={{ padding: '50px', textAlign: 'center' }}><h2>Loading your events...</h2></div>

  return (
    <div className="my-events">
      <div className="page-header">
        <div className="container">
          <h1>My Events</h1>
          <p>Manage all your created events in one place</p>
        </div>
      </div>

      <div className="container">
        {error && <div className="error-message" style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

        <div className="events-management">
          <div className="management-toolbar">
            <div className="toolbar-left">
              <button className="filter-btn active">All Events</button>
            </div>
            <Link to="/create-event" className="btn btn-primary">+ Create New Event</Link>
          </div>

          <div className="events-list">
            {myEvents.length > 0 ? (
              <div className="events-table">
                <div className="table-header">
                  <div className="col-title">Event Title</div>
                  <div className="col-date">Date</div>
                  <div className="col-status">Status</div>
                  <div className="col-actions">Actions</div>
                </div>

                {myEvents.map(event => (
                  <div key={event.id} className="table-row">
                    <div className="col-title">
                      <span className="row-icon">📅</span>
                      <span>{event.title}</span>
                    </div>
                    <div className="col-date">{new Date(event.date).toLocaleDateString()}</div>
                    <div className="col-status">
                      <span className={`status-badge ${event.status}`}>{event.status}</span>
                    </div>
                    <div className="col-actions">
                      <Link to={`/event/${event.id}`} className="action-btn" title="View Detail">👁️</Link>
                      <Link to={`/event/${event.id}/attendees`} className="action-btn" title="View Attendees">👥</Link>
                      <button className="action-btn" title="Edit">✏️</button>
                      <button className="action-btn" title="Delete">🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>You haven't created any events yet.</p>
                <Link to="/create-event" className="btn btn-primary">Create Your First Event</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
