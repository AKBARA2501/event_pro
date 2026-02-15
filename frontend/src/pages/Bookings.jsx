import { useState, useEffect } from 'react'
import { bookingAPI } from '../services/api'
import './Bookings.css'

export default function Bookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      setLoading(true)
      const response = await bookingAPI.getMyBookings()
      setBookings(response.data.results || response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching bookings:', err)
      setError('Failed to load bookings. Please try again later.')
      // Mock data for development
      setBookings([
        {
          id: 1,
          event: { title: 'Tech Summit 2026', date: '2026-03-15' },
          quantity: 2,
          total_price: 198,
          payment_status: 'completed',
          booking_date: '2026-02-01'
        },
        {
          id: 2,
          event: { title: 'Annual Gala Night', date: '2026-03-20' },
          quantity: 1,
          total_price: 150,
          payment_status: 'completed',
          booking_date: '2026-02-02'
        },
        {
          id: 3,
          event: { title: 'Music Festival', date: '2026-04-05' },
          quantity: 3,
          total_price: 225,
          payment_status: 'pending',
          booking_date: '2026-02-03'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleCancelBooking = async (bookingId) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      try {
        await bookingAPI.cancelBooking(bookingId)
        setBookings(bookings.filter(b => b.id !== bookingId))
        alert('Booking cancelled successfully')
      } catch (err) {
        alert('Failed to cancel booking')
      }
    }
  }

  return (
    <div className="bookings">
      <div className="page-header">
        <div className="container">
          <h1>My Bookings</h1>
          <p>View and manage all your event bookings</p>
        </div>
      </div>

      <div className="container">
        {loading ? (
          <p>Loading bookings...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <>
            <div className="bookings-stats">
              <div className="stat-card">
                <h4>Total Bookings</h4>
                <span className="stat-value">{bookings.length}</span>
              </div>
              <div className="stat-card">
                <h4>Total Spent</h4>
                <span className="stat-value">${bookings.reduce((a, b) => a + parseFloat(b.total_price), 0).toFixed(2)}</span>
              </div>
              <div className="stat-card">
                <h4>Confirmed</h4>
                <span className="stat-value">{bookings.filter(b => b.payment_status === 'completed').length}</span>
              </div>
              <div className="stat-card">
                <h4>Pending</h4>
                <span className="stat-value">{bookings.filter(b => b.payment_status === 'pending').length}</span>
              </div>
            </div>

            <div className="bookings-list">
              {bookings.length > 0 ? (
                bookings.map(booking => (
                  <div key={booking.id} className="booking-card">
                    <div className="booking-header">
                      <h3>{booking.event?.title || 'Event'}</h3>
                      <span className={`booking-status ${booking.payment_status}`}>{booking.payment_status}</span>
                    </div>
                    
                    <div className="booking-details">
                      <div className="detail-row">
                        <span className="label">Event Date</span>
                        <span className="value">📅 {new Date(booking.event?.date).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Tickets</span>
                        <span className="value">🎟️ {booking.quantity}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Booked On</span>
                        <span className="value">{new Date(booking.booking_date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="booking-footer">
                      <div className="total">
                        <span>Total Amount</span>
                        <span className="amount">${parseFloat(booking.total_price).toFixed(2)}</span>
                      </div>
                      <div className="actions">
                        <button className="btn-small">Download Ticket</button>
                        <button 
                          className="btn-small" 
                          onClick={() => handleCancelBooking(booking.id)}
                        >
                          Cancel Booking
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No bookings found</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
