import Header from "@/components/Header";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <p className="mt-4">Welcome to the homepage!</p>
      <h1 className="text-2xl font-bold">Welcome to My Next.js App</h1>
      <Button label="Click Me" />
      <Image
        src="/images/Arinze in suit.jpg"
        alt="Arinze in a suit"
        width={400}
        height={400}
      />
      <div className="flex flex-col items-start">
        <Link href="/about" className="text-blue-500 underline">
          About Us
        </Link>
        <Link href="/login" className="text-blue-500 underline">
          Login
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
      </div>
    </div>
  );
}
