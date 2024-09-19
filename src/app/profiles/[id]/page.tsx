"use client";
import { useParams } from "next/navigation";

export default function ProfilePage() {
  const { id } = useParams(); // dynamically captures the id from the route

  return (
    <div>
      <h1>Profile: {id}</h1>
    </div>
  );
}
