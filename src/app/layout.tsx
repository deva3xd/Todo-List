import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YourTodo",
  description: "A simple todo app wiith brutalism design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
