// src/pages/ChatPage.tsx
import React, { useEffect, useState, useRef } from 'react';
import apiClient from '@/api/client';
import { Link } from 'react-router-dom';

interface Message { id: string; text: string; fromChild: boolean; }

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const intervalRef = useRef<number>();

  useEffect(() => {
    const fetchMessages = () => {
      apiClient.get('/api/chat')
        .then(res => setMessages(res.data))
        .catch(console.error);
    };

    fetchMessages();
    intervalRef.current = window.setInterval(fetchMessages, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const sendMessage = async () => {
    if (!input) return;
    await apiClient.post('/api/chat', { text: input });
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map(m => (
          <div key={m.id} className={`${m.fromChild ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-white p-2 rounded shadow">
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-100 flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-md px-4"
        />
        <button onClick={sendMessage} className="px-4 bg-blue-600 text-white rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
