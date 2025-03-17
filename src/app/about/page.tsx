export default function About() {
  return (
    <div className="py-20">
      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h1 className="text-4xl font-bold mb-8">About MAHAAR Treasury Solutions</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2024, Mahaar Treasury Solutions emerged from a vision to bridge the gap between traditional treasury management and the burgeoning world of Bitcoin. We recognized that enterprises needed expert guidance to navigate the complexities of Bitcoin integration into their treasury operations.
          </p>
          <p className="text-lg text-gray-600">
            Our team combines decades of treasury management experience with deep expertise in Bitcoin and digital assets. We've helped numerous companies successfully implement Bitcoin strategies that align with their business objectives while maintaining robust risk management practices.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of treasury management through cutting-edge Bitcoin solutions
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency and reliable expertise
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional results through meticulous attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Strategy</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Technical Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 