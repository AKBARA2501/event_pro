import './Dashboard.css'

export default function Dashboard() {
  const stats = [
    { label: 'Total Events', value: 12, icon: '📅', color: 'primary' },
    { label: 'Total Attendees', value: 1250, icon: '👥', color: 'secondary' },
    { label: 'Total Revenue', value: '$15,450', icon: '💰', color: 'success' },
    { label: 'Avg. Rating', value: '4.8/5', icon: '⭐', color: 'warning' }
  ]

  const recentEvents = [
    { title: 'Tech Summit', date: 'Mar 15', status: 'active', attendees: 450 },
    { title: 'Gala Night', date: 'Mar 20', status: 'upcoming', attendees: 200 },
    { title: 'Workshop', date: 'Mar 25', status: 'upcoming', attendees: 120 }
  ]

  return (
    <div className="dashboard">
      <div className="page-header">
        <div className="container">
          <h1>Dashboard</h1>
          <p>Overview of your event management activities</p>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-content">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className={`stat-card stat-${stat.color}`}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-body">
                  <p className="stat-label">{stat.label}</p>
                  <h3 className="stat-value">{stat.value}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Recent Events</h3>
              <div className="events-list-dashboard">
                {recentEvents.map((event, idx) => (
                  <div key={idx} className="event-item">
                    <div>
                      <h4>{event.title}</h4>
                      <p>{event.date}</p>
                    </div>
                    <div className="event-meta">
                      <span className={`status-badge ${event.status}`}>{event.status}</span>
                      <span className="attendees">{event.attendees} attending</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Quick Actions</h3>
              <div className="actions-grid">
                <button className="action-card">
                  <span className="action-icon">➕</span>
                  <span>Create Event</span>
                </button>
                <button className="action-card">
                  <span className="action-icon">📊</span>
                  <span>View Analytics</span>
                </button>
                <button className="action-card">
                  <span className="action-icon">👥</span>
                  <span>Manage Attendees</span>
                </button>
                <button className="action-card">
                  <span className="action-icon">💬</span>
                  <span>Messages</span>
                </button>
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Performance</h3>
              <div className="performance-chart">
                <div className="chart-bar">
                  <span>Jan</span>
                  <div className="bar" style={{ height: '60%' }}></div>
                </div>
                <div className="chart-bar">
                  <span>Feb</span>
                  <div className="bar" style={{ height: '75%' }}></div>
                </div>
                <div className="chart-bar">
                  <span>Mar</span>
                  <div className="bar" style={{ height: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <h3>Upcoming Tasks</h3>
              <ul className="tasks-list">
                <li className="task">
                  <input type="checkbox" />
                  <span>Send reminder emails to attendees</span>
                </li>
                <li className="task">
                  <input type="checkbox" />
                  <span>Prepare conference materials</span>
                </li>
                <li className="task">
                  <input type="checkbox" />
                  <span>Confirm catering arrangements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
