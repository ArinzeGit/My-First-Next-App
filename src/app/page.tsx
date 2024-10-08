"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  // State to track whether the auth-token cookie is present
  const [hasAuthToken, setHasAuthToken] = useState(false);

  // Check for the auth-token cookie on the client side
  useEffect(() => {
    const checkAuthToken = () => {
      const cookies = document.cookie.split("; ");
      const authToken = cookies.find((cookie) =>
        cookie.startsWith("auth-token=")
      );
      if (authToken) {
        setHasAuthToken(true);
      }
    };

    checkAuthToken();
  }, []);

  // Function to sign out and remove the auth-token cookie
  const handleSignOut = () => {
    // If there's an auth-token cookie, remove it
    if (hasAuthToken) {
      document.cookie =
        "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      setHasAuthToken(false); // Update state
      window.location.href = "/";
    }

    // Sign out from OAuth (if session is active)
    if (session) {
      signOut();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          Welcome to My Next.js App
        </h1>
        <p className="mt-4 text-gray-600">Welcome to the homepage!</p>
        <Button label="Click Me For Nothing" />
        <Image
          src="/images/Arinze in suit.jpg"
          alt="Arinze in a suit"
          width={400}
          height={400}
          className="rounded-lg shadow-lg mt-6 mx-auto"
        />
      </div>
      <div className="mt-8 space-y-4 flex flex-col items-start">
        <Link href="/about" className="text-blue-500 underline">
          About Us
        </Link>
        <Link href="/dashboard" className="text-blue-500 underline">
          Dashboard
        </Link>
        <Link href="/dynamic/1" className="text-blue-500 underline">
          Dynamic route 1
        </Link>
        <Link href="/dynamic/2" className="text-blue-500 underline">
          Dynamic route 2
        </Link>
        {!session && !hasAuthToken ? (
          <Link href="/login">
            <Button label="Sign in" />
          </Link>
        ) : (
          <Button label="Sign out" onClick={handleSignOut} />
        )}
        {loading ? (
          <p>Loading...</p>
        ) : !session && !hasAuthToken ? (
          <p>Not signed in</p>
        ) : (
          <p>
            Signed in{" "}
            {session ? `as ${session.user?.email}` : "with auth-token cookie"}
          </p>
        )}
      </div>
    </div>
  );
}
