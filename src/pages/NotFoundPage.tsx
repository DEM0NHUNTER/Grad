// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
    <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
  </div>
);

export default NotFoundPage;

