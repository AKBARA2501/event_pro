import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { eventAPI } from '../services/api'
import './EventsList.css'

export default function EventsList() {
  const [filterType, setFilterType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const response = await eventAPI.getAllEvents()
      setEvents(response.data.results || response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events. Please try again later.')
      // Use mock data as fallback
      setEvents([
        { id: 1, title: 'Tech Summit', description: 'Conference', date: '2024-03-15T10:00:00', location: 'SF', price: 99, image: '🎤', booking_count: 1200 },
        { id: 2, title: 'Gala Night', description: 'Party', date: '2024-03-20T18:00:00', location: 'NYC', price: 150, image: '🎭', booking_count: 500 },
        { id: 3, title: 'Music Festival', description: 'Festival', date: '2024-04-05T12:00:00', location: 'Miami', price: 75, image: '🎵', booking_count: 5000 },
        { id: 4, title: 'Workshop Series', description: 'Workshop', date: '2024-03-25T09:00:00', location: 'LA', price: 50, image: '📚', booking_count: 200 },
        { id: 5, title: 'Sports Match', description: 'Sports', date: '2024-04-10T14:00:00', location: 'Boston', price: 120, image: '⚽', booking_count: 800 },
        { id: 6, title: 'Comedy Night', description: 'Entertainment', date: '2024-04-15T20:00:00', location: 'Chicago', price: 45, image: '😂', booking_count: 300 },
        { id: 7, title: 'Networking Mixer', description: 'Networking', date: '2024-03-30T17:00:00', location: 'Seattle', price: 30, image: '🤝', booking_count: 150 },
        { id: 8, title: 'Wedding Reception', description: 'Wedding', date: '2024-04-20T19:00:00', location: 'Vegas', price: 200, image: '💍', booking_count: 250 },
      ])
    } finally {
      setLoading(false)
    }
  }

  const filteredEvents = events.filter(event => {
    const matchesFilter = filterType === 'all' || (event.description && event.description.toLowerCase().includes(filterType))
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="events-list">
      <div className="page-header">
        <div className="container">
          <h1>Discover Events</h1>
          <p>Browse and find exciting events happening near you</p>
        </div>
      </div>

      <div className="events-container">
        <div className="container">
          <div className="events-layout">
            <aside className="sidebar">
              <div className="filter-section">
                <h3>Filters</h3>
                
                <div className="filter-group">
                  <label>Search Events</label>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                <div className="filter-group">
                  <label>Category</label>
                  <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="conference">Conference</option>
                    <option value="party">Party</option>
                    <option value="festival">Festival</option>
                    <option value="workshop">Workshop</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>
                    <input type="checkbox" /> Upcoming Only
                  </label>
                </div>

                <div className="filter-group">
                  <label>
                    <input type="checkbox" /> Free Events Only
                  </label>
                </div>

                <button className="btn btn-primary" style={{ width: '100%' }}>Apply Filters</button>
              </div>
            </aside>

            <div className="events-grid">
              {loading ? (
                <div className="loading">
                  <p>Loading events...</p>
                </div>
              ) : error ? (
                <div className="error">
                  <p>{error}</p>
                </div>
              ) : filteredEvents.length > 0 ? (
                <div className="grid">
                  {filteredEvents.map(event => (
                    <div key={event.id} className="event-card-large">
                      <div className="event-header">
                        <span className="event-emoji">{event.image || '🎉'}</span>
                        <span className="event-price">${event.price}</span>
                      </div>
                      <h3>{event.title}</h3>
                      <p className="event-category">{event.description}</p>
                      <div className="event-details">
                        <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                        <span>📍 {event.location}</span>
                      </div>
                      <p className="attendees">👥 {event.booking_count || 0} people booked</p>
                      <Link to={`/event/${event.id}`} className="btn btn-primary">View Details</Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-events">
                  <p>No events found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
