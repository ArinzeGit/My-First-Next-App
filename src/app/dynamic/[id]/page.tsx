"use client";
import { useParams } from "next/navigation";
import Link from "next/link"; // Import Link for navigation

export default function DynamicPage() {
  const { id } = useParams(); // dynamically captures the id from the route

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Page: {id}</h1>

      <Link href="/" className="text-blue-500 underline hover:text-blue-700">
        Back to Home
      </Link>
    </div>
  );
}
