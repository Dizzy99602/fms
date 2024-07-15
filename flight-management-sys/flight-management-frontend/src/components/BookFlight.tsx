// src/components/BookFlight.tsx
import React, { useState, useEffect } from 'react';
import { getAllFlights, createBooking } from '../api';

const BookFlight: React.FC = () => {
  const [flights, setFlights] = useState<any[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<number | null>(null);
  const [passengerName, setPassengerName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await getAllFlights();
        setFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlights();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userId = Number(localStorage.getItem('userId')); // Assuming the user ID is stored in local storage
    if (selectedFlight && passengerName && seatNumber) {
      try {
        await createBooking({ flightId: selectedFlight, userId, passengerName, seatNumber });
        setMessage('Flight booked successfully!');
      } catch (error) {
        setMessage('Error booking flight');
        console.error(error);
      }
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Book Flight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight:</label>
          <select onChange={(e) => setSelectedFlight(Number(e.target.value))}>
            <option value="">Select a flight</option>
            {flights.map((flight: any) => (
              <option key={flight.id} value={flight.id}>
                {flight.origin} to {flight.destination} - ${flight.price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Passenger Name:</label>
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
        </div>
        <div>
          <label>Seat Number:</label>
          <input
            type="text"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
          />
        </div>
        <button type="submit">Book Flight</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookFlight;
