import React, { useState } from 'react';
import axios from 'axios';

const AddFlight: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [price, setPrice] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);

  const handleAddFlight = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/flights', {
        origin,
        destination,
        departureDate,
        status: 'AVAILABLE',
        price,
        availableSeats,
      });
      alert('Flight added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding flight');
    }
  };

  return (
    <div>
      <h2>Add Flight</h2>
      <form onSubmit={handleAddFlight}>
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
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Available Seats:</label>
          <input
            type="number"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(Number(e.target.value))}
          />
        </div>
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
};

export default AddFlight;
