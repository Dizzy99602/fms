// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  user: { id: number; username: string; role: string } | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search-flights">Search Flights</Link>
      {user?.role === 'ADMIN' && <Link to="/add-flight">Add Flight</Link>}
      {!user && <Link to="/register">Register</Link>}
      {!user && <Link to="/login">Login</Link>}
      {user && (
        <div className="profile-dropdown">
          <span>{user.username}</span>
          <div className="profile-dropdown-content">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
