"use client"; // Make sure to use "use client" for client-side operations

import { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import Button from "@/components/Button";
import { useSession, signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error message
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any existing error before submitting

    const response = await fetch("/api/customAuth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      document.cookie = `auth-token=${token}; path=/`; // Set the cookie

      // Force a page reload after login
      window.location.href = "/dashboard";
    } else {
      // Update error state with a custom message
      setError("This user does not exist");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
        {/* Add hint for the demo credentials */}
        <p className="mt-4 text-gray-600 text-center">
          For practice, you can log in with <strong>user@example.com</strong>{" "}
          and <strong>password</strong>.
        </p>
      </form>
      {!session && (
        <div className="mt-4">
          <p className="text-l font-bold mb-4 text-center">OR</p>
          <Button
            label="Sign in with google"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          />
        </div>
      )}

      <Link
        href="/"
        className="mt-4 text-blue-500 underline hover:text-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default LoginPage;
