'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Music, 
  Mic, 
  Guitar, 
  Piano, 
  Drum, 
  Award, 
  Star,
  Phone,
  Mail,
  MapPin,
  Play,
  ChevronRight,
  CheckCircle,
  Users,
  Clock,
  Calendar
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('western')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const courses = {
    western: [
      { name: 'Guitar (Acoustic, Classical, Bass)', icon: Guitar, age: 'All ages', description: 'Master the art of guitar playing with expert guidance in acoustic, classical, and bass techniques.' },
      { name: 'Keyboard / Piano', icon: Piano, age: 'All ages', description: 'Learn piano fundamentals and advanced techniques for classical and contemporary music.' },
      { name: 'Drum Set', icon: Drum, age: 'Ages 6+', description: 'Develop rhythm and coordination with professional drum instruction and practice.' },
      { name: 'Western Vocals', icon: Mic, age: 'All ages', description: 'Enhance your vocal skills with classical, pop, and contemporary singing techniques.' },
    ],
    indian: [
      { name: 'Tabla', icon: Drum, age: 'Ages 6+', description: 'Learn traditional Indian percussion with authentic tabla instruction and practice.' },
      { name: 'Indian Vocals', icon: Mic, age: 'All ages', description: 'Master Indian classical vocal techniques and traditional ragas.' },
      { name: 'Indian Flute (Bansuri) ✅', icon: Music, age: 'Ages 8+', description: 'Discover the soulful sounds of the bansuri with traditional Indian flute training.' },
    ],
    special: [
      { name: 'Music Production & Audio Engineering', icon: Music, age: 'Ages 16+', description: 'Learn professional music production, recording, and audio engineering techniques.' },
    ]
  }

  const programs = [
    {
      title: 'Private Lessons',
      age: 'Ages 3 and over',
      description: 'One-on-one instruction tailored to your individual learning pace and musical goals.',
      icon: Music,
      image: '/private-lessons.svg'
    },
    {
      title: 'Group Classes',
      age: 'Ages 6 and over',
      description: 'Learn alongside peers in a collaborative environment that fosters musical growth.',
      icon: Users,
      image: '/group-classes.svg'
    },
    {
      title: 'Online Lessons',
      age: 'All ages',
      description: 'Flexible learning from anywhere with our comprehensive online music education platform.',
      icon: Mic,
      image: '/online-lessons.svg'
    },
    {
      title: 'Summer Camps',
      age: 'Ages 7-16',
      description: 'Intensive music programs during summer breaks with performance opportunities.',
      icon: Calendar,
      image: '/summer-camps.svg'
    }
  ]

  const services = [
    {
      title: 'Studio Rental',
      description: 'Professional recording studios equipped with state-of-the-art equipment for music production.',
      icon: Mic,
      features: ['Music Recording', 'Podcasting', 'Voice-Overs', 'Controlled Environment']
    },
    {
      title: 'Soundproofing Consultation',
      description: 'Expert acoustic design and soundproofing solutions for any space or venue.',
      icon: Award,
      features: ['Expert Guidance', 'Tailored Solutions', 'Cost-Effective Approach']
    },
    {
      title: 'Audio Equipment Access',
      description: 'Access to professional-grade microphones, mixers, and monitoring systems.',
      icon: Music,
      features: ['Crystal-Clear Capture', 'Precision Control', 'Accurate Playback']
    },
    {
      title: 'Acoustic Treatment',
      description: 'Professional acoustic treatment for optimal sound quality and recording environments.',
      icon: Star,
      features: ['Reverb Control', 'Echo Elimination', 'Sound Isolation']
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student',
      content: 'MMSM has transformed my musical journey. The blend of Indian and Western classical training is unique and the studio facilities are world-class.',
      rating: 5
    },
    {
      name: 'Rahul Verma',
      role: 'Parent',
      content: 'My daughter has been learning here for 3 years. The certified faculty and performance opportunities have helped her grow tremendously.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Professional Musician',
      content: 'The studio services at MMSM are exceptional. I\'ve recorded multiple albums here and the acoustic treatment is outstanding.',
      rating: 5
    }
  ]

  const stats = [
    { number: '13', label: 'Years', description: 'Since 2010, nurturing musical talent' },
    { number: '500+', label: 'Students', description: 'Successfully trained musicians' },
    { number: '50+', label: 'Performances', description: 'Annual concerts and recitals' },
    { number: '3', label: 'Certifications', description: 'Trinity, MTB, Prayag Sangeet Samiti' }
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900">Loading MMSM...</h2>
          <p className="text-gray-600 mt-2">Preparing your musical journey</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/MM Logo(White).png" 
                alt="MMSM Logo" 
                width={80} 
                height={80} 
                className="h-20 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-white hover:text-yellow-300 transition-colors font-medium">Programs</a>
              <a href="#courses" className="text-white hover:text-yellow-300 transition-colors font-medium">Courses</a>
              <a href="#services" className="text-white hover:text-yellow-300 transition-colors font-medium">Services</a>
              <a href="#contact" className="text-white hover:text-yellow-300 transition-colors font-medium">Contact</a>
              <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-yellow-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Background Design */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with curved divider */}
        <div className="absolute inset-0">
          {/* Teal green background (left side) */}
          <div className="absolute inset-0 bg-teal-600">
            {/* Subtle circular patterns */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-40 left-40 w-24 h-24 bg-teal-500 rounded-full opacity-15"></div>
            <div className="absolute top-60 left-80 w-16 h-16 bg-teal-500 rounded-full opacity-25"></div>
          </div>
          
          {/* Golden yellow background (right side) with curved divider */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-yellow-400" style={{
              clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side content */}
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Inspiring Young<br />
                Lives Through<br />
                <span className="text-yellow-300">Music</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                Unleash your inner musician: Join our music school today!
              </p>
              <button className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg hover:bg-gray-800">
                Our Programs
              </button>
            </div>

                         {/* Right side - Image */}
             <div className="relative">
               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                 <div className="aspect-[4/5] relative rounded-xl overflow-hidden">
                   <Image 
                     src="/hero-music.svg" 
                     alt="Music Education"
                     fill
                     className="object-cover"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                   />
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm mb-4">PROGRAMS WE OFFER</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">Advance your skills at our music school</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={program.image} 
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Arrow button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors shadow-lg">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-teal-600 font-semibold mb-4">{program.age}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Music Lessons We Teach</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Find out which instrument you or your child can start learning!
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-lg transform hover:scale-105">
              Try a Free Class
            </button>
          </div>

          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-6">
              {['western', 'indian', 'special'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-4 rounded-xl font-semibold transition-all text-lg ${
                    activeTab === tab
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-teal-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} & Contemporary
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses[activeTab as keyof typeof courses].map((course, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-teal-50 rounded-xl p-4 w-fit mb-6 group-hover:bg-teal-100 transition-colors">
                  <course.icon className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.name}</h3>
                <p className="text-teal-600 font-semibold mb-4 text-lg">{course.age}</p>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{course.description}</p>
                <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center text-lg group-hover:translate-x-2 transform transition-transform">
                  Learn More <ChevronRight className="h-6 w-6 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-teal-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-8">Performance Spotlights</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              One of the only music schools of its kind
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-2xl font-bold text-teal-100 mb-3">{stat.label}</div>
                <div className="text-teal-200 text-lg leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At MMSM, we don't just teach music — we provide end-to-end solutions for learners, 
              musicians, producers, and creators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="bg-teal-50 rounded-xl p-4 w-fit mb-6 group-hover:bg-teal-100 transition-colors">
                  <service.icon className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-lg">
                      <CheckCircle className="h-6 w-6 text-teal-600 mr-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              What parents and alumni say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-teal-200"
              >
                <div className="flex items-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-xl leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-bold text-gray-900 text-xl">{testimonial.name}</div>
                  <div className="text-teal-600 font-semibold">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your musical journey? Contact us today to learn more about our programs and services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-12">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-teal-50 rounded-xl p-4 flex-shrink-0">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-xl block mb-2">Address:</span>
                    <p className="text-gray-600 text-lg">G-8, Basement Block G, Lajpat Nagar I, New Delhi – 110024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-teal-50 rounded-xl p-4 flex-shrink-0">
                    <Phone className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-xl block mb-2">Phone:</span>
                    <p className="text-gray-600 text-lg">+91 9711807406 | +91 9910014840</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-teal-50 rounded-xl p-4 flex-shrink-0">
                    <Mail className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-xl block mb-2">Email:</span>
                    <p className="text-gray-600 text-lg">moujmaalikmusic@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-teal-50 rounded-xl p-4 flex-shrink-0">
                    <Music className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-xl block mb-2">Website:</span>
                    <p className="text-gray-600 text-lg">www.moujmaalik.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-10 border-2 border-gray-100">
              <h3 className="text-4xl font-bold text-gray-900 mb-12">Send us a Message</h3>
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-8 py-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-lg transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-8 py-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-lg transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={8}
                    className="w-full px-8 py-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-lg transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 text-lg transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <Image 
                  src="/MM Logo(White).png" 
                  alt="MMSM Logo" 
                  width={70} 
                  height={70} 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Since 2010 | Learn • Record • Perform
              </p>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-8">Programs</h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="hover:text-white transition-colors cursor-pointer">Private Lessons</li>
                <li className="hover:text-white transition-colors cursor-pointer">Group Classes</li>
                <li className="hover:text-white transition-colors cursor-pointer">Online Lessons</li>
                <li className="hover:text-white transition-colors cursor-pointer">Summer Camps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-8">Services</h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="hover:text-white transition-colors cursor-pointer">Studio Rental</li>
                <li className="hover:text-white transition-colors cursor-pointer">Soundproofing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Audio Equipment</li>
                <li className="hover:text-white transition-colors cursor-pointer">Acoustic Treatment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-8">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Courses</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Mouj Maalik School of Music. All rights reserved.</p>
          </div>
        </div>
      </footer>
         </div>
   )
 }
