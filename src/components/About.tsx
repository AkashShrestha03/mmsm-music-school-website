'use client';

import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Side - Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
              About <span className="text-gray-600">Mouj Maalik</span>
            </h2>
            <p className="text-base sm:text-lg text-[#353535] leading-relaxed mb-4 sm:mb-6 font-['Roboto']">
              Mouj Maalik is a light, energetic, and inclusive music academy based in Delhi. 
              We blend <span className="text-[#FFAB91] font-semibold">Indian & Western music</span> 
              traditions with modern teaching. Guided by expert faculty, our studio-driven courses 
              create an <span className="text-[#81E6D9] font-semibold">authentic experience</span> 
              for learners, musicians, and producers alike.
            </p>
            <p className="italic text-[#353535] mb-6 sm:mb-8 font-['Merriweather'] text-sm sm:text-base">
              &ldquo;Music is not taught here, it&apos;s lived.&rdquo;
            </p>
            <Link href="/about">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-500 text-white font-semibold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                Know More About Us
              </button>
            </Link>
          </div>

          {/* Right Side - Real Studio Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Music Studio Image */}
              <Image 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop" 
                alt="Professional music studio with instruments" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient Overlay for brand feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#81E6D9]/30 via-[#C8F8E4]/30 to-[#FFAB91]/30 mix-blend-multiply"></div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;

