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
  pricingDetails?: {
    individual: {
      monthly: string;
      registration: string;
    };
    group?: {
      monthly: string;
      registration: string;
    };
    quarterly: {
      initial?: string;
      grade1to3?: string;
      grade4to6?: string;
      grade7?: string;
      grade8?: string;
      praveshika?: string;
      seniorDiploma?: string;
      baMusic?: string;
    };
    universities: string[];
  };
  westernPricingDetails?: {
    individual: {
      monthly: string;
      registration: string;
    };
    quarterly: {
      initial: string;
      grade1to3: string;
      grade4to6: string;
      grade7: string;
      grade8: string;
    };
    universities: string[];
  };
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiplomaMode, setIsDiplomaMode] = useState(false);
  const [vocalStyle, setVocalStyle] = useState<'indian' | 'western'>('indian');

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setIsDiplomaMode(false);
    setVocalStyle('indian');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const allCourses: Course[] = [
    {
      name: "Guitar",
      description: "Learn acoustic, electric, classical and bass guitar from basic chords to advanced solos.",
      image: "/courses/guitar.jpg",
      price: "₹2,500",
      level: "Beginner to Advanced",
      features: ["Acoustic Guitar", "Electric Guitar", "Classical Guitar", "Bass Guitar"],
      schedule: "Group: 2 days/week for 1hr each | Individual: Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        group: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        quarterly: {
          initial: "₹7,500",
          grade1to3: "₹9,000",
          grade4to6: "₹10,500",
          grade7: "₹12,000",
          grade8: "₹13,500"
        },
        universities: ["Trinity College London (TCL)", "Music Teachers Board (MTB)", "Rock School London (RSL)"]
      }
    },
    {
      name: "Keyboard",
      description: "Master the keyboard with classical and contemporary styles.",
      image: "/courses/keyboard.jpg",
      price: "₹2,500",
      level: "Beginner to Advanced",
      features: ["Music theory", "Classical pieces", "Jazz improvisation", "Composition skills"],
      schedule: "Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        quarterly: {
          initial: "₹7,500",
          grade1to3: "₹9,000",
          grade4to6: "₹10,500",
          grade7: "₹12,000",
          grade8: "₹13,500"
        },
        universities: ["Trinity College London (TCL)", "Music Teachers Board (MTB)", "Rock School London (RSL)"]
      }
    },
    {
      name: "Piano",
      description: "Master the piano with classical and contemporary styles.",
      image: "/courses/piano.jpg",
      price: "₹3,000",
      level: "Beginner to Advanced",
      features: ["Music theory", "Classical pieces", "Jazz improvisation", "Composition skills"],
      schedule: "Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹3,000",
          registration: "₹500 (first time)"
        },
        quarterly: {
          initial: "₹9,000",
          grade1to3: "₹10,500",
          grade4to6: "₹12,000",
          grade7: "₹13,500",
          grade8: "₹15,000"
        },
        universities: ["Trinity College London (TCL)", "Music Teachers Board (MTB)", "Rock School London (RSL)"]
      }
    },
    {
      name: "Drums",
      description: "Develop rhythm and coordination with modern drumming techniques.",
      image: "/courses/drum.jpg",
      price: "₹2,500",
      level: "Beginner to Intermediate",
      features: ["Basic rhythms", "Advanced patterns", "Drum fills", "Band coordination"],
      schedule: "Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        quarterly: {
          initial: "₹7,500",
          grade1to3: "₹9,000",
          grade4to6: "₹10,500",
          grade7: "₹12,000",
          grade8: "₹13,500"
        },
        universities: ["Trinity College London (TCL)", "Music Teachers Board (MTB)", "Rock School London (RSL)"]
      }
    },
    {
      name: "Tabla",
      description: "Master the art of Indian percussion with traditional tabla techniques.",
      image: "/courses/tabla.jpg",
      price: "₹2,500",
      level: "Beginner to Advanced",
      features: ["Basic bols and compositions", "Advanced taals and laya", "Performance techniques", "Recording sessions"],
      schedule: "Group: 2 days/week for 1hr each",
      pricingDetails: {
        individual: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        group: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        quarterly: {
          praveshika: "₹7,500",
          seniorDiploma: "₹9,000",
          baMusic: "₹10,500"
        },
        universities: ["Prayag Sangeet Samiti Allahabad"]
      }
    },
    {
      name: "Indian Flute (Bansuri)",
      description: "Learn the soulful melodies of the bamboo flute.",
      image: "/courses/flute.webp",
      price: "₹3,000",
      level: "Beginner to Intermediate",
      features: ["Breathing techniques", "Raga basics", "Classical compositions", "Solo performances"],
      schedule: "Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹3,000",
          registration: "₹500 (first time)"
        },
        quarterly: {
          praveshika: "₹9,000",
          seniorDiploma: "₹10,500",
          baMusic: "₹13,000"
        },
        universities: ["Prayag Sangeet Samiti Allahabad"]
      }
    },
    {
      name: "Vocal",
      description: "Master both Indian classical and Western contemporary vocal techniques with flexible style switching.",
      image: "/courses/vocal.jpg",
      price: "₹2,500",
      level: "Beginner to Advanced",
      features: ["Breathing techniques", "Raga exploration", "Classical compositions", "Performance skills", "Style flexibility"],
      schedule: "Group: 2 days/week for 1hr each | Individual: Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        group: {
          monthly: "₹2,500",
          registration: "₹500 (first time)"
        },
        quarterly: {
          praveshika: "₹7,500",
          seniorDiploma: "₹9,000",
          baMusic: "₹10,500"
        },
        universities: ["Prayag Sangeet Samiti Allahabad"]
      },
      westernPricingDetails: {
        individual: {
          monthly: "₹3,000",
          registration: "₹500 (first time)"
        },
        quarterly: {
          initial: "₹9,000",
          grade1to3: "₹10,500",
          grade4to6: "₹12,000",
          grade7: "₹13,500",
          grade8: "₹15,000"
        },
        universities: ["Trinity College London (TCL)", "Music Teachers Board (MTB)", "Rock School London (RSL)"]
      }
    },
    {
      name: "Online Sessions",
      description: "Learn music from anywhere with our comprehensive online courses covering multiple instruments and vocals.",
      image: "/courses/online.jpg",
      price: "₹4,000",
      level: "Beginner to Advanced",
      features: ["Guitar, Keyboard, Piano, Drums, Western Vocals", "Flexible scheduling", "Recorded sessions", "Digital resources"],
      schedule: "Individual: Once a week for 40 mins",
      pricingDetails: {
        individual: {
          monthly: "₹4,000",
          registration: "₹500 (first time)"
        },
        quarterly: {
          initial: "₹12,000",
          grade1to3: "₹13,500",
          grade4to6: "₹16,000",
          grade7: "₹17,500",
          grade8: "₹19,000"
        },
        universities: ["Trinity College London (TCL)", "Music Teachers Board (MTB)", "Rock School London (RSL)"]
      }
    }
  ];

  return (
    <section id="courses" className="py-12 md:py-16 lg:py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            School of <span className="text-gray-600">Music</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito'] italic px-4">
            Our courses cover a wide range of instruments, vocals, and production. Every course is led by certified faculty, with opportunities for certifications, stage performances, and recordings.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mb-12">
          {allCourses.map((course, courseIndex) => (
            <div
              key={courseIndex}
              className="group cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95"
              onClick={() => openModal(course)}
            >
              {/* Enhanced Card with Better Shadows */}
              <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#C8F8E4] relative overflow-hidden h-full flex flex-col">
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#81E6D9]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl z-10"></div>
                
                {/* Image Container */}
                <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl">
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
                <div className="p-3 md:p-4 lg:p-6 relative z-20 flex-1 flex flex-col">
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
         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
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

                 {/* Vocal Style Toggle - Only for Vocal course */}
                 {selectedCourse.name === "Vocal" && (
                   <div className="flex justify-center mb-6">
                     <div className="bg-blue-100 rounded-full p-1 flex items-center">
                       <button
                         onClick={() => {
                           setVocalStyle('indian');
                           playButtonSound();
                         }}
                         className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                           vocalStyle === 'indian'
                             ? 'bg-white text-blue-800 shadow-md'
                             : 'text-blue-600 hover:text-blue-800'
                         }`}
                       >
                         Indian Classical
                       </button>
                       <button
                         onClick={() => {
                           setVocalStyle('western');
                           playButtonSound();
                         }}
                         className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                           vocalStyle === 'western'
                             ? 'bg-white text-blue-800 shadow-md'
                             : 'text-blue-600 hover:text-blue-800'
                         }`}
                       >
                         Western Contemporary
                       </button>
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
                    <p className="text-xl sm:text-2xl font-bold text-[#2D5A2D]">
                      {isDiplomaMode ? "Mon, Wed, Fri - 9:00 AM to 12:00 PM" : selectedCourse.schedule}
                    </p>
                  </div>
                </div>

                {/* Detailed Pricing Section */}
                {selectedCourse.pricingDetails && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-black mb-6 text-center">Course Pricing Details</h3>
                    
                                         {/* Monthly Pricing - Show only in Normal Course mode */}
                     {!isDiplomaMode && (
                       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border-2 border-blue-200">
                         <h4 className="text-xl font-bold text-blue-800 mb-4 text-center">Monthly Fees</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="bg-white rounded-xl p-4 shadow-md">
                             <h5 className="font-semibold text-blue-700 mb-2">Individual Classes</h5>
                             <p className="text-2xl font-bold text-blue-800">
                               {selectedCourse.name === "Vocal" && vocalStyle === 'western' && selectedCourse.westernPricingDetails 
                                 ? selectedCourse.westernPricingDetails.individual.monthly 
                                 : selectedCourse.pricingDetails.individual.monthly}
                             </p>
                             <p className="text-sm text-gray-600">Registration: 
                               {selectedCourse.name === "Vocal" && vocalStyle === 'western' && selectedCourse.westernPricingDetails 
                                 ? selectedCourse.westernPricingDetails.individual.registration 
                                 : selectedCourse.pricingDetails.individual.registration}
                             </p>
                           </div>
                           {selectedCourse.pricingDetails.group && vocalStyle !== 'western' && (
                             <div className="bg-white rounded-xl p-4 shadow-md">
                               <h5 className="font-semibold text-blue-700 mb-2">Group Classes</h5>
                               <p className="text-2xl font-bold text-blue-800">{selectedCourse.pricingDetails.group.monthly}</p>
                               <p className="text-sm text-gray-600">Registration: {selectedCourse.pricingDetails.group.registration}</p>
                             </div>
                           )}
                         </div>
                       </div>
                     )}

                    {/* Quarterly Pricing for University Courses - Only in Diploma mode */}
                    {isDiplomaMode && (
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border-2 border-green-200">
                        <h4 className="text-xl font-bold text-green-800 mb-4 text-center">Quarterly Fees (University Recognition)</h4>
                        <p className="text-center text-green-700 mb-4">Students pursuing courses from recognized universities</p>
                        
                                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                           {/* Show different pricing structures based on course and vocal style */}
                           {(selectedCourse.name === "Vocal" && vocalStyle === 'western' && selectedCourse.westernPricingDetails) ? (
                             // Western Vocal Structure
                             <>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade Initial</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.westernPricingDetails.quarterly.initial}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 1-3</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.westernPricingDetails.quarterly.grade1to3}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 4-6</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.westernPricingDetails.quarterly.grade4to6}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 7</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.westernPricingDetails.quarterly.grade7}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 8</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.westernPricingDetails.quarterly.grade8}</p>
                               </div>
                             </>
                           ) : selectedCourse.pricingDetails.quarterly.initial ? (
                             // Western University Structure (Guitar, Keyboard, Piano, Drums, Online Sessions)
                             <>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade Initial</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.initial}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 1-3</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.grade1to3}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 4-6</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.grade4to6}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 7</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.grade7}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Grade 8</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.grade8}</p>
                               </div>
                             </>
                           ) : (
                             // Indian University Structure (Vocal Indian, Tabla, Indian Flute)
                             <>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Praveshika till Junior Diploma (2nd year) and 3rd year</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.praveshika}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">Senior Diploma (4th year) & 5th year</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.seniorDiploma}</p>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md text-center">
                                 <h5 className="font-semibold text-green-700 mb-2">BA in Music 6th year</h5>
                                 <p className="text-2xl font-bold text-green-800">{selectedCourse.pricingDetails.quarterly.baMusic}</p>
                               </div>
                             </>
                           )}
                         </div>
                      </div>
                    )}

                                         {/* Recognized Universities - Only in Diploma mode */}
                     {isDiplomaMode && (
                       <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                         <h4 className="text-xl font-bold text-purple-800 mb-4 text-center">Recognized Universities</h4>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {(selectedCourse.name === "Vocal" && vocalStyle === 'western' && selectedCourse.westernPricingDetails) 
                             ? selectedCourse.westernPricingDetails.universities.map((university, index) => (
                                 <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center">
                                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                     <span className="text-2xl">🎓</span>
                                   </div>
                                   <p className="font-semibold text-purple-800">{university}</p>
                                 </div>
                               ))
                             : selectedCourse.pricingDetails.universities.map((university, index) => (
                                 <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center">
                                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                     <span className="text-2xl">🎓</span>
                                   </div>
                                   <p className="font-semibold text-purple-800">{university}</p>
                                 </div>
                               ))
                           }
                         </div>
                       </div>
                     )}
                  </div>
                )}

                                 {/* Features */}
                 <div className="mb-6 sm:mb-8">
                   <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">What You&apos;ll Learn</h3>
                   
                                       {/* Conditional content for Vocal course based on style */}
                    {selectedCourse.name === "Vocal" ? (
                      <div>
                        {vocalStyle === 'indian' ? (
                          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 mb-4">
                            <h4 className="text-lg font-bold text-orange-800 mb-3 text-center">Indian Classical Vocal</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="bg-white rounded-xl p-4 shadow-md">
                                <h5 className="font-semibold text-orange-700 mb-2">Core Techniques</h5>
                                <ul className="text-sm text-orange-600 space-y-1">
                                  <li>• Breathing techniques (Pranayam)</li>
                                  <li>• Raga exploration & development</li>
                                  <li>• Classical compositions (Khayal, Dhrupad)</li>
                                  <li>• Taal & laya understanding</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-xl p-4 shadow-md">
                                <h5 className="font-semibold text-orange-700 mb-2">Performance Skills</h5>
                                <ul className="text-sm text-orange-600 space-y-1">
                                  <li>• Traditional performance style</li>
                                  <li>• Microphone techniques</li>
                                  <li>• Stage presence & confidence</li>
                                  <li>• Recording & studio skills</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                                                ) : (
                           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 mb-4">
                             <h4 className="text-lg font-bold text-blue-800 mb-3 text-center">Western Contemporary Vocal</h4>
                             
                             

                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                               <div className="bg-white rounded-xl p-4 shadow-md">
                                 <h5 className="font-semibold text-blue-700 mb-2">Core Techniques</h5>
                                 <ul className="text-sm text-blue-600 space-y-1">
                                   <li>• Contemporary vocal styles</li>
                                   <li>• Pop, rock, jazz techniques</li>
                                   <li>• Harmony & backing vocals</li>
                                   <li>• Modern music theory</li>
                                 </ul>
                               </div>
                               <div className="bg-white rounded-xl p-4 shadow-md">
                                 <h5 className="font-semibold text-blue-700 mb-2">Performance Skills</h5>
                                 <ul className="text-sm text-blue-600 space-y-1">
                                   <li>• Stage performance</li>
                                   <li>• Band coordination</li>
                                   <li>• Recording techniques</li>
                                   <li>• Music production basics</li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         )}
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {selectedCourse.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#81E6D9] rounded-full flex-shrink-0"></div>
                              <span className="text-sm sm:text-base text-[#353535]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : selectedCourse.name === "Guitar" ? (
                      // Special display for Guitar course with mini cards
                      <div>
                                                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-6">
                           <h4 className="text-lg font-bold text-green-800 mb-4 text-center">Types of Guitar</h4>
                                                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                                <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-lg font-bold text-white">A</span>
                                </div>
                                <h5 className="font-semibold text-green-700 text-sm">Acoustic Guitar</h5>
                              </div>
                              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                                <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-lg font-bold text-white">E</span>
                                </div>
                                <h5 className="font-semibold text-green-700 text-sm">Electric Guitar</h5>
                              </div>
                              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                                <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-lg font-bold text-white">C</span>
                                </div>
                                <h5 className="font-semibold text-green-700 text-sm">Classical Guitar</h5>
                              </div>
                              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                                <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-lg font-bold text-white">B</span>
                                </div>
                                <h5 className="font-semibold text-green-700 text-sm">Bass Guitar</h5>
                              </div>
                            </div>
                         </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {selectedCourse.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#81E6D9] rounded-full flex-shrink-0"></div>
                              <span className="text-sm sm:text-base text-[#353535]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {selectedCourse.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#81E6D9] rounded-full flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-[#353535]">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
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
