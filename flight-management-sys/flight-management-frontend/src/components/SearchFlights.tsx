// src/components/SearchFlights.tsx
import React, { useState } from 'react';
import { searchFlights } from '../api';
import { Link } from 'react-router-dom';
import './SearchFlights.css';

const SearchFlights: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flights, setFlights] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const response = await searchFlights({ origin, destination, departureDate });
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-flights-container">
      <h2>Search Flights</h2>
      <div>
        <label>Origin:</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Enter origin"
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
        />
      </div>
      <div>
        <label>Departure Date:</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      <div>
        {flights.length > 0 ? (
          <ul>
            {flights.map((flight) => (
              <li key={flight.id}>
                <p>Flight ID: {flight.id} - Destination: {flight.destination} - Departure Date: {flight.departureDate} - Price: ${flight.price}</p>
                <Link to={`/book-flight/${flight.id}`}>
                  <button>Book Flight</button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights available</p>
        )}
      </div>
    </div>
  );
};

export default SearchFlights;
