import Link from "next/link";
import Image from "next/image";
import BitcoinHoldersTable from '@/components/BitcoinHoldersTable';
import CountriesTable from '@/components/CountriesTable';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Mahaar',
};

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/divers.jpg"
            alt="DIFC"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
                Leap Ahead — Secure Your Treasury with Bitcoin
              </h1>
              <p className="text-2xl mb-8 text-white/90">
                Strategic Bitcoin solutions for forward-thinking enterprises
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#0f1240] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Strategy Development</h3>
              <p className="text-gray-600">
                Custom Bitcoin treasury strategies tailored to your business needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-gray-600">
                Seamless integration into a network of brokers, liquidity providers and OTC desks
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Comprehensive risk assessment and mitigation strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Top Bitcoin Holders Amongst Public Companies</h2>
        <p className="text-sm text-gray-500 mt-1">As of 03/2025</p>
      </div>
      <BitcoinHoldersTable />
      
      <div className="mt-16 mb-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Top Bitcoin Holders Amongst Countries</h2>
        <p className="text-sm text-gray-500 mt-1">As of 03/2025</p>
      </div>
      <CountriesTable />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4 mt-24">
        <Link href="/about" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-600">Learn about our mission and values</p>
          </div>
        </Link>
        <Link href="/research" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Research</h2>
            <p className="text-gray-600">Explore our latest insights and analysis</p>
          </div>
        </Link>
        <Link href="/contact" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </div>
        </Link>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0f1240] to-[#1a1f5c] p-12 text-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Treasury?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join leading companies in the Bitcoin revolution
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#0f1240] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
