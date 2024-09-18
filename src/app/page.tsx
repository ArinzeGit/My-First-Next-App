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
        width={800}
        height={800}
      />
      <Link href="/about" className="text-blue-500 underline">
        About Us
      </Link>
    </div>
  );
}
