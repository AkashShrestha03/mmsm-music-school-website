'use client';

import { FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { playButtonSound, playRagaHoverSound } from "../../utils/soundEffects";

const holidays = [
  { id: 1, name: "New Year's Day", date: "1 Jan 2025", color: "bg-rose-50 border-l-4 border-rose-500" },
  { id: 2, name: "Republic Day", date: "26 Jan 2025", color: "bg-orange-50 border-l-4 border-orange-500" },
  { id: 3, name: "Holi", date: "14 Mar 2025", color: "bg-yellow-50 border-l-4 border-yellow-500" },
  { id: 4, name: "Independence Day", date: "15 Aug 2025", color: "bg-emerald-50 border-l-4 border-emerald-500" },
  { id: 5, name: "Raksha Bandhan", date: "9 Aug 2025", color: "bg-purple-50 border-l-4 border-purple-500" },
  { id: 6, name: "Gandhi Jayanti", date: "2 Oct 2025", color: "bg-pink-50 border-l-4 border-pink-500" },
  { id: 7, name: "Dussehra", date: "2 Oct 2025", color: "bg-red-50 border-l-4 border-red-500" },
  { id: 8, name: "Diwali", date: "21 Oct 2025", color: "bg-amber-50 border-l-4 border-amber-500" },
  { id: 9, name: "Vishwakarma Day", date: "22 Oct 2025", color: "bg-teal-50 border-l-4 border-teal-500" },
  { id: 10, name: "Christmas", date: "25 Dec 2025", color: "bg-red-50 border-l-4 border-red-600" },
];

export default function HolidayTimeline() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen py-16 px-6 pt-32 relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative inline-block">
            {/* Decorative elements around the heading */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-4 h-4 sm:w-8 sm:h-8 border-2 border-amber-400 rounded-full opacity-60"></div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 border-2 border-amber-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-3 h-3 sm:w-6 sm:h-6 border-2 border-purple-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 h-3 sm:w-6 sm:h-6 border-2 border-purple-400 rounded-full opacity-60"></div>
            
            {/* Main heading with enhanced styling */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide font-['Montserrat'] mb-4 relative z-10 px-4">
              <span className="text-white block sm:inline">Holiday</span>
              <span className="text-amber-400 block sm:inline sm:ml-4 mt-2 sm:mt-0">Calendar</span>
              <span className="text-purple-400 block sm:inline sm:ml-4 mt-2 sm:mt-0">2025</span>
            </h1>
            
            {/* Decorative line below heading */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-amber-400 rounded-full"></div>
              <div className="w-12 h-1 sm:w-16 sm:h-1 bg-purple-400 rounded-full"></div>
              <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-amber-400 rounded-full"></div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-gray-300 font-['Nunito'] max-w-2xl mx-auto leading-relaxed mt-6 sm:mt-8 px-4">
            Like music notes on a staff, each holiday marks a beat in the rhythm of the year.
          </p>
        </div>

        {/* Curved "musical path" */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
          {/* Wavy musical line */}
          <svg className="absolute left-1/2 top-0 w-1 h-full transform -translate-x-1/2 opacity-60" viewBox="0 0 4 2000" fill="none" style={{ height: '100%' }}>
            <path
              d="M 2 0 L 2 2000"
              stroke="#9CA3AF"
              strokeWidth="4"
              strokeDasharray="8 8"
              fill="transparent"
            />
          </svg>

          {/* Musical Staff Lines */}
          <div className="absolute left-1/2 top-0 w-16 sm:w-32 h-full transform -translate-x-1/2 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-amber-400/30"
                style={{ top: `${i * 20}%` }}
              ></div>
            ))}
          </div>

          {/* Floating Music Notes - Mobile Responsive */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top section notes */}
            <motion.div
              className="absolute top-10 sm:top-20 left-4 sm:left-20 text-xl sm:text-3xl text-amber-400/40"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-20 sm:top-40 right-4 sm:right-32 text-lg sm:text-2xl text-purple-400/40"
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              ♫
            </motion.div>
            
            {/* Middle section notes */}
            <motion.div
              className="absolute top-40 sm:top-80 left-8 sm:left-32 text-lg sm:text-2xl text-pink-400/40"
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-60 sm:top-96 right-6 sm:right-20 text-xl sm:text-3xl text-blue-400/40"
              animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              ♫
            </motion.div>
            
            {/* Lower section notes */}
            <motion.div
              className="absolute top-[300px] sm:top-[500px] left-4 sm:left-16 text-lg sm:text-2xl text-green-400/40"
              animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-[400px] sm:top-[600px] right-4 sm:right-16 text-xl sm:text-3xl text-orange-400/40"
              animate={{ y: [0, 8, 0], rotate: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 2.5 }}
            >
              ♫
            </motion.div>
            
            {/* Bottom section notes */}
            <motion.div
              className="absolute top-[500px] sm:top-[700px] left-6 sm:left-24 text-lg sm:text-2xl text-cyan-400/40"
              animate={{ y: [0, -5, 0], rotate: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.8 }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-[600px] sm:top-[800px] right-8 sm:right-28 text-xl sm:text-3xl text-yellow-400/40"
              animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 3 }}
            >
              ♫
            </motion.div>
            
            {/* Far bottom notes */}
            <motion.div
              className="absolute top-[700px] sm:top-[900px] left-5 sm:left-20 text-lg sm:text-2xl text-indigo-400/40"
              animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 1.2 }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-[800px] sm:top-[1000px] right-6 sm:right-24 text-xl sm:text-3xl text-rose-400/40"
              animate={{ y: [0, 9, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.1, ease: "easeInOut", delay: 2.8 }}
            >
              ♫
            </motion.div>
            
            {/* Additional scattered notes */}
            <motion.div
              className="absolute top-[350px] sm:top-[400px] left-10 sm:left-40 text-base sm:text-xl text-emerald-400/30"
              animate={{ y: [0, -4, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 3.3, ease: "easeInOut", delay: 0.3 }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute top-[450px] sm:top-[550px] right-10 sm:right-40 text-base sm:text-xl text-violet-400/30"
              animate={{ y: [0, 6, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 1.8 }}
            >
              ♫
            </motion.div>
          </div>

          {/* Holiday Notes */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32 relative">
            {holidays.map((holiday, index) => (
              <motion.div
                key={holiday.id}
                className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                onAnimationComplete={() => {
                  console.log('Card appeared:', holiday.name);
                  playRagaHoverSound();
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Card */}
                <div 
                  className={`w-full sm:w-80 p-4 sm:p-6 rounded-2xl shadow-lg bg-gray-800 border border-gray-700 relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    index % 2 === 0 ? "sm:mr-8 lg:mr-16" : "sm:ml-8 lg:ml-8"
                  }`}
                  onMouseEnter={() => {
                    console.log('Hovering over card:', holiday.name);
                    playRagaHoverSound();
                  }}
                  onClick={() => {
                    console.log('Clicking card:', holiday.name);
                    playButtonSound();
                  }}
                >
                  {/* Date badge */}
                  <span className="absolute -top-3 sm:-top-5 left-4 sm:left-6 px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold bg-gray-700 border border-gray-600 rounded-full shadow-sm text-gray-300">
                    {holiday.date}
                  </span>

                  <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-white font-['Montserrat']">
                    {holiday.name}
                  </h2>
                </div>

                {/* Musical note node */}
                <motion.div
                  className="absolute left-1/2 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 border-2 border-amber-400 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 mt-4 sm:mt-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.6, delay: index * 0.2 }}
                  onMouseEnter={() => {
                    console.log('Hovering over music icon for:', holiday.name);
                    playRagaHoverSound();
                  }}
                  onClick={() => {
                    console.log('Clicking music icon for:', holiday.name);
                    playButtonSound();
                  }}
                >
                  <FaMusic className="text-amber-400 text-xs sm:text-sm" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



