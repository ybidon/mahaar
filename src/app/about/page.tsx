import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - Mahaar',
};

export default function About() {
  return (
    <div className="py-20">
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About MAHAAR Treasury Solutions</h1>
        <div className="space-y-12">
          {/* Full Width Text */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
              MAHAAR Treasury Solutions is a Middle East-based advisory firm driving Bitcoin adoption in the region. Established in 2024, we help enterprises integrate Bitcoin into their treasury operations securely, compliantly, and efficiently.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Our team brings expertise in Bitcoin, financial strategy, and risk management, with experience in crypto investment firms and family offices. Backed by a strong network across brokers, liquidity providers, and custodians, we provide the insight and infrastructure needed for seamless execution and institutional-grade solutions.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Institutional-grade custody solutions with multi-signature security protocols</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Comprehensive risk assessment and mitigation strategies</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Strategic Bitcoin acquisition and treasury management</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Regulatory compliance and reporting frameworks</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Integration with existing treasury systems</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> 24/7 monitoring and risk management</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Custom reporting and analytics dashboard</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Emergency response and recovery procedures</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Regular security audits and compliance checks</p>
            <p className="text-lg text-gray-600"><span className="text-2xl text-[#0f1240]">•</span> Dedicated support team and training programs</p>
          </div>
        </div>
      </section>
    </div>
  );
} 