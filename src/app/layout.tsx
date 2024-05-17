import type { Metadata } from "next";
import NavBar from "@/components/navbar";
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
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
