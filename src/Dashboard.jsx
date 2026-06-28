import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <h1>Lock Pass - Dashboard</h1>
        <div className="nav-right">
          <span className="user-info">Welcome! 👤</span>
          <Link to="/" className="logout-btn">Logout</Link>
        </div>
      </nav>

      <div className="dashboard-content">
        <h2>Your Social Media Accounts</h2>
        
        <div className="accounts-grid">
          <div className="account-card">
            <div className="account-icon">📘</div>
            <h3>Facebook</h3>
            <p>Connected</p>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-card">
            <div className="account-icon">🐦</div>
            <h3>Twitter</h3>
            <p>Connected</p>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-card">
            <div className="account-icon">📷</div>
            <h3>Instagram</h3>
            <p>Connected</p>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-card">
            <div className="account-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Connected</p>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-card">
            <div className="account-icon">▶️</div>
            <h3>YouTube</h3>
            <p>Connected</p>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-card">
            <div className="account-icon">📱</div>
            <h3>TikTok</h3>
            <p>Connected</p>
            <button className="btn-manage">Manage</button>
          </div>
        </div>

        <div className="features-section">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <button className="action-btn">📊 View Analytics</button>
            <button className="action-btn">📝 Schedule Posts</button>
            <button className="action-btn">💬 Manage Messages</button>
            <button className="action-btn">⚙️ Settings</button>
          </div>
        </div>

        <div className="stats-section">
          <h3>Account Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Posts</h4>
              <p className="stat-number">1,247</p>
            </div>
            <div className="stat-card">
              <h4>Total Followers</h4>
              <p className="stat-number">45.8K</p>
            </div>
            <div className="stat-card">
              <h4>Total Engagement</h4>
              <p className="stat-number">125.3K</p>
            </div>
            <div className="stat-card">
              <h4>Last Updated</h4>
              <p className="stat-number">2 hrs ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
