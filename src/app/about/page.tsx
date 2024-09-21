import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-6">
        This is the About page of our Next.js app using TypeScript.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
}
