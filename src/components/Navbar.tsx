// src/components/Navbar.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold mb-2 md:mb-0">Awladna</Link>
        <button
          className="md:hidden mb-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'} /></svg>
        </button>
        <div className={`${open ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6`}>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
              <Link to="/profiles" className="hover:text-primary">Profiles</Link>
              <Link to="/chat" className="hover:text-primary">Chat</Link>
              <button onClick={handleLogout} className="hover:text-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-primary">Login</Link>
              <Link to="/register" className="hover:text-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
