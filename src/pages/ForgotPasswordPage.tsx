// src/pages/ForgotPasswordPage.tsx
import React, { useState } from 'react';
import { forgotPassword } from '@/api/auth';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await forgotPassword(email);
    setMessage('If that email exists, a reset link has been sent.');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full border-gray-300 rounded-md"
          required
        />
        <button type="submit" className="w-full py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
