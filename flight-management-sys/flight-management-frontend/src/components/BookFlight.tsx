// src/components/BookFlight.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFlightById, createBooking } from '../api';
import './BookFlight.css';

const BookFlight: React.FC = () => {
  const { flightId } = useParams<{ flightId: string }>();
  const navigate = useNavigate();

  const [flight, setFlight] = useState<any>(null);
  const [passengerName, setPassengerName] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await getFlightById(Number(flightId));
        setFlight(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch flight details');
      }
    };

    fetchFlight();
  }, [flightId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (flight && passengerName && seatNumber) {
      try {
        const userId = JSON.parse(localStorage.getItem('user') || '{}').id;
        await createBooking({
          flightId: flight.id,
          userId,
          passengerName,
          seatNumber,
        });
        alert('Flight booked successfully');
        navigate('/search-flights');  // Redirect to search flights page
      } catch (error) {
        console.error(error);
        alert('Error booking flight');
      }
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="book-flight-container">
      {flight ? (
        <>
          <h2>Book Flight</h2>
          <div className="flight-details">
            <h3>Flight Details</h3>
            <p><strong>Origin:</strong> {flight.origin}</p>
            <p><strong>Destination:</strong> {flight.destination}</p>
            <p><strong>Departure Date:</strong> {flight.departureDate}</p>
            <p><strong>Price:</strong> ${flight.price}</p>
            <p><strong>Available Seats:</strong> {flight.availableSeats}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Passenger Name:</label>
              <input
                type="text"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label>Seat Number:</label>
              <input
                type="text"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                placeholder="Enter seat number"
              />
            </div>
            <button type="submit">Book Flight</button>
          </form>
        </>
      ) : (
        <p>Loading flight details...</p>
      )}
    </div>
  );
};

export default BookFlight;
