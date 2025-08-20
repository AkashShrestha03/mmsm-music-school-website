'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Music, Send, Heart } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: "📍",
      title: "Address",
      content: "G-8, Basement Block G, Lajpat Nagar I, New Delhi – 110024",
      color: "from-orange-500 to-amber-600",
      pattern: "🎭"
    },
    {
      id: 2,
      icon: "📧",
      title: "Email",
      content: "moujmaalikmusic@gmail.com",
      color: "from-red-500 to-orange-600",
      pattern: "🪔"
    },
    {
      id: 3,
      icon: "📞",
      title: "Phone",
      content: "+91 9711807406 | +91 9910014840",
      color: "from-green-500 to-emerald-600",
      pattern: "🏛️"
    },
    {
      id: 4,
      icon: "🌐",
      title: "Website",
      content: "www.moujmaalik.com",
      color: "from-purple-500 to-pink-600",
      pattern: "🎨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian Background Elements */}
              <div className="absolute inset-0 opacity-10">
        {/* Mandala Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-amber-100 opacity-20"></div>
        
        {/* Floating Musical Elements */}
        <div className="absolute top-20 right-20 text-6xl opacity-10 animate-bounce">🎵</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10 animate-bounce delay-1000">🎼</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl opacity-10 animate-pulse">🎶</div>
        <div className="absolute top-1/3 right-1/3 text-4xl opacity-10 animate-bounce delay-500">🥁</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-10 animate-bounce delay-1500">🎸</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Traditional Decorative Border */}
          <div className="inline-block mb-8">
            <div className="w-40 h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full mb-3"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 rounded-full mx-auto"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-full mx-auto"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="font-devanagari text-amber-600">Contact Us</span>
          </h2>
          <h3 className="text-4xl font-bold text-gray-700 mb-6">Contact Us</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with us to begin your musical journey or learn more about our services.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Contact Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <span className="text-5xl">{info.pattern}</span>
                </div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${info.color} rounded-full text-4xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {info.content}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute bottom-0 left-0 w-0 h-0 border-l-[25px] border-l-transparent border-b-[25px] ${info.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Heritage CTA */}
        <div className="text-center">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
            
            {/* Main CTA Card */}
            <div className="relative bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat bg-white opacity-10"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">
                  Welcome to the World of Music
                </h3>
                <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Ready to start your musical journey? Contact us today and let's create beautiful music together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:moujmaalikmusic@gmail.com"
                    className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                  >
                    Email Us
                  </a>
                  <a
                    href="tel:+919711807406"
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 inline-block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
