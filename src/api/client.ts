// src/api/client.ts
import axios from 'axios';

// Ensure the base URL is set from environment variables, fallback to default if not set
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'; // Default to localhost if not set

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true, // Ensures cookies and credentials are sent along with requests
});

// Request interceptor to add Authorization token to headers
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage or state/context
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  // Handle request error
  return Promise.reject(error);
});

// Response interceptor to handle errors globally
apiClient.interceptors.response.use(
  response => response,  // If response is successful, return it as is
  error => {
    // If error occurs, log it or handle globally
    console.error('API error:', error.response || error.message);
    // Optionally, you can add custom error handling logic here (e.g., redirecting to login on 401)
    return Promise.reject(error);
  }
);

export default apiClient;
