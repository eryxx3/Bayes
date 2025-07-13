'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              BikeHub
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium bikes and exceptional cycling experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-youtube-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/bikes" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Bikes</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Bike Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Bike Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Repairs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                <span className="text-gray-400">123 Bike Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-blue-400"></i>
                <span className="text-gray-400">info@bikehub.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 BikeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}