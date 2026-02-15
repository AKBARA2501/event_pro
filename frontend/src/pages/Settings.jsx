import { useState } from 'react'
import './Settings.css'

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    eventReminders: true,
    theme: 'light',
    language: 'english'
  })

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div className="settings">
      <div className="page-header">
        <div className="container">
          <h1>Settings</h1>
          <p>Manage your preferences and account settings</p>
        </div>
      </div>

      <div className="container">
        <div className="settings-layout">
          <aside className="settings-sidebar">
            <nav className="settings-nav">
              <a href="#notifications" className="nav-item active">🔔 Notifications</a>
              <a href="#display" className="nav-item">🎨 Display</a>
              <a href="#privacy" className="nav-item">🔒 Privacy</a>
              <a href="#billing" className="nav-item">💳 Billing</a>
              <a href="#api" className="nav-item">⚙️ API</a>
            </nav>
          </aside>

          <div className="settings-content">
            <div className="settings-section">
              <h2>Notification Preferences</h2>
              <p className="section-description">Manage how you receive notifications</p>

              <div className="settings-group">
                <label className="settings-item">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Receive notifications via email</p>
                  </div>
                  <input 
                    type="checkbox" 
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="toggle"
                  />
                </label>

                <label className="settings-item">
                  <div>
                    <h4>SMS Notifications</h4>
                    <p>Receive SMS alerts for important updates</p>
                  </div>
                  <input 
                    type="checkbox" 
                    name="smsNotifications"
                    checked={settings.smsNotifications}
                    onChange={handleChange}
                    className="toggle"
                  />
                </label>

                <label className="settings-item">
                  <div>
                    <h4>Marketing Emails</h4>
                    <p>Receive promotional and marketing emails</p>
                  </div>
                  <input 
                    type="checkbox" 
                    name="marketingEmails"
                    checked={settings.marketingEmails}
                    onChange={handleChange}
                    className="toggle"
                  />
                </label>

                <label className="settings-item">
                  <div>
                    <h4>Event Reminders</h4>
                    <p>Get reminded about events you've booked</p>
                  </div>
                  <input 
                    type="checkbox" 
                    name="eventReminders"
                    checked={settings.eventReminders}
                    onChange={handleChange}
                    className="toggle"
                  />
                </label>
              </div>
            </div>

            <div className="settings-section">
              <h2>Display Settings</h2>
              <p className="section-description">Customize your experience</p>

              <div className="settings-group">
                <div className="settings-item">
                  <div>
                    <h4>Theme</h4>
                    <p>Choose your preferred theme</p>
                  </div>
                  <select 
                    name="theme"
                    value={settings.theme}
                    onChange={handleChange}
                    className="select-input"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                <div className="settings-item">
                  <div>
                    <h4>Language</h4>
                    <p>Select your preferred language</p>
                  </div>
                  <select 
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                    className="select-input"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h2>Privacy & Security</h2>
              <p className="section-description">Keep your account secure</p>

              <div className="security-options">
                <div className="security-option">
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add extra security layer to your account</p>
                  </div>
                  <button className="btn btn-outline">Enable</button>
                </div>
                <div className="security-option">
                  <div>
                    <h4>Change Password</h4>
                    <p>Update your password</p>
                  </div>
                  <button className="btn btn-outline">Change</button>
                </div>
                <div className="security-option">
                  <div>
                    <h4>Active Sessions</h4>
                    <p>Manage your active login sessions</p>
                  </div>
                  <button className="btn btn-outline">Manage</button>
                </div>
              </div>
            </div>

            <div className="settings-actions">
              <button className="btn btn-outline">Reset to Defaults</button>
              <button className="btn btn-primary" onClick={handleSave}>Save Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
