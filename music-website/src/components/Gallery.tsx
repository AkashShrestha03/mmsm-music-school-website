'use client';

import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Piano Masterclass",
      category: "performances",
      description: "Students performing classical pieces during our annual recital",
      image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=800&h=600&fit=crop", // Piano performance
      date: "2024"
    },
    {
      id: 2,
      title: "Guitar Ensemble",
      category: "performances", 
      description: "Advanced guitar students showcasing their skills together",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop", // Guitar ensemble
      date: "2024"
    },

    {
      id: 3,
      title: "Student Band Practice",
      category: "performances",
      description: "Young musicians learning the art of collaboration",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=600&fit=crop", // Band practice
      date: "2024"
    },
    {
      id: 4,
      title: "Violin Lessons",
      category: "lessons",
      description: "One-on-one instruction with our expert violin teachers",
      image: "https://images.unsplash.com/photo-1606925797302-9e9ac8d81382?w=800&h=600&fit=crop", // Violin lesson
      date: "2024"
    },
    {
      id: 5,
      title: "Drum Workshop",
      category: "lessons",
      description: "Rhythm and percussion fundamentals for beginners",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=600&fit=crop", // Drum workshop
      date: "2024"
    },
    {
      id: 6,
      title: "Vocal Training",
      category: "lessons",
      description: "Professional vocal coaching and technique development",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop", // Vocal training
      date: "2024"
    },
    {
      id: 7,
      title: "Music Theory Class",
      category: "lessons",
      description: "Understanding the fundamentals of music composition",
      image: "https://images.unsplash.com/photo-1603190287605-6d8e730b8f87?w=800&h=600&fit=crop", // Music theory
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
    <section className="py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 font-['Montserrat']">
            Our <span className="text-black">Gallery</span>
          </h2>
          <p className="text-xl text-[#353535]/80 max-w-3xl mx-auto font-['Nunito']">
            Take a glimpse into the vibrant world of music education at MOUJ MAALIK
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 font-['Nunito'] ${
                activeFilter === filter.key
                  ? 'bg-[#81E6D9] text-white shadow-lg'
                  : 'bg-white text-[#353535] hover:bg-[#C8F8E4] border-2 border-[#C8F8E4] hover:border-[#81E6D9]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#353535]/80 via-[#353535]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-['Nunito']">{item.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[#FFF176] font-semibold">{item.date}</span>
                      <span className="bg-[#81E6D9] px-3 py-1 rounded-full text-xs font-medium capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Play Button for Performances */}
                {item.category === 'performances' && (
                  <div className="absolute top-4 right-4 bg-[#81E6D9] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Quick Info (visible on mobile) */}
              <div className="p-4 md:hidden">
                <h3 className="text-lg font-bold text-[#353535] mb-2 font-['Montserrat']">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#81E6D9] font-semibold text-sm">{item.date}</span>
                  <span className="bg-[#C8F8E4] text-[#353535] px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#FFF176] hover:bg-[#FFE066] text-[#353535] font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg font-['Nunito']">
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
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt="Gallery Image"
                className="w-full h-full object-contain rounded-lg"
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
