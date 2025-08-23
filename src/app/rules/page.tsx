"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RulesCreative() {
  const rules = [
    "Please be sure to arrive on time for each lesson. The teacher will not make up lost time due to the student's late arrival.",
    "In individual classes any missed lesson will not be compensated due to any reason. If the student missed the class due to medical reasons then the medical certificate needs to be submitted to the school for compensating the class.",
    "If the student decides to discontinue music lessons, Mouj Maalik School of Music must be informed at least 7 days in advance and it will not refund any tuition Fee.",
    "Students have to finish classes within 1 month only as any missed classes grace will not be provided.",
    "Fees once paid are not refundable. Payment of fees made by a person entitled only to that particular person whose name is written in the forms. Any other Family member or friend of the person cannot enjoy the benefits of the class at that fee.",
    "No classes will be given on National/Public/Gazetted Holidays.",
    "It will not be adjusted if students miss the group classes.",
    "It's also mandatory for the students to pay the fee on time that is within 1st 10 days of every month otherwise Rs 500 late fees will be charged.",
    "All disputes are Subject to Delhi Jurisdiction Only."
  ];

  return (
    <>
      <Navbar />
      <div className="bg-rose-50 py-20 px-6 pt-32">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-black tracking-wide font-['Montserrat']">
              Rules & <span className="text-[#5A4B3C]">Regulations</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#5A4B3C]"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#5A4B3C] via-black to-[#5A4B3C] rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#5A4B3C]"></div>
            </div>
            <p className="mt-6 text-lg text-[#353535] font-['Nunito'] leading-relaxed max-w-2xl mx-auto">
              Just like every raga has its discipline, we too follow certain 
              guidelines to ensure harmony in our learning journey.
            </p>
          </div>

          {/* Rules List */}
          <div className="grid md:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg p-8 border border-[#E8E3DA] transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Decorative Number */}
                <div className="absolute -top-6 -left-6 text-[5rem] font-extrabold text-[#E0D8C7] font-serif opacity-70">
                  {index + 1}
                </div>

                {/* Rule Text */}
                <p className="text-[#353535] text-base font-['Nunito'] leading-relaxed relative z-10 pl-8">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-md text-[#5A4B3C] italic font-['Caveat']">
              By joining Mouj Maalik School of Music, you become part of a tradition
              where discipline and passion go hand in hand 🎶
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
