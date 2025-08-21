'use client';


import { Montserrat, Nunito, Merriweather } from 'next/font/google';

// Google Fonts (optimized for Next.js)
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

const Banner = () => {


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFDF6]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner.jpg"
          alt="MOUJ MAALIK Banner"
          className="w-screen h-screen object-cover object-top opacity-90"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#353535]/70 via-[#353535]/50 to-[#81E6D9]/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center pt-32">
          {/* Branding */}
          <div className="w-full">
            <div className="mb-12">
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${montserrat.className}`}
              >
               
                <br />
               
              </h1>
              <p
                className={`text-xl sm:text-2xl lg:text-3xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md ${nunito.className}`}
              >
                UNLEASH YOUR INNER MUSICIAN
              </p>

              {/* Accent Quote */}
              <p
                className={`italic text-lg text-[#FFF176]/90 mt-4 ${merriweather.className}`}
              >
                &ldquo;Where passion meets melody&rdquo;
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              

              <button
                className={`px-10 py-4 border-2 border-[#81E6D9] text-[#81E6D9] font-bold text-lg rounded-lg hover:bg-[#81E6D9] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-[#81E6D9]/60 ${nunito.className}`}
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Music Notes Animation */}
      <div className="absolute top-10 left-12 text-[#81E6D9] opacity-60 animate-bounce">
        <span className="text-4xl">♪</span>
      </div>
      <div className="absolute top-32 right-20 text-[#FFAB91] opacity-60 animate-pulse">
        <span className="text-3xl">♫</span>
      </div>
      <div className="absolute bottom-24 left-28 text-[#FFF176] opacity-60 animate-bounce">
        <span className="text-4xl">♩</span>
      </div>
      <div className="absolute bottom-10 right-16 text-[#C8F8E4] opacity-60 animate-pulse">
        <span className="text-5xl">♬</span>
      </div>
    </section>
  );
};

export default Banner;
