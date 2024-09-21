"use client"; // Make sure to use "use client" for client-side operations
import { useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700 mb-6">
          This is the Dashboard page of our Next.js app using TypeScript.
        </p>
        <div className="flex justify-between mb-4">
          <button
            onClick={fetchUsers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Display First 10 Users
          </button>
          <button
            onClick={clearUsers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Users
          </button>
        </div>
        <ul className="mt-6 space-y-3">
          {users.map((user: any, index: number) => (
            <li
              key={index}
              className="bg-gray-50 border border-gray-200 p-3 rounded-md shadow-sm"
            >
              {user.name}
            </li>
          ))}
        </ul>

        {/* Back to Home button */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
