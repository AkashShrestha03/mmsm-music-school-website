"use client";

import Image from "next/image";

const Courses = () => {
  const courseCategories = [
    {
      title: "🎶 Indian Classical",
      courses: [
        {
          name: "Tabla",
          description: "Learn traditional Indian percussion rhythms",
          image: "/courses/tabla.jpg", // Tabla drums
        },
        {
          name: "Indian Vocals",
          description: "Master classical Indian vocal techniques",
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop", // Indian classical singing
        },
        {
          name: "Indian Flute (Bansuri)",
          description: "Explore the beautiful sounds of Bansuri flute",
          image: "/courses/flute.webp", // Bansuri flute
        },
      ],
    },
    {
      title: "🎶 Western & Contemporary",
      courses: [
        {
          name: "Guitar (Acoustic, Classical, Bass)",
          description: "Master acoustic, classical, and bass guitar techniques",
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop", // Acoustic guitar
        },
        {
          name: "Keyboard / Piano",
          description: "Learn piano fundamentals and advanced techniques",
          image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=800&h=600&fit=crop", // Piano keys
        },
        {
          name: "Drum Set",
          description: "Develop rhythm and percussion skills",
          image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=600&fit=crop", // Drum kit
        },
        {
          name: "Western Vocals",
          description: "Enhance your singing voice and vocal range",
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop", // Microphone singing
        },
      ],
    },
    {
      title: "🎶 Special Programs",
      courses: [
        {
          name: "Music Production & Audio Engineering",
          description: "Short-term course in music production and audio engineering",
          image: "/courses/1.jpg", // Music studio
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-['Montserrat']">
            Music Courses
          </h2>
          <p className="text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito'] italic">
            Our courses cover a wide range of instruments, vocals, and production.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-black mb-8 text-center font-['Montserrat']">
                {category.title}
              </h3>

                                                                                                                       <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto`}>
                {category.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                                         {/* Course Image */}
                     <div className="relative h-64 w-full">
                      <Image
                        src={course.image}
                        alt={course.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                                         {/* Course Content */}
                     <div className="p-8">
                                             <h4 className="text-2xl font-bold text-black mb-4 font-['Montserrat']">
                        {course.name}
                      </h4>
                                             <p className="text-[#353535] leading-relaxed mb-6 text-base font-['Nunito']">
                        {course.description}
                      </p>

                                             {/* Learn More Button */}
                       <button className="px-8 py-3 bg-[#FFF176] hover:bg-[#FFE066] text-[#353535] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base font-['Nunito']">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-16 p-8 bg-[#FAF3DD] rounded-2xl shadow-lg max-w-4xl mx-auto">
          <p className="text-lg text-[#353535] leading-relaxed font-['Merriweather'] italic">
            👉 Every course is led by certified faculty, with opportunities for
            certifications, stage performances, and recordings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
