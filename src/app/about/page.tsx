import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About - Mahaar',
};

export default function About() {
  return (
    <div className="py-20">
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h1 className="text-4xl font-bold mb-8 text-center">About MAHAAR Treasury Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="prose max-w-none">
            <p className="text-base text-gray-600 mb-8 leading-relaxed text-justify">
              MAHAAR Treasury Solutions is a Middle East-based advisory firm driving Bitcoin adoption in the region. Established in 2024, we help enterprises integrate Bitcoin into their treasury operations securely, compliantly, and efficiently.
            </p>
            <p className="text-base text-gray-600 leading-relaxed text-justify">
              Our team brings expertise in Bitcoin, financial strategy, and risk management, with experience in crypto investment firms and family offices. Backed by a strong network across brokers, liquidity providers, and custodians, we provide the insight and infrastructure needed for seamless execution and institutional-grade solutions.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">1</div>
              <p className="text-gray-600">Strategic Bitcoin treasury integration</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">2</div>
              <p className="text-gray-600">Institutional-grade custody solutions</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">3</div>
              <p className="text-gray-600">Risk management and compliance</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">4</div>
              <p className="text-gray-600">OTC trading and liquidity access</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">5</div>
              <p className="text-gray-600">Portfolio optimization strategies</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">6</div>
              <p className="text-gray-600">Market analysis and research</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">7</div>
              <p className="text-gray-600">Regulatory compliance guidance</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">8</div>
              <p className="text-gray-600">Technology infrastructure setup</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">9</div>
              <p className="text-gray-600">Training and education programs</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f1240] text-white flex items-center justify-center text-sm font-semibold">10</div>
              <p className="text-gray-600">24/7 operational support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 