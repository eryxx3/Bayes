'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800" style={{ fontFamily: '"Pacifico", serif' }}>
            BikeHub
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/bikes" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Bikes
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
            <Link href="/rent" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Rent Now
            </Link>
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center text-gray-700`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/bikes" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Bikes
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="/rent" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block text-center">
                Rent Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}