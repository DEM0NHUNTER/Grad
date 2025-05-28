// src/pages/ChildProfileList.tsx
import React, { useEffect, useState } from 'react';
import apiClient from '@/api/client';
import { Link } from 'react-router-dom';

interface Profile { id: string; name: string; age: number; }

const ChildProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    apiClient.get('/api/child_profile')
      .then(res => setProfiles(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Child Profiles</h2>
      <Link to="/profiles/new" className="text-blue-600 hover:underline mb-4 inline-block">Add Profile</Link>
      <ul className="space-y-2">
        {profiles.map(p => (
          <li key={p.id} className="p-4 bg-white rounded shadow flex justify-between">
            <span>{p.name} (Age {p.age})</span>
            <div className="space-x-2">
              <Link to={`/profiles/${p.id}`} className="text-green-600 hover:underline">Edit</Link>
              <button
                onClick={async () => {
                  await apiClient.delete(`/api/child_profile/${p.id}`);
                  setProfiles(profiles.filter(x => x.id !== p.id));
                }}
                className="text-red-600 hover:underline"
              >Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildProfileList;
