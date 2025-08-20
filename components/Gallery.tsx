'use client'

import { motion } from 'framer-motion'
import { Camera, Play, Heart, Users, Calendar, MapPin } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Annual Music Festival',
    category: 'Performance',
    date: 'December 2023',
    location: 'Main Auditorium',
    image: '🎭',
    description: 'A grand celebration of Indian classical music featuring our talented students and renowned guest artists.',
    attendees: '500+',
    likes: '150',
    color: 'from-saffron to-deep-orange'
  },
  {
    id: 2,
    title: 'Tabla Workshop',
    category: 'Workshop',
    date: 'November 2023',
    location: 'Rhythm Studio',
    image: '🥁',
    description: 'Intensive tabla training session with Ustad Ahmed Khan covering advanced compositions and techniques.',
    attendees: '45',
    likes: '89',
    color: 'from-earth-brown to-deep-orange'
  },
  {
    id: 3,
    title: 'Carnatic Vocal Recital',
    category: 'Performance',
    date: 'October 2023',
    location: 'Cultural Hall',
    image: '🎤',
    description: 'Mesmerizing Carnatic vocal performance by Vidushi Meera Iyer and her advanced students.',
    attendees: '300+',
    likes: '120',
    color: 'from-maroon to-purple'
  },
  {
    id: 4,
    title: 'Sitar Masterclass',
    category: 'Masterclass',
    date: 'September 2023',
    location: 'String Instruments Lab',
    image: '🎸',
    description: 'Exclusive sitar masterclass with Pandit Arjun Desai exploring rare ragas and compositions.',
    attendees: '25',
    likes: '67',
    color: 'from-forest-green to-gold'
  },
  {
    id: 5,
    title: 'Music Theory Seminar',
    category: 'Education',
    date: 'August 2023',
    location: 'Lecture Hall',
    image: '📚',
    description: 'Comprehensive seminar on Indian classical music theory and its practical applications.',
    attendees: '80',
    likes: '45',
    color: 'from-indigo to-purple'
  },
  {
    id: 6,
    title: 'Fusion Night',
    category: 'Performance',
    date: 'July 2023',
    location: 'Open Air Amphitheater',
    image: '🎼',
    description: 'Innovative fusion performances blending traditional Indian music with contemporary global sounds.',
    attendees: '400+',
    likes: '200',
    color: 'from-deep-red to-saffron'
  },
  {
    id: 7,
    title: 'Student Showcase',
    category: 'Performance',
    date: 'June 2023',
    location: 'Student Hall',
    image: '🎵',
    description: 'Annual showcase featuring our talented students performing their learned compositions.',
    attendees: '200+',
    likes: '95',
    color: 'from-saffron to-gold'
  },
  {
    id: 8,
    title: 'Cultural Exchange',
    category: 'Workshop',
    date: 'May 2023',
    location: 'International Center',
    image: '🌍',
    description: 'Cross-cultural music workshop with international musicians and students.',
    attendees: '60',
    likes: '78',
    color: 'from-purple to-indigo'
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Spring Music Festival',
    date: 'March 15, 2024',
    time: '6:00 PM',
    location: 'Main Auditorium',
    image: '🌸',
    color: 'from-pink-400 to-purple-500'
  },
  {
    id: 2,
    title: 'Advanced Raga Workshop',
    date: 'March 22, 2024',
    time: '10:00 AM',
    location: 'Advanced Studio',
    image: '🎵',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 3,
    title: 'Tabla Competition',
    date: 'April 5, 2024',
    time: '2:00 PM',
    location: 'Rhythm Studio',
    image: '🥁',
    color: 'from-orange-400 to-red-500'
  }
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-warm-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-music-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our <span className="font-devanagari">गैलरी</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience the magic of music through our vibrant gallery of performances, workshops, 
            and cultural celebrations that bring our academy to life.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Item Image */}
                <div className="relative z-10 text-center mb-4">
                  <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl`}>
                    {item.image}
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">{item.title}</h3>
                  <div className="text-sm text-saffron font-semibold mb-2">{item.category}</div>
                </div>

                {/* Item Details */}
                <div className="relative z-10">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  
                  {/* Event Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3 text-saffron" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3 text-saffron" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="w-3 h-3 text-saffron" />
                      <span>{item.attendees}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Heart className="w-3 h-3 text-red-500" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <button className={`w-full bg-gradient-to-r ${item.color} text-white py-2 px-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}>
                    <Camera className="w-3 h-3" />
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-maroon">
            Upcoming <span className="text-saffron">Events</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`bg-gradient-to-br ${event.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}>
                      {event.image}
                    </div>
                    <h4 className="text-xl font-bold text-maroon mb-2">{event.title}</h4>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-600">{event.date}</div>
                      <div className="text-sm text-gray-600">{event.time}</div>
                      <div className="text-sm text-saffron font-semibold">{event.location}</div>
                    </div>
                    <button className={`w-full bg-gradient-to-r ${event.color} text-white py-2 px-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}>
                      <Calendar className="w-3 h-3" />
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-800 to-purple-600 p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-music-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Be Part of Our <span className="text-gold">Musical Journey</span>
              </h3>
              <p className="text-xl text-cream mb-8 max-w-2xl mx-auto">
                Join us for upcoming events, workshops, and performances. Experience the magic 
                of Indian classical music in person and become part of our vibrant community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gold text-maroon px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Performances
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-maroon transition-all duration-300">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
