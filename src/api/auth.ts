// src/api/auth.ts

import apiClient from './client';

interface LoginPayload {
  email: string;
  password: string;
  remember: boolean;
}

interface RegisterPayload {
  name : string;
  email: string;
  password: string;
}

interface ResetPasswordPayload {
  token: string;
  newPassword: string;
}

export const login = async ({ email, password, remember }: LoginPayload) => {
  return apiClient.post('/auth/login', { email, password, remember });
};

export const register = async ({ email, password }: RegisterPayload) => {
  return apiClient.post('/auth/register', { email, password });
};

export const forgotPassword = async (email: string) => {
  return apiClient.post('/auth/forgot-password', { email });
};

export const resetPassword = async ({ token, newPassword }: ResetPasswordPayload) => {
  return apiClient.post('/auth/reset-password', { token, newPassword });
};

export const logout = async () => {
  return apiClient.post('/auth/logout');
};
