import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage.jsx'
import SignupPage from './SignupPage.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>





</Routes>
      </div>
    </Router>
  )
}

export default App
