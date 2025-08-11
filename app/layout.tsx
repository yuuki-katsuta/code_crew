import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "チーム開発メンバー募集プラットフォーム",
  description: "チーム開発のためのメンバー募集専用プラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
