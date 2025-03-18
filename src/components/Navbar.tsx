import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0a0b1e]/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="MAHAAR Logo"
              width={180}
              height={90}
              className="object-contain mt-8"
              priority
            />
          </Link>
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/research" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Research
            </Link>
            <Link 
              href="/about" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 