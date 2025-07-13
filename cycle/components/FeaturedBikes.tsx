'use client';

import Link from 'next/link';

export default function FeaturedBikes() {
  const bikes = [
    {
      id: 1,
      name: 'Mountain Explorer Pro',
      price: '$1,299',
      image: 'https://readdy.ai/api/search-image?query=professional%20mountain%20bike%20with%20robust%20frame%20bright%20colors%20modern%20design%20clean%20white%20background%20studio%20photography%20premium%20bicycle%20equipment&width=400&height=300&seq=bike1&orientation=landscape',
      category: 'Mountain',
      features: ['27-Speed Shimano', 'Aluminum Frame', 'Front Suspension']
    },
    {
      id: 2,
      name: 'City Cruiser Elite',
      price: '$899',
      image: 'https://readdy.ai/api/search-image?query=elegant%20city%20bike%20with%20comfortable%20design%20urban%20commuter%20bicycle%20clean%20minimal%20background%20modern%20cycling%20equipment%20premium%20quality&width=400&height=300&seq=bike2&orientation=landscape',
      category: 'Urban',
      features: ['7-Speed Gear', 'Comfort Seat', 'LED Lights']
    },
    {
      id: 3,
      name: 'Road Racer X1',
      price: '$1,899',
      image: 'https://readdy.ai/api/search-image?query=sleek%20road%20bike%20with%20aerodynamic%20frame%20lightweight%20design%20racing%20bicycle%20clean%20white%20background%20professional%20cycling%20equipment%20premium%20sports%20bike&width=400&height=300&seq=bike3&orientation=landscape',
      category: 'Road',
      features: ['Carbon Frame', '21-Speed', 'Drop Handlebars']
    },
    {
      id: 4,
      name: 'Electric Power Bike',
      price: '$2,499',
      image: 'https://readdy.ai/api/search-image?query=modern%20electric%20bike%20with%20battery%20pack%20sleek%20design%20urban%20e-bike%20clean%20background%20premium%20electric%20bicycle%20with%20modern%20technology&width=400&height=300&seq=bike4&orientation=landscape',
      category: 'Electric',
      features: ['50mi Range', 'LCD Display', 'Fast Charging']
    },
    {
      id: 5,
      name: 'Kids Adventure',
      price: '$349',
      image: 'https://readdy.ai/api/search-image?query=colorful%20kids%20bicycle%20with%20training%20wheels%20safe%20design%20children%20bike%20bright%20colors%20clean%20background%20premium%20quality%20kids%20cycling%20equipment&width=400&height=300&seq=bike5&orientation=landscape',
      category: 'Kids',
      features: ['Training Wheels', 'Safety Gear', 'Adjustable Seat']
    },
    {
      id: 6,
      name: 'Hybrid Comfort',
      price: '$799',
      image: 'https://readdy.ai/api/search-image?query=hybrid%20bicycle%20with%20comfortable%20design%20versatile%20bike%20for%20city%20and%20trail%20riding%20clean%20background%20modern%20cycling%20equipment%20premium%20quality&width=400&height=300&seq=bike6&orientation=landscape',
      category: 'Hybrid',
      features: ['Versatile Design', 'Comfort Grips', 'Quick Release']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Bikes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium bikes designed for every rider and adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bikes.map((bike) => (
            <div key={bike.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {bike.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{bike.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{bike.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {bike.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  <Link href={`/bikes/${bike.id}`} className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    View Details
                  </Link>
                  <Link href="/rent" className="flex-1 bg-gray-100 text-gray-800 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer">
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/bikes" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            View All Bikes
          </Link>
        </div>
      </div>
    </section>
  );
}