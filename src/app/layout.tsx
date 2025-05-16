import Header from"./components/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<roel.code /> - Home",
  description: "My portfolio website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// footer HTML component
const footer = (
  <footer className="flex items-center justify-center p-4 bg-gray-100 text-gray-800 text-sm font-bold">
    <p>2025 &copy; - All rights reserved.</p>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen px-25 bg-gray-100`}
      >
        <Header />

        {children}

        {footer}
      </body>
    </html>
  );
}