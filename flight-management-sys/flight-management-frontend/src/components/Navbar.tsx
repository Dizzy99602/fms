// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.role === 'ADMIN';
  const isLoggedIn = Boolean(user.username);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/search-flights" className="nav-link">Search Flights</Link>
      {isAdmin && <Link to="/add-flight" className="nav-link">Add Flight</Link>}
      {isLoggedIn ? (
        <div className="profile-menu">
          <span className="profile-icon">👤</span>
          <div className="profile-dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
