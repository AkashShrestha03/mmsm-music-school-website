'use client';

import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  const instruments = [
    { icon: "🎸", title: "Guitar", bgColor: "bg-red-800", textColor: "text-white" },
    { icon: "🎤", title: "Vocals", bgColor: "bg-amber-100", textColor: "text-black" },
    { icon: "🥁", title: "Drums", bgColor: "bg-red-800", textColor: "text-white" },
    { icon: "🎹", title: "Piano", bgColor: "bg-amber-100", textColor: "text-black" },
    { icon: "🎻", title: "Violin", bgColor: "bg-red-800", textColor: "text-white" },
    { icon: "🎺", title: "Trumpet", bgColor: "bg-amber-100", textColor: "text-black" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instrument Categories - Responsive Grid */}
        <div className="flex justify-center items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instruments.map((instrument, index) => (
              <div
                key={index}
                className={`${instrument.bgColor} ${instrument.textColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 flex flex-col justify-center items-center group hover:scale-105`}
              >
                {/* Decorative patterns */}
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 opacity-10 text-white">
                  <svg viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16"/></svg>
                </div>
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 opacity-10 text-white">
                  <svg viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16"/></svg>
                </div>

                {/* Icon + Title */}
                <div className="relative z-10">
                  <div className="text-2xl sm:text-4xl lg:text-7xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{instrument.icon}</div>
                  <h3 className="text-sm sm:text-lg lg:text-2xl font-bold">{instrument.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Side - Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 font-['Montserrat']">
              ABOUT <span className="text-black">MOUJ MAALIK</span>
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
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFF176] text-[#353535] font-semibold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                Know More About Us
              </button>
            </Link>
          </div>

          {/* Right Side - Real Studio Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Real Photo (from Pexels - copyright free) */}
              <Image 
                src="https://images.pexels.com/photos/164907/pexels-photo-164907.jpeg" 
                alt="Music class in studio" 
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

