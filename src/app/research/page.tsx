import { Metadata } from "next";
import ResearchCard from "@/components/ResearchCard";

export const metadata: Metadata = {
  title: 'Research - Mahaar',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-gray-600">Explore our latest research papers and publications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResearchCard 
            title="Bitcoin: A Peer-to-Peer Electronic Cash System"
            description="The original Bitcoin whitepaper by Satoshi Nakamoto, introducing the first decentralized digital currency and blockchain technology."
            publishDate="October 2008"
            pdfPath="/bitcoin.pdf"
          />
          <ResearchCard 
            title="MicroStrategy - The American Pioneer"
            description="An analysis of MicroStrategy's pioneering approach to corporate Bitcoin treasury management and its impact on the institutional adoption of Bitcoin."
            publishDate="March 2024"
            pdfPath="/MicroStrategy - The American Pioneer.pdf"
          />
          {/* Add more research cards here */}
        </div>
      </div>
    </div>
  );
} 