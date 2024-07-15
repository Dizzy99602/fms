// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import SearchFlights from './components/SearchFlights';
import BookFlight from './components/BookFlight';
import AddFlight from './components/AddFlight';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/search-flights" element={<SearchFlights />} />
        <Route path="/book-flight/:flightId" element={<BookFlight />} />
        <Route path="/add-flight" element={<AddFlight />} />
      </Routes>
    </Router>
  );
};

export default App;
