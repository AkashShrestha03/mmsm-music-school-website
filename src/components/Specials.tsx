'use client';

import { useState } from 'react';
import { playButtonSound, playRagaHoverSound } from '../utils/soundEffects';

const Specials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const specialCards = [
    {
      id: 1,
      title: "VIP Masterclass",
      description: "Exclusive one-on-one sessions with world-renowned musicians. Perfect your technique with personalized guidance.",
      icon: "🎵",
      price: "₹299",
      duration: "2 Hours",
      features: ["Personalized feedback", "Recording session", "Certificate of completion"]
    },
    {
      id: 2,
      title: "Band Workshop",
      description: "Join a group of passionate musicians and learn the art of collaboration. Experience the magic of playing together.",
      icon: "🎸",
      price: "₹149",
      duration: "4 Weeks",
      features: ["Group dynamics", "Performance skills", "Final showcase"]
    },
    {
      id: 3,
      title: "Music Production",
      description: "Learn modern music production techniques using industry-standard software. Create your own professional tracks.",
      icon: "🎧",
      price: "₹199",
      duration: "6 Weeks",
      features: ["DAW training", "Mixing basics", "Final project"]
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            Special <span className="text-gray-600">Offerings</span>
          </h2>
                     <p className="text-xl text-[#353535]/80 max-w-3xl mx-auto font-['Nunito'] italic">
             Discover our exclusive music programs designed to accelerate your musical journey
           </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialCards.map((card) => (
            <div
              key={card.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border border-[#C8F8E4] transition-all duration-500 transform ${
                hoveredCard === card.id 
                  ? 'scale-105 shadow-xl border-[#81E6D9]' 
                  : 'hover:scale-105 hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-2 font-['Montserrat']">{card.title}</h3>
                                 <p className="text-[#353535]/70 text-sm leading-relaxed font-['Nunito'] italic">{card.description}</p>
              </div>

              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6 p-4 bg-[#FAF3DD] rounded-lg">
                <div className="text-center">
                  <p className="text-[#353535]/60 text-sm font-['Nunito']">Price</p>
                  <p className="text-2xl font-bold text-[#FFAB91] font-['Montserrat']">{card.price}</p>
                </div>
                <div className="text-center">
                  <p className="text-[#353535]/60 text-sm font-['Nunito']">Duration</p>
                  <p className="text-lg font-semibold text-[#353535] font-['Nunito']">{card.duration}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                                 <h4 className="text-black font-semibold mb-3 font-['Montserrat']">What&apos;s Included:</h4>
                <ul className="space-y-2">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#353535]/80 font-['Nunito']">
                      <span className="text-[#81E6D9] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              {/* <button 
                className="w-full py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 font-['Nunito']"
                onClick={playButtonSound}
                onMouseEnter={playRagaHoverSound}
              >
                Enroll Now
              </button> */}

              {/* Hover Effect Overlay */}
              {hoveredCard === card.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#81E6D9]/20 to-transparent rounded-2xl pointer-events-none transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
                     <p className="text-[#353535]/80 text-lg mb-6 font-['Nunito'] italic">
             Ready to take your music to the next level?
           </p>
          {/* <button 
            className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 shadow-lg font-['Nunito']"
            onClick={playButtonSound}
            onMouseEnter={playRagaHoverSound}
          >
            View All Programs
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Specials;

