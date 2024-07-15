import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import SearchFlights from './components/SearchFlights';
import BookFlight from './components/BookFlight';
import AddFlight from './components/AddFlight';

const App: React.FC = () => {
  const role = localStorage.getItem('role');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/register">Register User</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/search-flights">Search Flights</Link></li>
            <li><Link to="/book-flight">Book Flight</Link></li>
            {role === 'ADMIN' && <li><Link to="/add-flight">Add Flight</Link></li>}
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/search-flights" element={<SearchFlights />} />
          <Route path="/book-flight" element={<BookFlight />} />
          {role === 'ADMIN' && <Route path="/add-flight" element={<AddFlight />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
