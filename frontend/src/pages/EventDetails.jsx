import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { eventAPI } from '../services/api'
import './EventDetails.css'

export default function EventDetails() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [booking, setBooking] = useState(false)

  useEffect(() => {
    fetchEvent()
  }, [id])

  const fetchEvent = async () => {
    try {
      setLoading(true)
      const response = await eventAPI.getEventById(id)
      setEvent(response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching event:', err)
      setError('Failed to load event details. Please try again later.')
      // Mock data for development
      setEvent({
        id: 1,
        title: 'Tech Summit 2026',
        description: 'Join us for the biggest tech conference of the year featuring industry leaders, workshops, and networking opportunities.',
        date: '2026-03-15T09:00:00',
        location: 'Moscone Center, San Francisco, CA',
        price: 99,
        capacity: 2000,
        booking_count: 1200,
        status: 'published',
        organizer: { username: 'Tech Events Inc.', email: 'tech@events.com' },
      })
    } finally {
      setLoading(false)
    }
  }

  const handleBooking = async () => {
    try {
      setBooking(true)
      await eventAPI.bookEvent(id, { quantity: ticketQuantity })
      alert('Successfully booked tickets!')
    } catch (err) {
      console.error('Booking error:', err)
      alert('Failed to book tickets. Please try again.')
    } finally {
      setBooking(false)
    }
  }

  if (loading) return <div className="container" style={{ padding: '40px' }}>Loading event details...</div>
  if (error) return <div className="container" style={{ padding: '40px', color: 'red' }}>{error}</div>
  if (!event) return <div className="container" style={{ padding: '40px' }}>Event not found</div>

  return (
    <div className="event-details">
      <div className="event-header-detail">
        <div className="container">
          <Link to="/events" className="back-link">← Back to Events</Link>
          <h1>{event.title}</h1>
        </div>
      </div>

      <div className="container event-content">
        <div className="event-main">
          <div className="event-image-large">🎤</div>
          
          <div className="event-info-section">
            <h2>About This Event</h2>
            <p>{event.description}</p>
          </div>

          <div className="event-organizer">
            <h3>Organized By</h3>
            <div className="organizer-info">
              <span className="organizer-avatar">👤</span>
              <div>
                <h4>{event.organizer?.username || 'Event Organizer'}</h4>
                <p>Professional Event Organization</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="event-sidebar">
          <div className="booking-card">
            <div className="price-section">
              <span className="current-price">${event.price}</span>
            </div>

            <div className="event-meta">
              <div className="meta-item">
                <span className="label">Date</span>
                <span className="value">📅 {new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="meta-item">
                <span className="label">Location</span>
                <span className="value">📍 {event.location}</span>
              </div>
              <div className="meta-item">
                <span className="label">Available Slots</span>
                <span className="value">👥 {event.available_slots || (event.capacity - event.booking_count)}</span>
              </div>
            </div>

            <div className="ticket-selection">
              <label>Select Tickets</label>
              <select value={ticketQuantity} onChange={(e) => setTicketQuantity(parseInt(e.target.value))}>
                <option value={1}>1 Ticket</option>
                <option value={2}>2 Tickets</option>
                <option value={3}>3 Tickets</option>
                <option value={5}>5 Tickets</option>
              </select>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              onClick={handleBooking}
              disabled={booking}
            >
              {booking ? 'Booking...' : 'Book Now'}
            </button>
            <button className="btn btn-outline" style={{ width: '100%', marginTop: '10px' }}>Add to Wishlist</button>
          </div>

          <div className="share-section">
            <h4>Share Event</h4>
            <div className="share-buttons">
              <button className="share-btn">📱</button>
              <button className="share-btn">📧</button>
              <button className="share-btn">🔗</button>
              <button className="share-btn">📋</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
