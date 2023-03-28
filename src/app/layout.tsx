import "./globals.css";

export const metadata = {
  title: "Lume",
  description: "an ambitious nostr client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black w-full relative overflow-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
