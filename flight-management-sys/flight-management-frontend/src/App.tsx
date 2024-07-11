import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import FlightSearch from './components/FlightSearch';
import FlightBooking from './components/FlightBooking';
import BookingConfirmation from './components/BookingConfirmation';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/search" element={<FlightSearch />} />
                <Route path="/book" element={<FlightBooking />} />
                <Route path="/confirm" element={<BookingConfirmation flightId="1" seatNumber="A1" />} /> {/* Sample route */}
            </Routes>
        </Router>
    );
};

export default App;
