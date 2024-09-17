import Header from "@/components/Header";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Header />
      <p className="mt-4">Welcome to the homepage!</p>
      <h1 className="text-2xl font-bold">Welcome to My Next.js App</h1>
      <Button label="Click Me" />
    </div>
  );
}
