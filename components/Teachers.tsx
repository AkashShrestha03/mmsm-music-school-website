'use client'

import { motion } from 'framer-motion'
import { Music, Award, Star, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const teachers = [
  {
    id: 1,
    name: 'Pandit Rajesh Sharma',
    devanagari: 'पंडित राजेश शर्मा',
    specialization: 'Hindustani Classical Vocal',
    experience: '35+ Years',
    awards: ['Padma Shri', 'Sangeet Natak Akademi'],
    description: 'A legendary vocalist who has performed across the globe, bringing the soul of Indian classical music to international audiences.',
    image: '🎤',
    color: 'from-saffron to-deep-orange',
    achievements: ['Performed at Carnegie Hall', 'Taught 500+ students', 'Published 20+ compositions'],
    social: { instagram: '#', twitter: '#', youtube: '#', linkedin: '#' }
  },
  {
    id: 2,
    name: 'Ustad Ahmed Khan',
    devanagari: 'उस्ताद अहमद खान',
    specialization: 'Tabla & Percussion',
    experience: '28+ Years',
    awards: ['Sangeet Kala Ratna', 'Tabla Samrat'],
    description: 'Master of rhythm who has revolutionized tabla playing with his innovative techniques and traditional mastery.',
    image: '🥁',
    color: 'from-earth-brown to-deep-orange',
    achievements: ['Collaborated with world musicians', 'Created new tabla compositions', 'International workshops'],
    social: { instagram: '#', twitter: '#', youtube: '#', linkedin: '#' }
  },
  {
    id: 3,
    name: 'Vidushi Meera Iyer',
    devanagari: 'विधुषी मीरा अय्यर',
    specialization: 'Carnatic Classical Music',
    experience: '25+ Years',
    awards: ['Karnataka Sangeetha Nritya Academy', 'Best Female Vocalist'],
    description: 'Renowned Carnatic vocalist known for her soulful renditions and deep understanding of South Indian classical traditions.',
    image: '🎵',
    color: 'from-maroon to-purple',
    achievements: ['Performed at prestigious sabhas', 'Expert in rare ragas', 'Cultural ambassador'],
    social: { instagram: '#', twitter: '#', youtube: '#', linkedin: '#' }
  },
  {
    id: 4,
    name: 'Pandit Arjun Desai',
    devanagari: 'पंडित अर्जुन देसाई',
    specialization: 'Sitar & String Instruments',
    experience: '30+ Years',
    awards: ['Sitar Samrat', 'Cultural Heritage Award'],
    description: 'Virtuoso sitar player who has mastered both traditional techniques and contemporary innovations.',
    image: '🎸',
    color: 'from-forest-green to-gold',
    achievements: ['International collaborations', 'Fusion experiments', 'Instrument restoration expert'],
    social: { instagram: '#', twitter: '#', youtube: '#', linkedin: '#' }
  },
  {
    id: 5,
    name: 'Dr. Priya Patel',
    devanagari: 'डॉ. प्रिया पटेल',
    specialization: 'Music Theory & Composition',
    experience: '20+ Years',
    awards: ['PhD in Musicology', 'Research Excellence Award'],
    description: 'Scholar and composer who bridges ancient wisdom with modern understanding of Indian classical music.',
    image: '📚',
    color: 'from-indigo to-purple',
    achievements: ['Published research papers', 'Composed 50+ pieces', 'Academic collaborations'],
    social: { instagram: '#', twitter: '#', youtube: '#', linkedin: '#' }
  },
  {
    id: 6,
    name: 'Guru Manpreet Singh',
    devanagari: 'गुरु मनप्रीत सिंह',
    specialization: 'Fusion & Contemporary',
    experience: '18+ Years',
    awards: ['Young Musician Award', 'Innovation in Music'],
    description: 'Pioneering fusion artist who creates bridges between traditional Indian music and contemporary global sounds.',
    image: '🎼',
    color: 'from-deep-red to-saffron',
    achievements: ['International fusion bands', 'Cross-cultural projects', 'Modern arrangements'],
    social: { instagram: '#', twitter: '#', youtube: '#', linkedin: '#' }
  }
]

export default function Teachers() {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-white to-cream relative overflow-hidden">
      {/* Background Pattern */}
                      <div className="absolute inset-0 indian-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our <span className="font-devanagari">गुरुजन</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Learn from the masters who have dedicated their lives to preserving and propagating 
            the sacred traditions of Indian classical music.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${teacher.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Teacher Profile */}
                <div className="relative z-10 text-center mb-6">
                  <div className={`bg-gradient-to-br ${teacher.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl`}>
                    {teacher.image}
                  </div>
                  <h3 className="text-2xl font-bold text-maroon mb-2">{teacher.name}</h3>
                  <div className="text-lg text-saffron font-devanagari mb-2">{teacher.devanagari}</div>
                  <div className="text-sm text-gray-600 mb-2">{teacher.specialization}</div>
                  <div className="text-sm text-saffron font-semibold">{teacher.experience} Experience</div>
                </div>

                {/* Teacher Details */}
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">{teacher.description}</p>
                  
                  {/* Awards */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-gold" />
                      <span className="text-sm font-semibold text-gray-700">Awards & Recognition</span>
                    </div>
                    <div className="space-y-1">
                      {teacher.awards.map((award, idx) => (
                        <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="space-y-2">
                      {teacher.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-gold" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mb-6">
                    <a href={teacher.social.instagram} className="text-gray-400 hover:text-pink-500 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={teacher.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={teacher.social.youtube} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href={teacher.social.linkedin} className="text-gray-400 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {/* Book Session Button */}
                  <button className={`w-full bg-gradient-to-r ${teacher.color} text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}>
                    <Music className="w-4 h-4" />
                    Book Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guru-Shishya Message */}
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
                The Sacred <span className="text-gold">Guru-Shishya</span> Bond
              </h3>
              <p className="text-xl text-cream mb-8 max-w-3xl mx-auto leading-relaxed">
                "In the tradition of Indian classical music, the relationship between teacher and student 
                is sacred. It is not just about learning music, but about understanding life, culture, 
                and the divine through the medium of sound."
              </p>
              <div className="text-saffron font-devanagari text-lg mb-6">
                गुरु ब्रह्मा गुरु विष्णु गुरु देवो महेश्वरा
              </div>
              <p className="text-cream text-sm">
                "Guru is Brahma, Guru is Vishnu, Guru is the Supreme Lord Shiva"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
