import Link from "next/link";
import Image from "next/image";
import BitcoinHoldersTable from '@/components/BitcoinHoldersTable';
import CountriesTable from '@/components/CountriesTable';

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f1240] to-[#1a1f5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Treasury with Bitcoin
            </h1>
            <p className="text-xl mb-8">
              Strategic Bitcoin solutions for forward-thinking enterprises
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#0f1240] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Started
            </Link>
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
                Seamless integration of Bitcoin into your existing treasury operations
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
        <h2 className="text-2xl font-bold text-gray-900">Top Bitcoin Holders amongst Public Companies</h2>
      </div>
      <BitcoinHoldersTable />
      
      <div className="mt-16 mb-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Top Bitcoin Holders amongst Countries</h2>
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
