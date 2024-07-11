import React from 'react';

interface BookingConfirmationProps {
    flightId: string;
    seatNumber: string;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ flightId, seatNumber }) => {
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>Flight ID: {flightId}</p>
            <p>Seat Number: {seatNumber}</p>
            <p>Your flight has been booked successfully!</p>
        </div>
    );
};

export default BookingConfirmation;
