import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - Mahaar',
};

export default function About() {
  return (
    <div className="py-20">
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        </div>
        <div className="space-y-12">
          {/* Full Width Text */}
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8 leading-relaxed text-justify">
              MAHAAR Treasury Solutions is a Middle East-based advisory firm driving Bitcoin adoption in the region. Established in 2024, we help enterprises integrate Bitcoin into their treasury operations securely, compliantly, and efficiently.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our team brings expertise in Bitcoin, financial strategy, and risk management, with experience in crypto investment firms and family offices. Backed by a strong network across brokers, liquidity providers, and custodians, we provide the insight and infrastructure needed for seamless execution and institutional-grade solutions.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Seamless integration into a network of brokers, liquidity providers</p>
              <p className="text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Custom Bitcoin treasury strategies tailored to your business needs</p>
              <p className="text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Institutional-grade custody solutions with multi-signature security</p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Comprehensive risk assessment and mitigation strategies</p>
              <p className="text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> 24/7 monitoring and risk management</p>
              <p className="text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Dedicated support team and training programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 