// src/components/AddFlight.tsx
import React, { useState } from 'react';
import { createFlight } from '../api';
import './AddFlight.css';

const AddFlight: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [status, setStatus] = useState('AVAILABLE');
  const [price, setPrice] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createFlight({ origin, destination, departureDate, returnDate, status, price, availableSeats });
      alert('Flight added successfully');
      setOrigin('');
      setDestination('');
      setDepartureDate('');
      setReturnDate('');
      setStatus('AVAILABLE');
      setPrice(0);
      setAvailableSeats(0);
    } catch (error) {
      setError('Error adding flight');
    }
  };

  return (
    <div className="add-flight-container">
      <h2>Add Flight</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="AVAILABLE">Available</option>
            <option value="BOOKED">Booked</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availableSeats">Available Seats:</label>
          <input
            type="number"
            id="availableSeats"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
};

export default AddFlight;
