import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 pt-2 pb-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="MAHAAR Logo"
              width={180}
              height={72}
              className="object-contain mt-4"
              priority
            />
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#0f1240]">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#0f1240]">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0f1240]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 