"use client";

import { playButtonSound, playRagaHoverSound } from '../utils/soundEffects';

const CTA = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 font-['Montserrat']">
            Ready to Experience Professional Music Services?
          </h2>
          <p className="text-lg sm:text-xl text-[#353535] mb-8 max-w-3xl mx-auto leading-relaxed font-['Nunito'] italic">
            Whether you need studio time, equipment access, or acoustic consultation, we&apos;ve got you covered with professional-grade solutions.
          </p>
          {/* <button 
            className="px-8 py-4 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl active:shadow-inner cursor-pointer hover:-translate-y-1 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={playButtonSound}
            onMouseEnter={playRagaHoverSound}
          >
            Get Started Today
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
