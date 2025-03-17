import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAHAAR Treasury Solutions",
  description: "Bitcoin Strategy Solutions for Enterprises",
  metadataBase: new URL('https://mahaarsolutions.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                  MAHAAR
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <p>&copy; {new Date().getFullYear()} MAHAAR Treasury Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
