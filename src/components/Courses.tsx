"use client";

import Image from "next/image";
import { useState } from "react";

interface Course {
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  level: string;
  features: string[];
  instructor: string;
  schedule: string;
}

interface CourseCategory {
  title: string;
  courses: Course[];
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const courseCategories: CourseCategory[] = [
    {
      title: "Indian Classical",
      courses: [
        {
          name: "Tabla",
          description: "Master the art of Indian percussion with traditional tabla techniques.",
          image: "/courses/tabla.jpg",
          duration: "6 months",
          price: "₹12,000",
          level: "Beginner to Advanced",
          features: ["Basic bols and compositions", "Advanced taals and laya", "Performance techniques", "Recording sessions"],
          instructor: "Pandit Rajesh Kumar",
          schedule: "Mon, Wed, Fri - 6:00 PM"
        },
        {
          name: "Indian Flute (Bansuri)",
          description: "Learn the soulful melodies of the bamboo flute.",
          image: "/courses/flute.webp",
          duration: "8 months",
          price: "₹15,000",
          level: "Beginner to Intermediate",
          features: ["Breathing techniques", "Raga basics", "Classical compositions", "Solo performances"],
          instructor: "Ustad Amir Khan",
          schedule: "Tue, Thu, Sat - 5:00 PM"
        },
        {
          name: "Sitar",
          description: "Discover the rich heritage of Indian classical music through sitar.",
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
          duration: "12 months",
          price: "₹20,000",
          level: "Beginner to Advanced",
          features: ["String techniques", "Raga exploration", "Classical compositions", "Concert preparation"],
          instructor: "Vidushi Meera Sharma",
          schedule: "Mon, Wed, Fri - 7:00 PM"
        }
      ]
    },
    {
      title: "Western & Contemporary",
      courses: [
        {
          name: "Guitar (Acoustic & Electric)",
          description: "Learn both acoustic and electric guitar from basic chords to advanced solos.",
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
          duration: "10 months",
          price: "₹18,000",
          level: "Beginner to Advanced",
          features: ["Basic chords and strumming", "Fingerpicking techniques", "Electric guitar solos", "Band performance"],
          instructor: "John Smith",
          schedule: "Tue, Thu, Sat - 6:00 PM"
        },
        {
          name: "Piano & Keyboard",
          description: "Master the piano with classical and contemporary styles.",
          image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=600&fit=crop",
          duration: "12 months",
          price: "₹22,000",
          level: "Beginner to Advanced",
          features: ["Music theory", "Classical pieces", "Jazz improvisation", "Composition skills"],
          instructor: "Maria Rodriguez",
          schedule: "Mon, Wed, Fri - 5:00 PM"
        },
        {
          name: "Drums & Percussion",
          description: "Develop rhythm and coordination with modern drumming techniques.",
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
          duration: "8 months",
          price: "₹16,000",
          level: "Beginner to Intermediate",
          features: ["Basic rhythms", "Advanced patterns", "Drum fills", "Band coordination"],
          instructor: "Mike Johnson",
          schedule: "Tue, Thu, Sat - 7:00 PM"
        },
        {
          name: "Vocals & Singing",
          description: "Unlock your voice potential with professional vocal training.",
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
          duration: "10 months",
          price: "₹18,000",
          level: "Beginner to Advanced",
          features: ["Vocal techniques", "Breathing exercises", "Performance skills", "Recording sessions"],
          instructor: "Sarah Wilson",
          schedule: "Mon, Wed, Fri - 6:00 PM"
        }
      ]
    },
    {
      title: "Special Programs",
      courses: [
        {
          name: "Music Production & Audio Engineering",
          description: "Learn modern music production using industry-standard software and equipment.",
          image: "/courses/1.jpg",
          duration: "6 months",
          price: "₹25,000",
          level: "Intermediate to Advanced",
          features: ["DAW training", "Mixing techniques", "Mastering skills", "Studio sessions"],
          instructor: "Alex Chen",
          schedule: "Weekends - 10:00 AM"
        }
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-[#FFFDF6] to-[#FAF3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-['Montserrat']">
            Our Courses
          </h2>
          <p className="text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito'] italic">
            Our courses cover a wide range of instruments, vocals, and production. Every course is led by certified faculty, with opportunities for certifications, stage performances, and recordings.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-16 sm:space-y-20">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 sm:mb-20">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 font-['Montserrat'] text-center">
                {category.title}
              </h3>
              
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${category.title === "Western & Contemporary" ? "4" : "3"} gap-4 sm:gap-6 lg:gap-8`}>
                {category.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="group cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95"
                    onClick={() => openModal(course)}
                  >
                    {/* Enhanced Card with Better Shadows */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#C8F8E4] relative overflow-hidden">
                      
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#81E6D9]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl z-10"></div>
                      
                      {/* Image Container */}
                      <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
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
                      <div className="p-4 sm:p-6 relative z-20">
                        <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 font-['Montserrat'] group-hover:text-[#81E6D9] transition-colors duration-300">
                          {course.name}
                        </h4>
                        
                        <p className="text-sm sm:text-base text-[#353535] mb-4 font-['Nunito'] italic leading-relaxed">
                          {course.description}
                        </p>

                        {/* CTA Button */}
                        <button className="w-full bg-[#FFF176] hover:bg-[#FFE066] active:bg-[#FFD54F] text-[#353535] font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-transparent hover:border-[#FFD54F] text-sm sm:text-base">
                          Learn More
                        </button>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-[#81E6D9] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FFF176] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
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
            <button onClick={closeModal} className="absolute top-3 sm:top-6 right-3 sm:right-6 z-10 bg-white rounded-full p-2 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors">
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
                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-[#C8F8E4] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#353535] mb-1 sm:mb-2">Duration</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#81E6D9]">{selectedCourse.duration}</p>
                  </div>
                  <div className="bg-[#FFF176] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#353535] mb-1 sm:mb-2">Price</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#353535]">{selectedCourse.price}</p>
                  </div>
                  <div className="bg-[#FAF3DD] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#353535] mb-1 sm:mb-2">Level</h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#353535]">{selectedCourse.level}</p>
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

                {/* Instructor & Schedule */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-[#FAF3DD] rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Instructor</h3>
                    <p className="text-base sm:text-lg text-[#353535]">{selectedCourse.instructor}</p>
                  </div>
                  <div className="bg-[#C8F8E4] rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Schedule</h3>
                    <p className="text-base sm:text-lg text-[#353535]">{selectedCourse.schedule}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-[#FFF176] hover:bg-[#FFE066] active:bg-[#FFD54F] text-[#353535] font-bold text-base sm:text-lg rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl active:shadow-inner cursor-pointer">
                    Enroll Now
                  </button>
                  <button className="flex-1 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#FFF176] text-[#353535] hover:bg-[#FFF176] hover:text-[#353535] active:bg-[#FFE066] active:border-[#FFE066] font-bold text-base sm:text-lg rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer">
                    Download Brochure
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
