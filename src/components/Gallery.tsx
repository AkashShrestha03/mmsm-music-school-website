'use client';

import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Piano Masterclass",
      category: "performances",
      description: "Students performing classical pieces during our annual recital",
      image: "/gallery/1.jpg", // Piano performance
      date: "2024"
    },
    {
      id: 2,
      title: "Guitar Ensemble",
      category: "performances", 
      description: "Advanced guitar students showcasing their skills together",
      image: "/gallery/2.jpg", // Guitar ensemble
      date: "2024"
    },
    {
      id: 3,
      title: "Music Performance",
      category: "performances",
      description: "Live music performance by our talented students",
      image: "/gallery/perf1.jpg", // Performance
      date: "2024"
    },
    {
      id: 4,
      title: "Music Studio Session",
      category: "lessons",
      description: "Students learning in our professional music studio",
      image: "/gallery/mus2.jpg", // Music studio
      date: "2024"
    },
    {
      id: 5,
      title: "Instrument Practice",
      category: "lessons",
      description: "Students practicing various musical instruments",
      image: "/gallery/mus3.jpg", // Music practice
      date: "2024"
    },
    {
      id: 6,
      title: "Live Performance",
      category: "performances",
      description: "Captivating live performance on stage",
      image: "/gallery/perf2.jpg", // Live performance
      date: "2024"
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'performances', label: 'Performances' },
    { key: 'lessons', label: 'Lessons' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            Our <span className="text-gray-600">Gallery</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#353535]/80 max-w-3xl mx-auto font-['Nunito'] px-4">
            Take a glimpse into the vibrant world of music education at MOUJ MAALIK
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 font-['Nunito'] text-sm md:text-base ${
                activeFilter === filter.key
                  ? 'bg-gray-500 text-white shadow-lg'
                  : 'bg-white text-[#353535] hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-500'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 font-['Nunito']">
            View More Photos
          </button>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-[#353535]/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                alt="Gallery Image"
                fill
                className="object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-[#81E6D9] text-white p-3 rounded-full hover:bg-[#5ED4C9] transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
