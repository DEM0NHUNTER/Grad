// src/pages/ChildProfileForm.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '@/api/client';
import { Link } from 'react-router-dom';
interface Profile { name: string; age: number; }

const ChildProfileForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<Profile>({ name: '', age: 0 });

  useEffect(() => {
    if (id) {
      apiClient.get(`/api/child_profile/${id}`)
        .then(res => setForm(res.data))
        .catch(console.error);
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await apiClient.put(`/api/child_profile/${id}`, form);
    } else {
      await apiClient.post('/api/child_profile', form);
    }
    navigate('/profiles');
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">
        {id ? 'Edit Profile' : 'New Profile'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="mt-1 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Age</label>
          <input
            type="number"
            value={form.age}
            onChange={e => setForm({ ...form, age: Number(e.target.value) })}
            className="mt-1 w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
};

export default ChildProfileForm;
