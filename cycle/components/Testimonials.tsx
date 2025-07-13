'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Cycling Enthusiast',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20happy%20female%20cyclist%20with%20helmet%20smiling%20portrait%20clean%20background%20natural%20lighting%20confident%20expression&width=200&height=200&seq=person1&orientation=squarish',
      rating: 5,
      text: 'BikeHub has the best selection of bikes in the city! I found my perfect mountain bike here, and their service is exceptional. The staff really knows their stuff.'
    },
    {
      name: 'Michael Chen',
      role: 'Daily Commuter',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20cyclist%20in%20casual%20attire%20smiling%20portrait%20clean%20background%20natural%20lighting%20friendly%20expression&width=200&height=200&seq=person2&orientation=squarish',
      rating: 5,
      text: 'I rent bikes from BikeHub regularly for my daily commute. The booking process is seamless, and the bikes are always in perfect condition. Highly recommend!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Weekend Rider',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20latina%20female%20cyclist%20wearing%20sports%20attire%20smiling%20portrait%20clean%20background%20natural%20lighting%20athletic%20expression&width=200&height=200&seq=person3&orientation=squarish',
      rating: 5,
      text: 'The repair service at BikeHub is outstanding. They fixed my bike quickly and at a fair price. The team is knowledgeable and truly cares about their customers.'
    },
    {
      name: 'David Thompson',
      role: 'Adventure Cyclist',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20middle%20aged%20male%20cyclist%20with%20beard%20smiling%20portrait%20clean%20background%20natural%20lighting%20adventurous%20expression&width=200&height=200&seq=person4&orientation=squarish',
      rating: 5,
      text: 'As someone who takes cycling seriously, I appreciate BikeHub\'s attention to detail. From sales to maintenance, they deliver premium service every time.'
    },
    {
      name: 'Lisa Park',
      role: 'Family Cyclist',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20cyclist%20with%20family%20friendly%20expression%20smiling%20portrait%20clean%20background%20natural%20lighting%20warm%20expression&width=200&height=200&seq=person5&orientation=squarish',
      rating: 5,
      text: 'BikeHub helped our entire family get into cycling. They have great bikes for kids and adults, plus they taught us proper safety techniques. Amazing experience!'
    },
    {
      name: 'James Wilson',
      role: 'Electric Bike User',
      image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20mature%20male%20cyclist%20with%20gray%20hair%20smiling%20portrait%20clean%20background%20natural%20lighting%20experienced%20expression&width=200&height=200&seq=person6&orientation=squarish',
      rating: 5,
      text: 'I was hesitant about electric bikes, but BikeHub\'s team patiently explained everything. Now I love my e-bike! Their expertise and service are unmatched.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust BikeHub for their cycling needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill w-5 h-5 flex items-center justify-center text-yellow-400"></i>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}