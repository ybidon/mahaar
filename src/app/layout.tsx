import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAHAAR Treasury Solutions",
  description: "Strategic Bitcoin solutions for forward-thinking enterprises",
  metadataBase: new URL('https://mahaarsolutions.com'),
  icons: {
    icon: [
      { url: '/pearl.svg', type: 'image/svg+xml' },
      { url: '/pearl.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/pearl.svg', sizes: 'any', type: 'image/svg+xml' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pearl.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
