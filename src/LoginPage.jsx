import React, { useState } from 'react';
import './LoginPage.css';  // For styling

const LoginPage = () => {
  const [passkey, setPasskey] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for handling login (e.g., validation or API call)
    alert('Logged in with passkey: ' + passkey);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Secure Social Media Manager</h1>
        <p>Enter your passkey to access your social media accounts</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="passkey">Passkey</label>
          <input
            type="password"
            id="passkey"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            placeholder="Enter your secure passkey"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="info-text">
          Protect your passkey. It's the key to all your social media accounts.
        </p>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;