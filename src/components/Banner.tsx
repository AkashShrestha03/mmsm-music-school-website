'use client';

import Image from 'next/image';

const Banner = () => {
  const instruments = [
    { icon: "🎸", title: "Guitar", bgColor: "bg-red-800", textColor: "text-white" },
    { icon: "🎤", title: "Vocals", bgColor: "bg-amber-100", textColor: "text-black" },
    { icon: "🥁", title: "Drums", bgColor: "bg-red-800", textColor: "text-white" }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-visible">
      {/* Background Image */}
      <Image
        src="/banner.jpg"
        alt="MOUJ MAALIK Banner"
        fill
        className="object-cover object-center"
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      />
      
      {/* Banner Content with Margin */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {/* Banner Content Area */}
        
        {/* Instrument Cards - Positioned to overlap banner (even more below) */}
        <div className="flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[70%]">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {instruments.map((instrument, index) => (
              <div
                key={index}
                                 className={`${instrument.bgColor} ${instrument.textColor} rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 flex flex-col justify-center items-center group hover:scale-105`}
              >
                {/* Decorative patterns */}
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:w-8 opacity-10 text-white">
                  <svg viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16"/></svg>
                </div>
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:w-8 opacity-10 text-white">
                  <svg viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16"/></svg>
                </div>

                                 {/* Icon + Title */}
                 <div className="relative z-10">
                   <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{instrument.icon}</div>
                   <h3 className="text-sm font-bold">{instrument.title}</h3>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
