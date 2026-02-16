import axios from 'axios'

// Use environment variable or default to localhost:8000
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if it exists
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Event API
export const eventAPI = {
  // Get all events
  getAllEvents: (page = 1) =>
    apiClient.get('/events/', { params: { page } }),

  // Get event by ID
  getEventById: (id) =>
    apiClient.get(`/events/${id}/`),

  // Get my events
  getMyEvents: () =>
    apiClient.get('/events/my_events/'),

  // Create event
  createEvent: (eventData) =>
    apiClient.post('/events/', eventData),

  // Update event
  updateEvent: (id, eventData) =>
    apiClient.patch(`/events/${id}/`, eventData),

  // Delete event
  deleteEvent: (id) =>
    apiClient.delete(`/events/${id}/`),

  // Get dashboard statistics
  getDashboardStats: () =>
    apiClient.get('/events/dashboard/'),

  // Book event
  bookEvent: (eventId, bookingData) =>
    apiClient.post(`/events/${eventId}/book/`, bookingData),
}

// Booking API
export const bookingAPI = {
  // Get my bookings
  getMyBookings: () =>
    apiClient.get('/bookings/my_bookings/'),

  // Get all bookings (admin)
  getAllBookings: () =>
    apiClient.get('/bookings/'),

  // Get booking by ID
  getBookingById: (id) =>
    apiClient.get(`/bookings/${id}/`),

  // Cancel booking
  cancelBooking: (id) =>
    apiClient.delete(`/bookings/${id}/`),
}

export default apiClient
