"use client";

import Image from "next/image";
import { useState } from "react";
import { playButtonSound } from '../utils/soundEffects';

interface AcousticsService {
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  level: string;
  features: string[];
  highlight?: string;
  instructor: string;
  schedule: string;
}

const AcousticsSolutions = () => {
  const [selectedService, setSelectedService] = useState<AcousticsService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: AcousticsService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const acousticsServices: AcousticsService[] = [
    {
      name: "Soundproofing Consultation",
      description: "Expert guidance to design or upgrade spaces for optimal acoustic performance.",
      image: "/service/sound.jpg",
      duration: "Flexible",
      price: "Consultation Based",
      level: "All Levels",
      features: ["Home Studios", "Commercial Venues", "Jampads", "Auditoriums & Theatres"],
      highlight: "Cost-Effective Approach – Delivering the best sound within your budget.",
      instructor: "Acoustic Specialist",
      schedule: "By Appointment"
    },
    {
      name: "Acoustic Treatment",
      description: "Professional acoustic treatment solutions for recording, mixing, and mastering.",
      image: "/service/Acoustic Treatment.jpg",
      duration: "Project Based",
      price: "Custom Quote",
      level: "All Levels",
      features: ["Reverb Control", "Echo Elimination", "Sound Isolation", "Optimized Spaces"],
      highlight: "Perfect for recording, mixing, and mastering with studio-grade sound quality.",
      instructor: "Acoustic Engineer",
      schedule: "Project Timeline"
    }
  ];

  return (
         <section id="acoustics-solutions" className="py-12 md:py-16 lg:py-20 bg-pink-50">
       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
         <div className="text-center mb-8 md:mb-12 lg:mb-16">
           <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
             Acoustics & <span className="text-gray-600">Soundproofing Solutions</span>
           </h2>
           <p className="text-base md:text-lg lg:text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito'] italic px-4">
             Transform your space into an acoustically perfect environment with our professional consultation and treatment services.
           </p>
         </div>

                 {/* Services Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mb-12">
          {acousticsServices.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="group cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95"
              onClick={() => openModal(service)}
            >
                             {/* Enhanced Card with Better Shadows */}
               <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#C8F8E4] relative overflow-hidden h-full flex flex-col">
                
                                 {/* Gradient Overlay on Hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#81E6D9]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl lg:rounded-3xl z-10"></div>
                
                                 {/* Image Container */}
                 <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                                 {/* Content */}
                 <div className="p-3 md:p-4 lg:p-6 relative z-20 flex-1 flex flex-col">
                                     <h4 className="text-base md:text-lg lg:text-xl font-bold text-black mb-2 md:mb-3 font-['Montserrat'] group-hover:text-[#81E6D9] transition-colors duration-300">
                     {service.name}
                   </h4>
                   
                   <p className="text-xs md:text-sm lg:text-base text-[#353535] mb-4 font-['Nunito'] italic leading-relaxed flex-1">
                     {service.description}
                   </p>

                                     {/* CTA Button */}
                   {/* <button 
                     className="w-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-[#FFD54F] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 text-xs md:text-sm lg:text-base mt-auto"
                     onClick={playButtonSound}
                   >
                     Learn More
                   </button> */}
                </div>

                                 {/* Decorative Elements */}
                 <div className="absolute top-2 md:top-4 right-2 md:right-4 w-2 md:w-3 h-2 md:h-3 bg-[#81E6D9] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button 
              onClick={() => {
                closeModal();
                playButtonSound();
              }} 
              className="absolute top-3 sm:top-6 right-3 sm:right-6 z-10 bg-white rounded-full p-2 sm:p-2 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Hero Image */}
              <div className="relative h-48 sm:h-64 lg:h-80 w-full">
                <Image src={selectedService.image} alt={selectedService.name} fill className="object-cover rounded-t-2xl sm:rounded-t-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl sm:rounded-t-3xl" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{selectedService.name}</h2>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90">{selectedService.description}</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-4 sm:p-6 lg:p-8">
                                                                   {selectedService.name === "Soundproofing Consultation" ? (
                    <>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Soundproofing Consultation</h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          Professional consultation to design or upgrade spaces.
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Tailored Solutions</h4>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                              <span className="text-lg text-gray-700 font-medium">Home studios & commercial venues</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                              <span className="text-lg text-gray-700 font-medium">Auditoriums & theatres</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500 mb-6">
                          <p className="text-lg text-purple-800 font-medium">
                            Cost-Effective Approach – best sound within your budget.
                          </p>
                        </div>
                      </div>
                     
                     {/* <div className="text-center">
                       <button 
                         className="px-8 py-3 bg-[#81E6D9] hover:bg-[#6DD5C8] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#6DD5C8] focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:ring-opacity-50"
                         onClick={playButtonSound}
                       >
                         Book Consultation
                       </button>
                     </div> */}
                   </>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Acoustic Treatment Services</h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Professional acoustic treatment solutions for recording, mixing, and mastering.
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                          <span className="text-lg text-gray-700 font-medium">Reverb Control – minimize excessive reflections for clarity</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                          <span className="text-lg text-gray-700 font-medium">Echo Elimination – clean, tight, studio-grade sound</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                          <span className="text-lg text-gray-700 font-medium">Sound Isolation – external noise blocked, internal sound contained</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                          <span className="text-lg text-gray-700 font-medium">Optimized Spaces – perfect for recording, mixing, and mastering</span>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500 mb-6">
                        <p className="text-lg text-purple-800 font-medium">
                          Perfect for recording, mixing, and mastering with studio-grade sound quality.
                        </p>
                      </div>
                    </div>
                    
                    {/* <div className="text-center">
                      <button 
                        className="px-8 py-3 bg-[#81E6D9] hover:bg-[#6DD5C8] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#6DD5C8] focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:ring-opacity-50"
                        onClick={playButtonSound}
                      >
                        Get Treatment Quote
                      </button>
                    </div> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AcousticsSolutions;
