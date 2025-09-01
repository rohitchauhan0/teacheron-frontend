'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      // router.push(`/tutors?location=${encodeURIComponent(location)}&role=${role}`);
      router.push(`/all-tutors`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-[600px]">
        <h1 className="text-xl font-bold mb-4 text-center">Find Teachers</h1>

        {/* Select Student/Parent */}
        <select
          value={role}
          onChange={handleRoleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
        </select>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {/* Find by Location */}
          <form onSubmit={handleLocationSubmit}>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Find by Location
            </button>
          </form>

          {/* See All Teachers */}
          <button
            onClick={() => router.push(`/all-tutors?role=${role}`)}
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            See All Teachers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
