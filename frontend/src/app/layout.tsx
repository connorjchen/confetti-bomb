import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confetti Bomb",
  description:
    "Confetti Bomb is a fun and exciting way to celebrate any accomplishment. Send a confetti bomb to someone today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
