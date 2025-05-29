// src/pages/ChatHistoryPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import apiClient from '@/api/client';

interface Chat { id: string; childName: string; summary: string; }

const ChatHistoryPage: React.FC = () => {
  const [history, setHistory] = useState<Chat[]>([]);

  useEffect(() => {
    apiClient.get('/api/chat/history')
      .then(res => setHistory(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Chat History</h2>
      <ul className="space-y-2">
        {history.map(h => (
          <li key={h.id} className="p-4 bg-white rounded shadow">
            <p className="font-medium">{h.childName}</p>
            <p className="text-sm text-gray-500">{h.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistoryPage;
