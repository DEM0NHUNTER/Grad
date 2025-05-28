// src/context/AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as apiLogin, register as apiRegister, logout as apiLogout } from '@/api/auth';
import apiClient from '@/api/client';
console.log("AuthContext loaded")
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // On mount, check if user is already authenticated
  useEffect(() => {
    apiClient
      .get('/api/me')
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

    const login = async (email: string, password: string, rememberMe: boolean) => {
      const response = await apiLogin({ email, password, rememberMe });
      // Assuming the response contains a token
      localStorage.setItem('auth_token', response.data.token);
      const res = await apiClient.get('/api/me');
      setUser(res.data);
    };


  const register = async (name: string, email: string, password: string) => {
    await apiRegister({ name, email, password });
    const res = await apiClient.get('/api/me');
    setUser(res.data);
  };

    const logout = async () => {
      await apiLogout();
      localStorage.removeItem('auth_token');
      setUser(null);
    };


  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
