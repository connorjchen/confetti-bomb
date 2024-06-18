import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
      <body className="flex flex-col h-screen">
        <div className="grow">{children}</div>
      </body>
    </html>
  );
}
