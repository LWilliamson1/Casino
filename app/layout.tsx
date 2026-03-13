import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Draughts & Dragons | Tavern & Tomes",
  description:
    "A fantasy-themed bar and TTRPG retail space. Enjoy craft ales, premium miniatures, paints, board games, and trading card games. Book your next event with us!",
  keywords: [
    "TTRPG bar",
    "D&D tavern",
    "miniatures",
    "board games",
    "TCG",
    "Magic the Gathering",
    "painting tutorials",
    "Friday Night Magic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-dungeon-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
