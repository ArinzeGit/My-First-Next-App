"use client"; // Make sure to use "use client" for client-side operations
import { useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function Dashboard() {
  const [users, setUsers] = useState<any[]>([]); // Make sure users is typed as an array

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log("Fetched users:", data); // Log the data to check its structure
      if (Array.isArray(data)) {
        setUsers(data); // Only set users if the data is an array
      } else {
        console.error("Expected an array but got:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const clearUsers = () => {
    setUsers([]); // Clear the users array
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
          {/* Safeguard map by ensuring users is an array */}
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user: any, index: number) => (
              <li
                key={index}
                className="bg-gray-50 border border-gray-200 p-3 rounded-md shadow-sm"
              >
                {user.name}
              </li>
            ))
          ) : (
            <p>No users to display</p>
          )}
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
