"use client";

import Image from "next/image";

const services = [
  {
    title: "Studio Rental",
    subtitle: "Flexible Bookings",
    description: "Rent professional studios for music recording, podcasting, and voice-overs.",
    points: ["Music Recording", "Podcasting", "Voice-Overs"],
    highlight: "Controlled Environment – acoustically treated for clear, high-quality sound.",
    img: "/service/studio rental.jpg"
  },
  {
    title: "Soundproofing Consultation",
    subtitle: "Expert Guidance",
    description: "Professional consultation to design or upgrade spaces.",
    points: ["Tailored Solutions", "Home studios & commercial venues", "Auditoriums & theatres"],
    highlight: "Cost-Effective Approach – best sound within your budget.",
    img: "/guitars.jpg"
  },
  {
    title: "Audio Equipment Access",
    subtitle: "State-of-the-Art Gear",
    description: "Our studios are equipped with professional gear to deliver industry-standard results.",
    points: [
      "Microphones – crystal-clear vocal & instrument capture",
      "Mixers – precision control for balanced sound",
      "Monitors – accurate sound playback for editing & mixing"
    ],
    highlight: "Every recording session achieves industry-standard quality.",
    img: "/service/Audio Equipment Access.jpg"
  },
  {
    title: "Acoustic Treatment",
    subtitle: "Sound Optimization",
    description: "Professional acoustic treatment for optimal sound quality in any space.",
    points: [
      "Reverb Control – minimize excessive reflections",
      "Echo Elimination – clean, tight, studio-grade sound",
      "Sound Isolation – external noise blocked"
    ],
    highlight: "Optimized Spaces – perfect for recording, mixing, and mastering.",
    img: "/service/Acoustic Treatment.jpg"
  }
];

export default function Services() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black font-['Montserrat']">
            Our <span className="text-gray-600">Services</span>
          </h2>
          <p className="text-lg text-[#353535] mt-4 max-w-3xl mx-auto font-['Nunito'] leading-relaxed">
            At MMSM, we don&apos;t just teach music — we provide end-to-end solutions for learners, musicians, producers, and creators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Ribbon Badge */}
                <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {service.subtitle}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 font-['Montserrat'] group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-purple-700 italic border-l-4 border-purple-500 pl-3">
                  {service.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
