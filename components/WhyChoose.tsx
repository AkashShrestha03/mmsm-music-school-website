"use client";

import { GraduationCap, Music2, DollarSign, Mic, Users, Radio } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-10 h-10 text-[#7A3E3E]" />,
    title: "Certified & Experienced Faculty",
    desc: "Structured and expert-led learning with certified mentors.",
  },
  {
    icon: <Music2 className="w-10 h-10 text-[#A67C52]" />,
    title: "Indian + Western Fusion",
    desc: "Unique balance of classical depth & modern expression.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-[#B08D57]" />,
    title: "Transparent Fee Structure",
    desc: "No hidden costs, open communication.",
  },
  {
    icon: <Mic className="w-10 h-10 text-[#6D4C41]" />,
    title: "Performance-Oriented",
    desc: "Regular concerts, recitals & recordings.",
  },
  {
    icon: <Radio className="w-10 h-10 text-[#7B3F61]" />,
    title: "Professional Studio Services",
    desc: "Soundproofing, production & post-production.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#8C6239]" />,
    title: "Community & Mentorship",
    desc: "Lifelong guidance for passionate learners.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#FDF6E3] to-[#FAF3E0]">
              <div className="absolute inset-0 opacity-10 bg-[url('/music-notes-texture.png')] bg-repeat"></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#7A3E3E] font-bold">
          Why Students & Professionals Choose <span className="text-[#B08D57]">MMSM</span>
        </h2>
        <div className="mt-4 w-24 mx-auto border-b-4 border-[#B08D57] rounded"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#FFF9F0] rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 p-8 border border-[#E5D1A1]"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#5A3E2B] mb-2 text-center">{item.title}</h3>
            <p className="text-[#4A4A4A] text-sm text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

