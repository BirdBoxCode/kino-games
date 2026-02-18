import type { Metadata } from "next";
import { Syne, Manrope, Inter } from "next/font/google"; // [NEW] fonts
import Navbar from "../components/ui/Navbar";
import "../styles/globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap", // Best practice
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kino Games",
  description: "When Video Games Meet the Big Screen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload Garet custom font to avoid FOUT */}
        <link
          rel="preload"
          href="/fonts/Garet-Book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${syne.variable} ${manrope.variable} ${inter.variable} antialiased bg-kino-black text-kino-silver`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
