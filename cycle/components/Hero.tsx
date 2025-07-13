'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=modern%20bicycle%20shop%20exterior%20with%20sleek%20bikes%20displayed%20professional%20cycling%20equipment%20store%20with%20clean%20minimal%20design%20and%20bright%20lighting%20showcasing%20premium%20mountain%20bikes%20and%20road%20bikes&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="w-full px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ride Your
            <span className="text-blue-400 block">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover premium bikes for every journey. From mountain trails to city streets, we have the perfect bike for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bikes" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Shop Bikes
            </Link>
            <Link href="/rent" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">
              Rent Now
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-2xl"></i>
      </div>
    </section>
  );
}