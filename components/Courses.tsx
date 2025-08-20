"use client";

import { Mic, Music } from "lucide-react";

export default function Courses() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-[#f4e9da] to-[#e7d6bf]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-[#4b2e2e] drop-shadow-sm">
          Special Programs
        </h2>
        <p className="mt-2 text-lg italic text-[#7a5a4b]">
          Professional music production with a touch of tradition
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="group relative bg-[#fdfaf5] border border-[#d4b998] shadow-xl rounded-2xl p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#b8895c]">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-b from-[#d4a373] to-[#b8895c] p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                <Mic className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-serif font-semibold text-[#4b2e2e]">
              Music Production & Audio Engineering
            </h3>
            <p className="mt-2 text-[#7a5a4b] italic">
              Short-term intensive course
            </p>
            <p className="mt-4 text-[#5a4639] leading-relaxed">
              Master the technical aspects of music production while staying
              connected to the soulful roots of Indian & Western traditions.
            </p>
            <button className="mt-6 px-6 py-2 rounded-full bg-[#6e3b3b] text-white shadow-md hover:bg-[#522828] transition">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#fdfaf5] border border-[#d4b998] shadow-xl rounded-2xl p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#b8895c]">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-b from-[#d4a373] to-[#b8895c] p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                <Music className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-serif font-semibold text-[#4b2e2e]">
              Fusion & Performance Workshops
            </h3>
            <p className="mt-2 text-[#7a5a4b] italic">
              Expressive concert-driven learning
            </p>
            <p className="mt-4 text-[#5a4639] leading-relaxed">
              Blend Indian classical depth with contemporary expression, perform
              in concerts, and gain hands-on studio experience.
            </p>
            <button className="mt-6 px-6 py-2 rounded-full bg-[#6e3b3b] text-white shadow-md hover:bg-[#522828] transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


