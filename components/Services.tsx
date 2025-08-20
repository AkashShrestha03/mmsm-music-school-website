// app/components/ServicesSection.jsx
"use client";
import { motion } from "framer-motion";
import { Music, Mic, Headphones, SlidersHorizontal, Disc } from "lucide-react";

const services = [
  {
    title: "Studio Rental",
    description: [
      "Flexible Bookings – Rent professional studios for music recording, podcasting, and voice-overs.",
      "Controlled Environment – Acoustically treated for clear, high-quality sound with no distractions."
    ],
    icon: <Mic className="w-10 h-10 text-pink-400" />
  },
  {
    title: "Soundproofing Consultation",
    description: [
      "Expert Guidance – Professional consultation to design or upgrade spaces.",
      "Tailored Solutions – Home studios, commercial venues, theatres & more.",
      "Cost-Effective Approach – Best sound within your budget."
    ],
    icon: <Headphones className="w-10 h-10 text-blue-400" />
  },
  {
    title: "Audio Equipment Access",
    description: [
      "Microphones – crystal-clear vocal & instrument capture.",
      "Mixers – precision control for balanced sound.",
      "Monitors – accurate playback for editing & mixing.",
      "Industry-standard quality for every recording session."
    ],
    icon: <Disc className="w-10 h-10 text-yellow-400" />
  },
  {
    title: "Acoustic Treatment",
    description: [
      "Reverb Control – minimize reflections for clarity.",
      "Echo Elimination – clean, tight, studio-grade sound.",
      "Sound Isolation – external noise blocked, internal sound contained.",
      "Optimized Spaces – perfect for recording, mixing, and mastering."
    ],
    icon: <SlidersHorizontal className="w-10 h-10 text-green-400" />
  },
  {
    title: "Post-Production Services",
    description: [
      "Mixing & Mastering – balance, clarity & consistency across tracks.",
      "Audio Editing – noise removal, vocal enhancement & polishing."
    ],
    icon: <Music className="w-10 h-10 text-red-400" />
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 overflow-hidden">
      {/* Decorative Background Wave */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 drop-shadow-lg mb-16">
          Our Services
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-200 to-yellow-100 rounded-full shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 font-medium">
                {service.description.map((point, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-red-500">•</span> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


