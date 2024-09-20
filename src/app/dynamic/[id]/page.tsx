"use client";
import { useParams } from "next/navigation";

export default function DynamicPage() {
  const { id } = useParams(); // dynamically captures the id from the route

  return (
    <div>
      <h1>Dynamic Page: {id}</h1>
    </div>
  );
}
