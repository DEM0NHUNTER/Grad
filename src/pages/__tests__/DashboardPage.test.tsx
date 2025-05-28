// src/pages/__tests__/DashboardPage.test.tsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DashboardPage from '../DashboardPage';
import { MemoryRouter } from 'react-router-dom';
import { apiClient } from '@/api/client';
import userEvent from '@testing-library/user-event';

jest.mock('@/api/client');

const mockProfiles = [
  { id: '1', name: 'Alice', age: 5 },
  { id: '2', name: 'Bob', age: 7 },
];

describe('DashboardPage', () => {
  beforeEach(() => {
    // @ts-ignore
    apiClient.get.mockResolvedValue({ data: mockProfiles });
  });

  it('renders loader, then profiles list', async () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('status')).toBeInTheDocument(); // Loader uses role="status"
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });

  it('handles API errors', async () => {
    // @ts-ignore
    apiClient.get.mockRejectedValueOnce(new Error('Network error'));
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Failed to load profiles.')).toBeInTheDocument();
    });
  });
});
