'use client';

import { useState } from 'react';
import Image from 'next/image';

const Services = () => {


  const services = [
    {
      id: 1,
      title: "Studio Rental",
      subtitle: "Flexible Bookings",
      description: "Rent professional studios for music recording, podcasting, and voice-overs.",
      features: ["Music Recording", "Podcasting", "Voice-Overs"],
      details: "Controlled Environment – acoustically treated for clear, high-quality sound.",
      borderColor: "border-blue-400",
      accentColor: "text-blue-600",
      image: "/service/studio rental.jpg"
    },
    {
      id: 2,
      title: "Soundproofing Consultation",
      subtitle: "Expert Guidance",
      description: "Professional consultation to design or upgrade spaces.",
      features: ["Tailored Solutions", "Home studios & commercial venues", "Auditoriums & theatres"],
      details: "Cost-Effective Approach – best sound within your budget.",
             borderColor: "border-teal-400",
       accentColor: "text-teal-600",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Audio Equipment Access",
      subtitle: "State-of-the-Art Gear",
      description: "Our studios are equipped with professional gear to deliver industry-standard results.",
      features: ["Microphones – crystal-clear capture", "Mixers – precision control", "Monitors – accurate sound playback"],
      details: "Every recording session achieves industry-standard quality.",
      borderColor: "border-purple-400",
      accentColor: "text-purple-600",
      image: "/Audio Equipment Access.jpg"
    },
    {
      id: 4,
      title: "Acoustic Treatment",
      subtitle: "Professional Sound Quality",
      description: "Optimize your space for the best audio experience.",
      features: ["Reverb Control", "Echo Elimination", "Sound Isolation"],
      details: "Optimized spaces – perfect for recording, mixing, and mastering.",
             borderColor: "border-indigo-400",
       accentColor: "text-indigo-600",
      image: "/service/Acoustic Treatment.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            Our <span className="text-gray-600">Services</span>
          </h2>
          <p className="text-lg text-[#353535] max-w-3xl mx-auto font-['Nunito'] leading-relaxed">
            At MMSM, we don&apos;t just teach music — we provide end-to-end solutions for learners, musicians, producers, and creators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
                             <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-300 relative group border-2 ${service.borderColor} hover:border-4 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
                {/* Image */}
                                 <div className="relative w-full h-52 overflow-hidden rounded-t-2xl shadow-inner">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-1 font-['Montserrat']">{service.title}</h3>
                  <p className={`text-sm font-semibold ${service.accentColor} mb-3`}>{service.subtitle}</p>
                  <p className="text-[#353535] text-sm mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 text-sm mb-4 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-2"></span>
                        <span className="text-[#353535]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Floating Key Benefit */}
                  <div className="mt-auto">
                                         <div className={`inline-block px-4 py-2 text-xs font-semibold rounded-full border-2 ${service.borderColor} ${service.accentColor} bg-white/95 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-4`}>
                      {service.details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
                     <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl border border-gray-200 max-w-3xl mx-auto transition-all duration-300">
            <h3 className="text-2xl font-bold text-black mb-4 font-['Montserrat']">
              Ready to Experience Professional Music Services?
            </h3>
            <p className="text-lg text-[#353535] mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether you need studio time, equipment access, or acoustic consultation, we&apos;ve got you covered with professional-grade solutions.
            </p>
            <button className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
