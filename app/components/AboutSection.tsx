'use client'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/about us.png" 
          alt="About MMSM Background" 
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Elegant Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full mb-8 border-2 border-yellow-300 shadow-2xl">
            <span className="text-slate-700 font-bold text-xl mr-3">🎵</span>
            <span className="text-slate-700 font-bold text-xl">About MMSM</span>
            <span className="text-slate-700 font-bold text-xl ml-3">🎼</span>
          </div>

          {/* Main Title */}
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            About Us
          </h2>

          {/* Elegant Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Main Description Card */}
            <div className="relative group">
              {/* Glowing Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 border border-yellow-300 shadow-2xl">
                {/* Musical Corner Decorations */}
                <div className="absolute -top-4 -left-4 w-8 h-8 text-yellow-500 animate-spin-slow">🎸</div>
                <div className="absolute -top-4 -right-4 w-8 h-8 text-orange-500 animate-spin-slow" style={{animationDirection: 'reverse'}}>🎹</div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 text-red-500 animate-spin-slow">🎻</div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 text-purple-500 animate-spin-slow" style={{animationDirection: 'reverse'}}>🥁</div>
                
                <div className="relative z-10">
                  <p className="text-2xl text-slate-800 leading-relaxed mb-8 font-medium">
                    Founded in 2010, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Mouj Maalik School of Music (MMSM)</span> is one of Delhi's most respected music institutions, combining traditional Indian Classical and Western Classical training with modern studio facilities.
                  </p>
                  
                  <p className="text-xl text-slate-700 leading-relaxed">
                    At MMSM, we nurture students' skills with expert guidance and prepare them for sustainable careers as artists, composers, and facilitators. Alongside education, we provide professional acoustic, recording, and production services to support musicians, producers, and creators.
                  </p>
                </div>
              </div>
            </div>

            {/* Website Link */}
            <div className="text-center">
              <a 
                href="https://www.moujmaalik.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-black font-black rounded-full text-xl hover:from-yellow-300 hover:via-orange-400 hover:to-red-500 transform hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-yellow-300 hover:border-yellow-200"
              >
                <span className="mr-4 text-2xl">🌐</span>
                <span className="mr-4">www.moujmaalik.com</span>
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Associations */}
          <div className="space-y-8">
            {/* Associations Header */}
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  We are proudly associated with:
                </span>
              </h3>
            </div>

            {/* Association Cards */}
            <div className="space-y-6">
              {[
                {
                  name: "Trinity College London",
                  description: "International music education excellence",
                  icon: "🎓",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  name: "Music Teachers Board",
                  description: "Professional teaching standards",
                  icon: "🎵",
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  name: "Prayag Sangeet Samiti, Allahabad University",
                  description: "Traditional Indian music heritage",
                  icon: "🏛️",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((association, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Glowing Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-yellow-300 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${association.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {association.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-600 transition-all duration-300">
                          {association.name}
                        </h4>
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                          {association.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="text-yellow-500 group-hover:translate-x-3 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 text-center">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "13+", label: "Years of Excellence", icon: "⭐" },
              { number: "500+", label: "Students Trained", icon: "🎓" },
              { number: "50+", label: "Expert Teachers", icon: "👨‍🏫" },
              { number: "100%", label: "Success Rate", icon: "🎯" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/90 to-orange-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-2xl">{stat.number}</div>
                <div className="text-yellow-200 font-medium drop-shadow-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="w-48 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mx-auto rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}
