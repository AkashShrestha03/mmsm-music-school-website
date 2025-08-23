"use client";
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const holidays = [
  { id: 1, name: "1st Jan – New Year's Day", color: "bg-rose-200" },
  { id: 2, name: "Republic Day", color: "bg-orange-200" },
  { id: 3, name: "Holi", color: "bg-yellow-200" },
  { id: 4, name: "Independence Day", color: "bg-emerald-200" },
  { id: 5, name: "Raksha Bandhan", color: "bg-purple-200" },
  { id: 6, name: "Gandhi Jayanti", color: "bg-pink-200" },
  { id: 7, name: "Dussehra", color: "bg-red-200" },
  { id: 8, name: "Diwali", color: "bg-amber-200" },
  { id: 9, name: "Vishwakarma Day", color: "bg-teal-200" },
  { id: 10, name: "Christmas", color: "bg-red-300" },
];

export default function HolidayTimeline() {
  return (
    <>
      <Navbar />
      <div className="bg-amber-50 min-h-screen py-12 px-6 pt-32">
        {/* Enhanced Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-black tracking-wide font-['Montserrat'] mb-4">
            Holiday <span className="text-[#5A4B3C]">Calendar</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#5A4B3C]"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#5A4B3C] via-black to-[#5A4B3C] rounded-full"></div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#5A4B3C]"></div>
          </div>
          <p className="text-lg text-[#353535] font-['Nunito'] leading-relaxed max-w-2xl mx-auto">
            Mark your calendars and plan your musical journey around these special days
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-yellow-400 to-green-400 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {holidays.map((holiday, index) => (
              <motion.div
                key={holiday.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`w-72 p-5 shadow-xl rounded-2xl ${holiday.color} relative`}
                >
                  <span className="absolute -top-3 -left-3 bg-black text-white text-xs px-2 py-1 rounded-full shadow-md">
                    #{holiday.id}
                  </span>
                  <h2 className="font-semibold text-lg">{holiday.name}</h2>
                </div>
                {/* Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-pink-400 rounded-full shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

