// src/components/BookFlight.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createBooking, getFlightById } from '../api';
import './BookFlight.css';

const BookFlight: React.FC = () => {
  const { flightId } = useParams<{ flightId: string }>();
  const [flight, setFlight] = useState<any>(null);
  const [passengerName, setPassengerName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await getFlightById(Number(flightId));
        setFlight(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFlight();
  }, [flightId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (flight && passengerName && seatNumber) {
      try {
        await createBooking({ flightId: flight.id, userId: user.id, passengerName, seatNumber });
        alert('Flight booked successfully');
        setPassengerName('');
        setSeatNumber('');
      } catch (error) {
        setError('Error booking flight');
      }
    } else {
      setError('Please fill all fields');
    }
  };

  if (!flight) return <p>Loading...</p>;

  return (
    <div className="book-flight-container">
      <h2>Book Flight</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="flight-details">
        <h3>Flight Details</h3>
        <p><strong>Origin:</strong> {flight.origin}</p>
        <p><strong>Destination:</strong> {flight.destination}</p>
        <p><strong>Departure Date:</strong> {flight.departureDate}</p>
        <p><strong>Return Date:</strong> {flight.returnDate}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="passengerName">Passenger Name:</label>
          <input
            type="text"
            id="passengerName"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seatNumber">Seat Number:</label>
          <input
            type="text"
            id="seatNumber"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
};

export default BookFlight;
