"use client";

import Image from "next/image";
import { useState } from "react";
import { playButtonSound } from '../utils/soundEffects';

interface Course {
  name: string;
  description: string;
  image: string;
  price: string;
  level: string;
  features: string[];
  schedule: string;
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiplomaMode, setIsDiplomaMode] = useState(false);
  const [vocalStyle, setVocalStyle] = useState<'indian' | 'western'>('indian');

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setIsDiplomaMode(false); // Reset to normal course mode
    setVocalStyle('indian'); // Reset to Indian style
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const allCourses: Course[] = [
    {
      name: "Tabla",
      description: "Master the art of Indian percussion with traditional tabla techniques.",
      image: "/courses/tabla.jpg",
      price: "₹12,000",
      level: "Beginner to Advanced",
      features: ["Basic bols and compositions", "Advanced taals and laya", "Performance techniques", "Recording sessions"],
      schedule: "Mon, Wed, Fri - 6:00 PM"
    },
    {
      name: "Indian Flute (Bansuri)",
      description: "Learn the soulful melodies of the bamboo flute.",
      image: "/courses/flute.webp",
      price: "₹15,000",
      level: "Beginner to Intermediate",
      features: ["Breathing techniques", "Raga basics", "Classical compositions", "Solo performances"],
      schedule: "Tue, Thu, Sat - 5:00 PM"
    },
         {
       name: "Vocal",
       description: "Master the art of Indian classical and contemporary vocal music.",
       image: "/courses/vocal.jpg",
       price: "₹20,000",
       level: "Beginner to Advanced",
       features: ["Breathing techniques", "Raga exploration", "Classical compositions", "Concert preparation"],
       schedule: "Mon, Wed, Fri - 7:00 PM"
     },
    {
      name: "Guitar",
      description: "Learn both acoustic and electric guitar from basic chords to advanced solos.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
      price: "₹18,000",
      level: "Beginner to Advanced",
      features: ["Basic chords and strumming", "Fingerpicking techniques", "Electric guitar solos", "Band performance"],
      schedule: "Tue, Thu, Sat - 6:00 PM"
    },
         {
       name: "Piano & Keyboard",
       description: "Master the piano with classical and contemporary styles.",
       image: "/courses/piano.jpg",
       price: "₹22,000",
       level: "Beginner to Advanced",
       features: ["Music theory", "Classical pieces", "Jazz improvisation", "Composition skills"],
       schedule: "Mon, Wed, Fri - 5:00 PM"
     },
         {
       name: "Drums",
       description: "Develop rhythm and coordination with modern drumming techniques.",
       image: "/courses/drum.jpg",
       price: "₹16,000",
       level: "Beginner to Intermediate",
       features: ["Basic rhythms", "Advanced patterns", "Drum fills", "Band coordination"],
       schedule: "Tue, Thu, Sat - 7:00 PM"
     }
  ];

  return (
    <section id="courses" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            School of <span className="text-gray-600">Music</span>
          </h2>
          <p className="text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito'] italic">
            Our courses cover a wide range of instruments, vocals, and production. Every course is led by certified faculty, with opportunities for certifications, stage performances, and recordings.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {allCourses.map((course, courseIndex) => (
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
                  <button 
                    className="w-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-[#FFD54F] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 text-sm sm:text-base mt-auto"
                    onClick={playButtonSound}
                  >
                    Learn More
                  </button>
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

              {/* Course Details */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Course Type Toggle */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-100 rounded-full p-1 flex items-center">
                    <button
                      onClick={() => {
                        setIsDiplomaMode(false);
                        playButtonSound();
                      }}
                      className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                        !isDiplomaMode
                          ? 'bg-white text-gray-800 shadow-md'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Normal Course
                    </button>
                    <button
                      onClick={() => {
                        setIsDiplomaMode(true);
                        playButtonSound();
                      }}
                      className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                        isDiplomaMode
                          ? 'bg-white text-gray-800 shadow-md'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Diploma Course
                    </button>
                  </div>
                </div>

                                 {/* Special Vocal Types Section - Only for Vocal Course */}
                 {selectedCourse.name === "Vocal" && (
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-black mb-6 text-center">Choose Your Vocal Style</h3>
                     
                     {/* Vocal Style Toggle Switch */}
                     <div className="flex justify-center mb-6">
                       <div className="bg-gradient-to-r from-[#E6E6FA] to-[#E6F3FF] rounded-full p-1 flex items-center shadow-lg">
                         <button
                           onClick={() => {
                             setVocalStyle('indian');
                             playButtonSound();
                           }}
                           className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2 hover:scale-105 ${
                             vocalStyle === 'indian'
                               ? 'bg-[#6B46C1] text-white shadow-md transform scale-105'
                               : 'text-[#553C9A] hover:text-[#6B46C1]'
                           }`}
                         >
                           <span className="text-lg">🎵</span>
                           <span>Indian Classical</span>
                         </button>
                         <button
                           onClick={() => {
                             setVocalStyle('western');
                             playButtonSound();
                           }}
                           className={`px-8 py-3 rounded-full font-sm transition-all duration-300 flex items-center space-x-2 hover:scale-105 ${
                             vocalStyle === 'western'
                               ? 'bg-[#0066CC] text-white shadow-md transform scale-105'
                               : 'text-[#003366] hover:text-[#0066CC]'
                           }`}
                         >
                           <span className="text-lg">🎤</span>
                           <span>Western Contemporary</span>
                         </button>
                       </div>
                     </div>

                     {/* Dynamic Vocal Style Content */}
                     <div className="transition-all duration-500">
                       {vocalStyle === 'indian' ? (
                         /* Indian Classical Vocal */
                         <div className="bg-gradient-to-br from-[#E6E6FA] to-[#C7D2FE] rounded-2xl p-8 border-2 border-[#6B46C1] shadow-lg">
                           <div className="text-center mb-6">
                             <div className="w-20 h-20 bg-[#6B46C1] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                               <span className="text-3xl">🎵</span>
                             </div>
                             <h4 className="text-2xl font-bold text-[#553C9A] mb-3">Indian Classical Vocal</h4>
                             <p className="text-[#553C9A] text-lg mb-4">Master the ancient art of traditional ragas & compositions</p>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-3">
                               <h5 className="font-semibold text-[#553C9A] text-lg mb-3">Core Techniques:</h5>
                               <div className="space-y-2">
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#6B46C1] rounded-full"></span>
                                   <span className="text-[#553C9A]">Raga exploration & mastery</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#6B46C1] rounded-full"></span>
                                   <span className="text-[#553C9A]">Classical compositions</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#6B46C1] rounded-full"></span>
                                   <span className="text-[#553C9A]">Traditional breathing methods</span>
                                 </div>
                               </div>
                             </div>
                             <div className="space-y-3">
                               <h5 className="font-semibold text-[#553C9A] text-lg mb-3">Advanced Skills:</h5>
                               <div className="space-y-2">
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#6B46C1] rounded-full"></span>
                                   <span className="text-[#553C9A]">Microtonal precision</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#6B46C1] rounded-full"></span>
                                   <span className="text-[#553C9A]">Taal & laya mastery</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#6B46C1] rounded-full"></span>
                                   <span className="text-[#553C9A]">Concert performance</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       ) : (
                         /* Western Contemporary Vocal */
                         <div className="bg-gradient-to-br from-[#E6F3FF] to-[#B3D9FF] rounded-2xl p-8 border-2 border-[#0066CC] shadow-lg">
                           <div className="text-center mb-6">
                             <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                               <span className="text-3xl">🎤</span>
                             </div>
                             <h4 className="text-2xl font-bold text-[#003366] mb-3">Western Contemporary Vocal</h4>
                             <p className="text-[#003366] text-lg mb-4">Develop modern vocal techniques for pop, rock & jazz</p>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-3">
                               <h5 className="font-semibold text-[#003366] text-lg mb-3">Modern Techniques:</h5>
                               <div className="space-y-2">
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#0066CC] rounded-full"></span>
                                   <span className="text-[#003366]">Contemporary vocal styles</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#0066CC] rounded-full"></span>
                                   <span className="text-[#003366]">Performance skills</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#0066CC] rounded-full"></span>
                                   <span className="text-[#003366]">Stage presence & confidence</span>
                                 </div>
                               </div>
                             </div>
                             <div className="space-y-3">
                               <h5 className="font-semibold text-[#003366] text-lg mb-3">Performance Skills:</h5>
                               <div className="space-y-2">
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#0066CC] rounded-full"></span>
                                   <span className="text-[#003366]">Microphone techniques</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#0066CC] rounded-full"></span>
                                   <span className="text-[#003366]">Band coordination</span>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                   <span className="w-3 h-3 bg-[#0066CC] rounded-full"></span>
                                   <span className="text-[#003366]">Recording studio skills</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       )}
                     </div>
                   </div>
                 )}

                 {/* Special Guitar Types Section - Only for Guitar Course */}
                 {selectedCourse.name === "Guitar" && (
                   <div className="mb-8">
                     <h3 className="text-2xl font-bold text-black mb-6 text-center">Choose Your Guitar Style</h3>
                     
                     {/* Guitar Types Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {/* Acoustic Guitar */}
                       <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-2xl p-6 border-2 border-[#F59E0B] shadow-lg hover:shadow-xl transition-all duration-300 group">
                         <div className="text-center mb-4">
                           <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                             <span className="text-2xl">🎸</span>
                           </div>
                           <h4 className="text-xl font-bold text-[#92400E] mb-2">Acoustic Guitar</h4>
                           <p className="text-[#92400E] text-sm">Classic strumming & fingerpicking</p>
                         </div>
                         <div className="space-y-2">
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
                             <span className="text-[#92400E] text-sm">Folk & country styles</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
                             <span className="text-[#92400E] text-sm">Unplugged performances</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
                             <span className="text-[#92400E] text-sm">Portable & versatile</span>
                           </div>
                         </div>
                       </div>

                       {/* Electric Guitar */}
                       <div className="bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD] rounded-2xl p-6 border-2 border-[#2563EB] shadow-lg hover:shadow-xl transition-all duration-300 group">
                         <div className="text-center mb-4">
                           <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                             <span className="text-2xl">⚡</span>
                           </div>
                           <h4 className="text-xl font-bold text-[#1E40AF] mb-2">Electric Guitar</h4>
                           <p className="text-[#1E40AF] text-sm">Rock, blues & metal mastery</p>
                         </div>
                         <div className="space-y-2">
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                             <span className="text-[#1E40AF] text-sm">Distortion & effects</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                             <span className="text-[#1E40AF] text-sm">Solo techniques</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
                             <span className="text-[#1E40AF] text-sm">Amplified sound</span>
                           </div>
                         </div>
                       </div>

                       {/* Bass Guitar */}
                       <div className="bg-gradient-to-br from-[#D1FAE5] to-[#6EE7B7] rounded-2xl p-6 border-2 border-[#059669] shadow-lg hover:shadow-xl transition-all duration-300 group">
                         <div className="text-center mb-4">
                           <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                             <span className="text-2xl">🎵</span>
                           </div>
                           <h4 className="text-xl font-bold text-[#047857] mb-2">Bass Guitar</h4>
                           <p className="text-[#047857] text-sm">Rhythm foundation & groove</p>
                         </div>
                         <div className="space-y-2">
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#059669] rounded-full"></span>
                             <span className="text-[#047857] text-sm">Low-end frequencies</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#059669] rounded-full"></span>
                             <span className="text-[#047857] text-sm">Slap & pop techniques</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#059669] rounded-full"></span>
                             <span className="text-[#047857] text-sm">Band coordination</span>
                           </div>
                         </div>
                       </div>

                       {/* Classical Guitar */}
                       <div className="bg-gradient-to-br from-[#FCE7F3] to-[#F9A8D4] rounded-2xl p-6 border-2 border-[#EC4899] shadow-lg hover:shadow-xl transition-all duration-300 group">
                         <div className="text-center mb-4">
                           <div className="w-16 h-16 bg-[#EC4899] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                             <span className="text-2xl">🎼</span>
                           </div>
                           <h4 className="text-xl font-bold text-[#BE185D] mb-2">Classical Guitar</h4>
                           <p className="text-[#BE185D] text-sm">Traditional & classical pieces</p>
                         </div>
                         <div className="space-y-2">
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#EC4899] rounded-full"></span>
                             <span className="text-[#BE185D] text-sm">Fingerstyle mastery</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#EC4899] rounded-full"></span>
                             <span className="text-[#BE185D] text-sm">Nylon strings</span>
                           </div>
                           <div className="flex items-center space-x-2">
                             <span className="w-2 h-2 bg-[#EC4899] rounded-full"></span>
                             <span className="text-[#BE185D] text-sm">Concert performances</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 )}

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-[#E8F5E8] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#2D5A2D] mb-1 sm:mb-2">Price</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#2D5A2D]">
                      {isDiplomaMode ? "₹25,000" : selectedCourse.price}
                    </p>
                  </div>
                  <div className="bg-[#FAF3DD] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#353535] mb-1 sm:mb-2">Level</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#353535]">
                      {isDiplomaMode ? "Advanced Diploma" : selectedCourse.level}
                    </p>
                  </div>
                  <div className="bg-[#C8F8E4] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#353535] mb-1 sm:mb-2">Schedule</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#81E6D9]">
                      {isDiplomaMode ? "Mon, Wed, Fri - 9:00 AM to 12:00 PM" : selectedCourse.schedule}
                    </p>
                  </div>
                  <div className="bg-[#E6F3FF] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                    <h3 className="text-base sm:text-lg font-semibold text-[#1E3A8A] mb-1 sm:mb-2">Course Period</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">
                      {isDiplomaMode ? "1 Year" : "6 Months"}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">What You&apos;ll Learn</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {selectedCourse.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#81E6D9] rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-[#353535]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button 
                    className="px-8 py-4 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl active:shadow-inner hover:-translate-y-1 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer"
                    onClick={playButtonSound}
                  >
                    {isDiplomaMode ? 'Enroll in Diploma' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
