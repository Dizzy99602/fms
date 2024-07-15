// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FlightBooking</h1>
      <p>Book your flights with ease</p>
      <Link to="/search-flights" className="home-search-link">Search Flights</Link>
    </div>
  );
};

export default Home;
