import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Lock Pass</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

      <div className="hero-section">
        <h2>Welcome to Secure Social Media Manager</h2>
        <p>Manage all your social media accounts securely in one place</p>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>🔐 Secure Access</h3>
          <p>Protect your passkey. It's the key to all your social media accounts.</p>
        </div>
        <div className="feature-card">
          <h3>📱 Multi-Platform</h3>
          <p>Manage accounts from multiple social media platforms in one dashboard.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Fast & Easy</h3>
          <p>Quick access to all your social media without remembering multiple passwords.</p>
        </div>
      </div>

      <div className="cta-section">
        <Link to="/login" className="btn btn-primary">Login Now</Link>
        <Link to="/signup" className="btn btn-secondary">Create Account</Link>
      </div>

      <div className="pages-section">
        <h3>All Pages:</h3>
        <ul>
          <li><Link to="/login">✓ Login Page</Link></li>
          <li><Link to="/signup">✓ Signup Page</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
