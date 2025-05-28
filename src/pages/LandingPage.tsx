// src/pages/LandingPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Welcome to Awladna</h1>
      <p className="text-lg text-gray-700 mb-8">
        Supporting child safety and communication through thoughtful design.
      </p>

      <div className="space-y-3 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center">
        <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
          Login
        </Link>
        <Link to="/register" className="px-6 py-3 bg-gray-200 text-blue-800 rounded shadow hover:bg-gray-300">
          Register
        </Link>
        <Link to="/dashboard" className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700">
          Dashboard
        </Link>
        <Link to="/chat" className="px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700">
          Chat
        </Link>
        <Link to="/admin" className="px-6 py-3 bg-red-600 text-white rounded shadow hover:bg-red-700">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
