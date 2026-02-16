import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { eventAPI } from '../services/api'
import './AttendeesList.css'

export default function AttendeesList() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [attendees, setAttendees] = useState([])
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
    }, [id])

    const fetchData = async () => {
        try {
            setLoading(true)
            const [eventRes, attendeesRes] = await Promise.all([
                eventAPI.getEventById(id),
                eventAPI.getEventAttendees(id)
            ])
            setEvent(eventRes.data)
            setAttendees(attendeesRes.data)
            setError(null)
        } catch (err) {
            console.error('Error fetching attendees:', err)
            setError('Failed to load attendees list. Make sure you are the organizer.')
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div className="container" style={{ padding: '50px', textAlign: 'center' }}><h2>Loading attendees...</h2></div>

    return (
        <div className="attendees-list">
            <div className="page-header">
                <div className="container">
                    <div className="header-nav">
                        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
                    </div>
                    <h1>Attendees: {event?.title}</h1>
                    <p>{attendees.length} people registered for this event</p>
                </div>
            </div>

            <div className="container">
                {error && <div className="error-message" style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

                <div className="attendees-table-container">
                    {attendees.length > 0 ? (
                        <table className="attendees-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Date Registered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendees.map(attendee => (
                                    <tr key={attendee.id}>
                                        <td>
                                            <strong>{attendee.user.first_name} {attendee.user.last_name}</strong>
                                            <br />
                                            <small>@{attendee.user.username}</small>
                                        </td>
                                        <td>{attendee.user.email}</td>
                                        <td>{attendee.quantity}</td>
                                        <td>${attendee.total_price}</td>
                                        <td>{new Date(attendee.booking_date).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="no-attendees">
                            <p>No one has registered for this event yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
