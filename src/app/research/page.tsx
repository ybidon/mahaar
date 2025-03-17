export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Research</h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore our latest research papers and publications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example PDF card - you can add more cards for different PDFs */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Research Paper Title</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Brief description of the research paper and its key findings.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Published: January 2024</span>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0f1240] hover:bg-[#1a1f5c]"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 