import { useState } from 'react'
import './UserProfile.css'

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Event enthusiast and organizer',
    profileImage: '👤'
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  return (
    <div className="user-profile">
      <div className="page-header">
        <div className="container">
          <h1>My Profile</h1>
          <p>Manage your profile information</p>
        </div>
      </div>

      <div className="container">
        <div className="profile-layout">
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-image">{profile.profileImage}</div>
              <h2>{profile.name}</h2>
              <p className="profile-email">{profile.email}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Events Created</span>
                </div>
                <div className="stat">
                  <span className="stat-value">45</span>
                  <span className="stat-label">Events Attended</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-section">
              <div className="section-header">
                <h3>Profile Information</h3>
                <button 
                  className="btn btn-small"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? '✕ Cancel' : '✎ Edit'}
                </button>
              </div>

              {isEditing ? (
                <form className="profile-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      rows="4"
                    />
                  </div>

                  <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="profile-info">
                  <div className="info-row">
                    <span className="label">Name</span>
                    <span className="value">{profile.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email</span>
                    <span className="value">{profile.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Phone</span>
                    <span className="value">{profile.phone}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Location</span>
                    <span className="value">{profile.location}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Bio</span>
                    <span className="value">{profile.bio}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="profile-section">
              <h3>Account Settings</h3>
              <div className="settings-list">
                <div className="setting-item">
                  <div>
                    <h4>Change Password</h4>
                    <p>Update your password regularly for security</p>
                  </div>
                  <button className="btn btn-outline">Change</button>
                </div>
                <div className="setting-item">
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <button className="btn btn-outline">Enable</button>
                </div>
                <div className="setting-item">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Manage your email notification preferences</p>
                  </div>
                  <button className="btn btn-outline">Manage</button>
                </div>
              </div>
            </div>

            <div className="profile-section danger">
              <h3>Danger Zone</h3>
              <p>Irreversible actions</p>
              <button className="btn-danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
