// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import SearchFlights from './components/SearchFlights';
import BookFlight from './components/BookFlight';
import AddFlight from './components/AddFlight';
import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: number; username: string; role: string } | null>(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterUser />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginUser onLogin={setUser} />} />
        <Route path="/search-flights" element={<SearchFlights />} />
        <Route path="/book-flight/:flightId" element={<BookFlight />} />
        <Route path="/add-flight" element={user?.role === 'ADMIN' ? <AddFlight /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
