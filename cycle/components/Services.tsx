'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-bike-line',
      title: 'Bike Rentals',
      description: 'Rent premium bikes for your adventures. Hourly, daily, and weekly options available.',
      features: ['Flexible Rental Terms', 'Premium Bikes', 'Insurance Included', 'Free Helmet']
    },
    {
      icon: 'ri-tools-line',
      title: 'Bike Repairs',
      description: 'Expert repair services to keep your bike in perfect condition. Quick turnaround guaranteed.',
      features: ['Expert Technicians', 'Quality Parts', 'Quick Service', 'Warranty Included']
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'Bike Sales',
      description: 'Wide selection of new and certified pre-owned bikes from top brands at competitive prices.',
      features: ['Top Brands', 'Financing Options', 'Trade-in Program', 'Expert Advice']
    },
    {
      icon: 'ri-settings-line',
      title: 'Maintenance',
      description: 'Regular maintenance services to extend your bike life and ensure optimal performance.',
      features: ['Regular Tune-ups', 'Safety Checks', 'Performance Optimization', 'Seasonal Service']
    },
    {
      icon: 'ri-truck-line',
      title: 'Delivery Service',
      description: 'Convenient delivery and pickup services for rentals and purchases within the city.',
      features: ['Same-day Delivery', 'Free Pickup', 'Flexible Scheduling', 'Contact-free Service']
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Cycling Classes',
      description: 'Learn to ride safely with our professional instructors. Classes for all skill levels.',
      features: ['Beginner Classes', 'Safety Training', 'Group Sessions', 'Certified Instructors']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cycling solutions for every rider, from beginners to professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-blue-600 text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-500 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}