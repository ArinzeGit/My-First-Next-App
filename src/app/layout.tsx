import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app using TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-lg">My App Header</h1>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4">
          <p>My App Footer</p>
        </footer>
      </body>
    </html>
  );
}
