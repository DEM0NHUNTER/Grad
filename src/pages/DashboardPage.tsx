// src/pages/DashboardPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-10">
      <main className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 md:p-12 max-w-xl w-full text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-sm">
          Awladna
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Empowering parents and children with safe and supportive communication tools.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/login"
            className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-blue-800 transition-transform transform hover:scale-105 duration-200 w-full sm:w-auto"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl bg-white text-primary border border-primary font-semibold shadow hover:bg-blue-50 transition-transform transform hover:scale-105 duration-200 w-full sm:w-auto"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

