"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0a0b1e]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="MAHAAR Logo"
              width={220}
              height={110}
              className="object-contain mt-10 -ml-8"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-[#cececf] hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#cececf] hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/research" 
              className="text-[#cececf] hover:text-white transition-colors duration-200"
            >
              Research
            </Link>
            <Link 
              href="/contact" 
              className="text-[#cececf] hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#cececf] hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-1 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block pl-4 py-2 text-[#cececf] hover:text-white hover:bg-blue-500/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block pl-4 py-2 text-[#cececf] hover:text-white hover:bg-blue-500/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/research"
                className="block pl-4 py-2 text-[#cececf] hover:text-white hover:bg-blue-500/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/contact"
                className="block pl-4 py-2 text-[#cececf] hover:text-white hover:bg-blue-500/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 