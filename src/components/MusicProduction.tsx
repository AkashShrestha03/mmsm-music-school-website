"use client";

import Image from "next/image";
import { useState } from "react";
import { playButtonSound } from '../utils/soundEffects';

interface ProductionCourse {
  name: string;
  description: string;
  image: string;
  features: string[];
  highlight?: string;
  price?: string;
  schedule?: string;
  pricingDetails?: {
    individual: {
      monthly: string;
      registration: string;
    };
  };
}

const MusicProduction = () => {
  const [selectedCourse, setSelectedCourse] = useState<ProductionCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course: ProductionCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const productionCourses: ProductionCourse[] = [
         {
       name: "Music Production",
       description: "Learn professional music production techniques using industry-standard software and equipment.",
       image: "/service/music.jpg",
       features: ["Digital Audio Workstations", "Mixing & Mastering", "Sound Design", "Music Theory"],
       price: "₹4,000",
       schedule: "Individual: Once a week for 40 mins",
       pricingDetails: {
         individual: {
           monthly: "₹4,000",
           registration: "₹500 (first time)"
         }
       }
     },
    {
      name: "Studio Rental",
      description: "Rent professional studios for music recording, podcasting, and voice-overs.",
      image: "/service/studio rental.jpg",
      features: ["Music Recording", "Podcasting", "Voice-Overs"],
      highlight: "Controlled Environment – acoustically treated for clear, high-quality sound."
    },
    {
      name: "Audio Equipment Access",
      description: "Access to state-of-the-art professional audio equipment and gear.",
      image: "/service/Audio Equipment Access.jpg",
      features: ["Microphones", "Mixers", "Monitors", "Professional Standards"],
      highlight: "Every recording session achieves industry-standard quality."
    }
  ];

  return (
    <section id="music-production" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            School of <span className="text-gray-600">Music Production, Jampads and Recording Studio</span>
          </h2>
          <p className="text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito'] italic">
            Master the technical and creative aspects of music production, recording, and studio management. Learn from industry professionals in our state-of-the-art facilities.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {productionCourses.map((course, courseIndex) => (
            <div
              key={courseIndex}
              className="group cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95"
              onClick={() => openModal(course)}
            >
              {/* Enhanced Card with Better Shadows */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#C8F8E4] relative overflow-hidden h-full flex flex-col">
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#81E6D9]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl z-10"></div>
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 relative z-20 flex-1 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 font-['Montserrat'] group-hover:text-[#81E6D9] transition-colors duration-300">
                    {course.name}
                  </h4>
                  
                                     <p className="text-sm sm:text-base text-[#353535] mb-4 font-['Nunito'] italic leading-relaxed flex-1">
                     {course.description}
                   </p>

                  {/* CTA Button */}
                  {/* <button 
                    className="w-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-[#FFD54F] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 text-sm sm:text-base mt-auto"
                    onClick={playButtonSound}
                  >
                    Learn More
                  </button> */}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-[#81E6D9] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Course Detail Modal */}
      {isModalOpen && selectedCourse && (
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
                <Image src={selectedCourse.image} alt={selectedCourse.name} fill className="object-cover rounded-t-2xl sm:rounded-t-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl sm:rounded-t-3xl" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{selectedCourse.name}</h2>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90">{selectedCourse.description}</p>
                </div>
              </div>

                             {/* Service Details */}
               <div className="p-4 sm:p-6 lg:p-8">
                 {selectedCourse.name === "Music Production" ? (
                   <>
                     <div className="mb-6">
                       <h3 className="text-xl font-semibold text-gray-800 mb-4">Music Production Course</h3>
                       <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                         Master professional music production techniques using industry-standard software and equipment.
                       </p>
                       
                       {/* Pricing Details */}
                       {selectedCourse.pricingDetails && (
                         <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6 border-2 border-purple-200">
                           <h4 className="text-xl font-bold text-purple-800 mb-4 text-center">Course Pricing</h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="bg-white rounded-xl p-4 shadow-md">
                               <h5 className="font-semibold text-purple-700 mb-2">Individual Classes</h5>
                               <p className="text-2xl font-bold text-purple-800">{selectedCourse.pricingDetails.individual.monthly}</p>
                               <p className="text-sm text-gray-600">Registration: {selectedCourse.pricingDetails.individual.registration}</p>
                             </div>
                             <div className="bg-white rounded-xl p-4 shadow-md">
                               <h5 className="font-semibold text-purple-700 mb-2">Schedule</h5>
                               <p className="text-lg font-bold text-purple-800">{selectedCourse.schedule}</p>
                               <p className="text-sm text-gray-600">Flexible timing available</p>
                             </div>
                           </div>
                         </div>
                       )}
                       
                       <div className="space-y-4 mb-6">
                         <div className="flex items-center space-x-3">
                           <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                           <span className="text-lg text-gray-700 font-medium">Digital Audio Workstations (DAW)</span>
                         </div>
                         <div className="flex items-center space-x-3">
                           <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                           <span className="text-lg text-gray-700 font-medium">Mixing & Mastering Techniques</span>
                         </div>
                         <div className="flex items-center space-x-3">
                           <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                           <span className="text-lg text-gray-700 font-medium">Sound Design & Synthesis</span>
                         </div>
                         <div className="flex items-center space-x-3">
                           <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                           <span className="text-lg text-gray-700 font-medium">Music Theory & Composition</span>
                         </div>
                       </div>
                       
                       <div className="p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500 mb-6">
                         <p className="text-lg text-purple-800 font-medium">
                           Learn from industry professionals using the latest software and equipment.
                         </p>
                       </div>
                     </div>
                     
                     {/* <div className="text-center">
                       <button 
                         className="px-8 py-3 bg-[#81E6D9] hover:bg-[#6DD5C8] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#6DD5C8] focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:ring-opacity-50"
                         onClick={playButtonSound}
                       >
                         Enroll Now
                       </button>
                     </div> */}
                   </>
                 ) : selectedCourse.name === "Studio Rental" ? (
                     <>
                       <div className="mb-6">
                         <h3 className="text-xl font-semibold text-gray-800 mb-4">Studio Rental Services</h3>
                         <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                           Rent professional studios for music recording, podcasting, and voice-overs.
                         </p>
                         
                         <div className="space-y-4 mb-6">
                           <div className="flex items-center space-x-3">
                             <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                             <span className="text-lg text-gray-700 font-medium">Music Recording</span>
                           </div>
                           <div className="flex items-center space-x-3">
                             <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                             <span className="text-lg text-gray-700 font-medium">Podcasting</span>
                           </div>
                           <div className="flex items-center space-x-3">
                             <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                             <span className="text-lg text-gray-700 font-medium">Voice-Overs</span>
                           </div>
                         </div>
                         
                         <div className="p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500 mb-6">
                           <p className="text-lg text-purple-800 font-medium">
                             Controlled Environment – acoustically treated for clear, high-quality sound.
                           </p>
                         </div>
                       </div>
                       
                       {/* <div className="text-center">
                         <button 
                           className="px-8 py-3 bg-[#81E6D9] hover:bg-[#6DD5C8] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#6DD5C8] focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:ring-opacity-50"
                           onClick={playButtonSound}
                         >
                           Book Studio
                         </button>
                       </div> */}
                     </>
                                      ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Audio Equipment Access</h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          Our studios are equipped with professional gear to deliver industry-standard results.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                            <span className="text-lg text-gray-700 font-medium">Microphones – crystal-clear vocal & instrument capture</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                            <span className="text-lg text-gray-700 font-medium">Mixers – precision control for balanced sound</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-3 h-3 bg-[#81E6D9] rounded-full"></span>
                            <span className="text-lg text-gray-700 font-medium">Monitors – accurate sound playback for editing & mixing</span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500 mb-6">
                          <p className="text-lg text-purple-800 font-medium">
                            Every recording session achieves industry-standard quality.
                          </p>
                        </div>
                      </div>
                      
                      {/* <div className="text-center">
                        <button 
                          className="px-8 py-3 bg-[#81E6D9] hover:bg-[#6DD5C8] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#6DD5C8] focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:ring-opacity-50"
                          onClick={playButtonSound}
                        >
                          Access Equipment
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

export default MusicProduction;
