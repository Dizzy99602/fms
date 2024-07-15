// src/components/SearchFlights.tsx
import React, { useState } from 'react';
import { searchFlights } from '../api';

const SearchFlights: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flights, setFlights] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await searchFlights({ origin, destination, departureDate });
      setFlights(response.data);
      setMessage('');
    } catch (error) {
      setMessage('Search failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <div>
        <label>Origin:</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
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
      {message && <p>{message}</p>}
      <ul>
        {flights.map((flight: any) => (
          <li key={flight.id}>
            Flight ID: {flight.id} - Origin: {flight.origin} - Destination: {flight.destination} - Departure Date: {flight.departureDate} - Price: ${flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFlights;
