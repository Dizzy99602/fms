import React, { useState } from 'react';
import axios from 'axios';
import BookingConfirmation from './BookingConfirmation';
import styles from './FlightBooking.module.css';

const FlightBooking: React.FC = () => {
    const [flightId, setFlightId] = useState('');
    const [seatNumber, setSeatNumber] = useState('');
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const handleBooking = () => {
        axios.post('/api/bookings/book', { flightId, seatNumber, userId: 1 })  // User ID should be dynamically retrieved
            .then(response => {
                setBookingConfirmed(true);
            })
            .catch(error => {
                console.error('Error booking flight', error);
            });
    };

    return (
        <div className={styles.bookingContainer}>
            <h2 className={styles.title}>Book Your Flight</h2>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
                <input
                    className={styles.input}
                    type="text"
                    value={flightId}
                    onChange={(e) => setFlightId(e.target.value)}
                    placeholder="Flight ID"
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    placeholder="Seat Number"
                    required
                />
                <button className={styles.button} type="submit">Book Flight</button>
            </form>
            {bookingConfirmed && <BookingConfirmation flightId={flightId} seatNumber={seatNumber} />}
        </div>
    );
};

export default FlightBooking;
