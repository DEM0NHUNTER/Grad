// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import GoogleButton from '@/components/GoogleButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null); // For error message
  const navigate = useNavigate(); // React router's navigate hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password, rememberMe);
      navigate('/dashboard'); // Redirect to the dashboard after login
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

    return (
    <div className="max-w-md w-full mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={e => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-blue-600"
          />
          <label className="ml-2 text-sm">Remember Me</label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <div className="my-4">
        <GoogleButton />
      </div>
      <div className="text-center">
        <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;