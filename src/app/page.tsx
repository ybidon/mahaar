import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Treasury?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading companies in the Bitcoin revolution
          </p>
          <Link
            href="/contact"
            className="bg-[#0f1240] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f5c] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
