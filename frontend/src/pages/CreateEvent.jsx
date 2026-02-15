import { useState } from 'react'
import './CreateEvent.css'

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: '',
    price: '',
    capacity: '',
    image: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Event created:', formData)
    alert('Event created successfully!')
  }

  return (
    <div className="create-event">
      <div className="page-header">
        <div className="container">
          <h1>Create Your Event</h1>
          <p>Fill in the details to create an amazing event</p>
        </div>
      </div>

      <div className="container">
        <div className="form-wrapper">
          <div className="form-guide">
            <h3>Event Creation Guide</h3>
            <div className="guide-step">
              <span className="step-number">1</span>
              <div>
                <h4>Basic Info</h4>
                <p>Add your event title, description, and category</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="step-number">2</span>
              <div>
                <h4>Date & Time</h4>
                <p>Set when your event will take place</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="step-number">3</span>
              <div>
                <h4>Location & Details</h4>
                <p>Add location, capacity, and pricing</p>
              </div>
            </div>
            <div className="guide-step">
              <span className="step-number">4</span>
              <div>
                <h4>Publish</h4>
                <p>Review and publish your event</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="event-form">
            <div className="form-section">
              <h2>Event Basics</h2>

              <div className="form-group">
                <label htmlFor="title">Event Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your event in detail"
                  rows="6"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="party">Party</option>
                  <option value="festival">Festival</option>
                  <option value="sports">Sports</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="wedding">Wedding</option>
                  <option value="networking">Networking</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h2>Date & Time</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Location & Details</h2>

              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter event location"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price (USD) *</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="capacity">Capacity *</label>
                  <input
                    type="number"
                    id="capacity"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Number of attendees"
                    min="1"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Event Image</h2>
              <div className="form-group">
                <label htmlFor="image">Select Image</label>
                <div className="image-upload">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                  />
                  <span>📷 Click to upload or drag and drop</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-outline">Save Draft</button>
              <button type="submit" className="btn btn-primary">Publish Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
