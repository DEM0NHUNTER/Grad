// src/pages/AdminDashboardPage.tsx
import React, { useEffect, useState } from 'react';
import apiClient from '@/api/client';
import { Link } from 'react-router-dom';

interface Metrics { totalUsers: number; totalChats: number; }

const AdminDashboardPage: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({ totalUsers: 0, totalChats: 0 });

  useEffect(() => {
    apiClient.get('/api/admin/metrics')
      .then(res => setMetrics(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-xl font-bold">{metrics.totalUsers}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-sm text-gray-500">Total Chats</p>
          <p className="text-xl font-bold">{metrics.totalChats}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
