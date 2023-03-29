import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Lume",
  description: "an ambitious nostr client",
  url: "https://uselume.xyz",
  siteName: "Lume",
  images: [
    {
      url: "https://void.cat/d/7gFCCa7wMqcLkyX7jpZxL8",
      width: 800,
      height: 600,
    },
    {
      url: "https://void.cat/d/FRqmULJHUjrGknsY7eFEHZ",
      width: 1600,
      height: 1200,
      alt: "@2x",
    },
  ],
  locale: "en-US",
  type: "website",
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
        <Analytics />
      </body>
    </html>
  );
}
