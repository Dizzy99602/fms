// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Flight Manager</h1>
        <p>Your one-stop solution for searching, booking, and managing flights.</p>
        <div className="hero-buttons">
          <Link to="/search-flights">
            <button className="btn btn-primary">Search Flights</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        </div>
      </div>
      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Search Flights</h3>
            <p>Find the best flights to your destination with our easy-to-use search functionality.</p>
          </div>
          <div className="feature-item">
            <h3>Book Flights</h3>
            <p>Book your flights with just a few clicks and secure your seat.</p>
          </div>
          <div className="feature-item">
            <h3>Manage Bookings</h3>
            <p>View and manage your bookings all in one place.</p>
          </div>
          <div className="feature-item">
            <h3>Admin Features</h3>
            <p>If you're an admin, add new flights and manage the flight schedule.</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Flight Manager. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;
