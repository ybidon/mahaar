import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterNavbar from '@/components/FooterNavbar';
import Script from 'next/script';

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
        <Script id="twitter-conversion-tracking" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','powcq');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <FooterNavbar />
      </body>
    </html>
  );
}
