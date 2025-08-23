'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { playButtonSound, playRagaHoverSound } from '../utils/soundEffects';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 sm:py-20 bg-purple-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-purple-100 rounded-full opacity-30 animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Side - Text with Staggered Animation */}
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className={`text-4xl font-extrabold text-black mb-4 font-['Montserrat'] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              About <span className="text-gray-600">Mouj Maalik Music School</span>
            </h2>
            <p className={`text-base sm:text-lg text-[#353535] leading-relaxed mb-4 sm:mb-6 font-['Roboto'] transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              Mouj Maalik is a light, energetic, and inclusive music academy based in Delhi. 
              We blend <span className="text-[#FFAB91] font-semibold">Indian & Western music</span> 
              &nbsp;traditions with modern teaching. Guided by expert faculty, our studio-driven courses 
              create an <span className="text-[#81E6D9] font-semibold">authentic experience</span> 
              &nbsp;for learners, musicians, and producers alike.
            </p>
            <p className={`italic text-[#353535] mb-6 sm:mb-8 font-['Merriweather'] text-sm sm:text-base transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              &ldquo;Music is not taught here, it&apos;s lived.&rdquo;
            </p>
            <div className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Link href="/about">
                <button 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-500 text-white font-semibold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1 hover:bg-gray-600 active:bg-gray-700 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
                  onClick={playButtonSound}
                  onMouseEnter={playRagaHoverSound}
                >
                  Know More About Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Real Studio Image with Animation */}
          <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden group">
              {/* Music Studio Image */}
              <Image 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop" 
                alt="Professional music studio with instruments" 
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Gradient Overlay for brand feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#81E6D9]/30 via-[#C8F8E4]/30 to-[#FFAB91]/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">🎵</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">🎼</div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;

