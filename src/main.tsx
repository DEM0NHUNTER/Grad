// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from '@/context/AuthContext'; // ✅ correct import


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrap App here */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);