import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo List Next JS",
  description: "Build todo list app with Next JS",
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
