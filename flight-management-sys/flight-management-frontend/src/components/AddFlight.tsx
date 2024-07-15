// src/components/AddFlight.tsx
import React, { useState } from 'react';
import { createFlight } from '../api';
import './AddFlight.css';

const AddFlight: React.FC = () => {
  const [flightData, setFlightData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    status: 'AVAILABLE',
    price: 0,
    availableSeats: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createFlight(flightData);
      alert('Flight added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding flight');
    }
  };

  return (
    <div className="add-flight-container">
      <h2>Add Flight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origin:</label>
          <input type="text" name="origin" value={flightData.origin} onChange={handleChange} required />
        </div>
        <div>
          <label>Destination:</label>
          <input type="text" name="destination" value={flightData.destination} onChange={handleChange} required />
        </div>
        <div>
          <label>Departure Date:</label>
          <input type="date" name="departureDate" value={flightData.departureDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Return Date:</label>
          <input type="date" name="returnDate" value={flightData.returnDate} onChange={handleChange} />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={flightData.status} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={flightData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Available Seats:</label>
          <input type="number" name="availableSeats" value={flightData.availableSeats} onChange={handleChange} required />
        </div>
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
};

export default AddFlight;
