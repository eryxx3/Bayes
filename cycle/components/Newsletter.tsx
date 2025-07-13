'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=cyclist%20riding%20through%20scenic%20mountain%20trail%20beautiful%20landscape%20with%20bike%20path%20outdoor%20adventure%20cycling%20nature%20background&width=1920&height=600&seq=newsletter1&orientation=landscape')`
      }}
    >
      <div className="w-full px-6 text-center">
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get the latest updates on new bikes, exclusive deals, and cycling tips delivered to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-4 p-4 bg-green-600 text-white rounded-lg">
              <i className="ri-check-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
              Thank you for subscribing! Welcome to the BikeHub community.
            </div>
          )}
          
          <p className="text-sm text-gray-300 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}