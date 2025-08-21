'use client';

import Link from 'next/link';

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
    <section id="about" className="py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instrument Categories - same design */}
        <div className="flex justify-center items-center mb-20">
          <div className="grid grid-cols-6 gap-4">
            {instruments.map((instrument, index) => (
              <div
                key={index}
                className={`${instrument.bgColor} ${instrument.textColor} rounded-2xl p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden w-48 h-48 flex flex-col justify-center items-center`}
              >
                {/* Decorative patterns */}
                <div className="absolute top-2 left-2 w-8 h-8 opacity-10 text-white">
                  <svg viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16"/></svg>
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 opacity-10 text-white">
                  <svg viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16"/></svg>
                </div>

                {/* Icon + Title */}
                <div className="relative z-10">
                  <div className="text-7xl mb-4">{instrument.icon}</div>
                  <h3 className="text-2xl font-bold">{instrument.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side - Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-6 font-[Montserrat]">
              ABOUT <span className="text-black">MOUJ MAALIK</span>
            </h2>
            <p className="text-lg text-[#353535] leading-relaxed mb-6 font-[Roboto]">
              Mouj Maalik is a light, energetic, and inclusive music academy based in Delhi. 
              We blend <span className="text-[#FFAB91] font-semibold">Indian & Western music</span> 
              traditions with modern teaching. Guided by expert faculty, our studio-driven courses 
              create an <span className="text-[#81E6D9] font-semibold">authentic experience</span> 
              for learners, musicians, and producers alike.
            </p>
            <p className="italic text-[#353535] mb-8 font-[Merriweather]">
              "Music is not taught here, it's lived."
            </p>
            <Link href="/about">
              <button className="px-8 py-4 bg-[#FFF176] text-[#353535] font-semibold text-lg rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                Know More About Us
              </button>
            </Link>
          </div>

          {/* Right Side - Real Studio Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden">
              {/* Real Photo (from Pexels - copyright free) */}
              <img 
                src="https://images.pexels.com/photos/164907/pexels-photo-164907.jpeg" 
                alt="Music class in studio" 
                className="w-full h-full object-cover"
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

