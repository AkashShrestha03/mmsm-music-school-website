'use client';

import { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Shivan Thukral",
      title: "Director - Mouj Maalik",
      text: "I've been using this service for a while now, and I must say that I am impressed with their commitment to providing high-quality services at reasonable prices. Strongly recommended!",
      rating: 5,
      image: "/testimonials/client1.jpg"
    },
    {
      id: 1,
      name: "Priya Sharma",
      title: "Music Student",
      text: "The instructors here are incredibly talented and patient. I've learned so much about classical music in just a few months. The studio facilities are top-notch!",
      rating: 5,
      image: "/testimonials/client2.jpg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      title: "Professional Musician",
      text: "As a working musician, I needed flexible studio time and professional equipment. This place delivers exactly what I need at affordable rates. Highly recommended!",
      rating: 5,
      image: "/testimonials/client3.jpg"
    }
  ];

  const shortTestimonials = [
    "I was wary of using a new service for my digital demands, but this company went well beyond my hopes.",
    "They offered excellent solutions for a portion of what other companies charged."
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Section Title and Short Testimonials */}
          <div>
            <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
              What Our <span className="text-gray-600">Clients Say</span>
            </h2>
            
            <div className="space-y-6">
              {shortTestimonials.map((testimonial, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {testimonial}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Testimonial and Client Navigation */}
          <div className="relative">
            {/* Featured Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 relative">
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-purple-500 text-xl">★</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>
              
              {/* Client Name and Title */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[activeTestimonial].title}
                </p>
              </div>
            </div>

            {/* Client Profile Pictures Navigation */}
            <div className="absolute -right-4 top-8 flex flex-col space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="relative">
                  {/* Profile Picture */}
                  <div 
                    className={`w-16 h-16 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'border-purple-500 scale-110' 
                        : 'border-purple-300 hover:border-purple-400'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {index === activeTestimonial && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
