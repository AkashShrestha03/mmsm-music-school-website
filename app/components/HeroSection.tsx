import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Floating Mandala */}
        <div className="absolute top-20 left-20 w-64 h-64 animate-spin-slow">
          <svg viewBox="0 0 256 256" className="w-full h-full">
            <circle cx="128" cy="128" r="120" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.3"/>
            <circle cx="128" cy="128" r="80" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.4"/>
            <circle cx="128" cy="128" r="40" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5"/>
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="128" y1="128" x2={128 + 120 * Math.cos(i * Math.PI / 6)} y2={128 + 120 * Math.sin(i * Math.PI / 6)} stroke="#d97706" strokeWidth="1" opacity="0.3"/>
            ))}
          </svg>
        </div>
        
        {/* Floating Lotus */}
        <div className="absolute bottom-20 right-20 w-48 h-48 animate-bounce-slow">
          <svg viewBox="0 0 192 192" className="w-full h-full">
            <g transform="rotate(45 96 96)">
              {[...Array(8)].map((_, i) => (
                <ellipse key={i} cx="96" cy="96" rx="60" ry="20" fill="#fbbf24" opacity="0.2" transform={`rotate(${i * 45} 96 96)`}/>
              ))}
            </g>
          </svg>
        </div>
        
        {/* Floating Diyas */}
        <div className="absolute top-1/3 right-1/4 w-16 h-16 animate-pulse">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="16" fill="#fbbf24" opacity="0.3"/>
            <path d="M32 16 L36 24 L28 24 Z" fill="#f59e0b" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Floating Musical Notes */}
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 animate-bounce">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <path d="M12 12 L12 36 L20 36 L20 16 L32 16 L32 12 Z" fill="#d97706" opacity="0.3"/>
            <circle cx="32" cy="16" r="4" fill="#d97706" opacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Animated Traditional Greeting */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-8 border-2 border-orange-200 shadow-lg animate-pulse">
              <span className="text-orange-700 font-bold text-lg">🙏 नमस्ते</span>
              <div className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
            </div>
            
            {/* Stunning Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-purple-700 animate-pulse">
                Discover the
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                Magic of Music
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-pulse" style={{animationDelay: '1s'}}>
                Indian Style
              </span>
            </h1>
            
            {/* Animated Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-lg lg:max-w-none leading-relaxed animate-fade-in">
              Experience the rich traditions of Indian classical music blended with cutting-edge modern techniques. 
              Learn from certified masters and discover your musical potential in a culturally immersive environment.
            </p>
            
            {/* Stunning Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
              <button className="group relative bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-110 transition-all duration-500 shadow-2xl overflow-hidden">
                <span className="relative z-10">Start Learning Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group relative border-2 border-orange-500 text-orange-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-orange-500 hover:text-white transition-all duration-500 overflow-hidden">
                <span className="relative z-10">Free Trial Class</span>
                <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
            
            {/* Animated Cultural Elements */}
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              {[
                { color: 'bg-orange-500', text: 'Traditional Methods', icon: '🎵' },
                { color: 'bg-red-500', text: 'Modern Approach', icon: '🚀' },
                { color: 'bg-purple-500', text: 'Cultural Heritage', icon: '🏛️' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`w-4 h-4 ${item.color} rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                  <span className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">{item.text}</span>
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Stunning Banner Image */}
          <div className="relative group">
            {/* Floating Elements Around Image */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
              <span className="text-white text-2xl">🎼</span>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow" style={{animationDelay: '1s'}}>
              <span className="text-white text-2xl">🎭</span>
            </div>
            
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 border-4 border-amber-300 shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
              {/* Animated Border Pattern */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 opacity-30 animate-pulse"></div>
              
              {/* Stunning Corner Decorations */}
              <div className="absolute -top-6 -left-6 w-20 h-20 opacity-80 animate-spin-slow">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <path d="M40 8c-6 0-12 3-15 9-3 6-3 12 0 18 3 6 9 9 15 9s12-3 15-9c3-6 3-12 0-18-3-6-9-9-15-9z" fill="#fbbf24"/>
                  <path d="M8 40c0-6 3-12 9-15 6-3 12-3 18 0 6 3 9 9 9 15s-3 12-9 15c-6 3-12 3-18 0-6-3-9-9-9-15z" fill="#f59e0b"/>
                  <path d="M40 72c6 0 12-3 15-9 3-6 3-12 0-18-3-6-9-9-15-9s-12 3-15 9c-3 6-3 12 0 18 3 6 9 9 15 9z" fill="#d97706"/>
                  <path d="M72 40c0 6-3 12-9 15-6 3-12 3-18 0-6-3-9-9-9-15s3-12 9-15c6-3 12-3 18 0 6 3 9 9 9 15z" fill="#fbbf24"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-16 h-16 opacity-80 animate-spin-slow" style={{animationDirection: 'reverse'}}>
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path d="M32 6c-4 0-8 2-10 6-2 4-2 8 0 12 2 4 6 6 10 6s8-2 10-6c2-4 2-8 0-12-2-4-6-6-10-6z" fill="#f59e0b"/>
                  <path d="M6 32c0-4 2-8 6-10 4-2 8-2 12 0 4 2 6 6 6 10s-2 8-6 10c-4 2-8 2-12 0-4-2-6-6-6-10z" fill="#d97706"/>
                  <path d="M32 58c4 0 8-2 10-6 2-4 2-8 0-12-2-4-6-6-10-6s-8 2-10 6c-2 4-2 8 0 12 2 4 6 6 10 6z" fill="#fbbf24"/>
                  <path d="M58 32c0 4-2 8-6 10-4 2-8 2-12 0-4-2-6-6-6-10s2-8 6-10c4-2 8-2 12 0 4 2 6 6 6 10z" fill="#f59e0b"/>
                </svg>
              </div>
              
              {/* Main Banner Image */}
              <div className="relative z-10">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden group border-2 border-amber-400 shadow-lg">
                  <Image 
                    src="/banner.jpg" 
                    alt="Indian Music Culture Banner" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  
                  {/* Stunning Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-2xl transform group-hover:scale-125 animate-pulse">
                      <svg className="w-8 h-8 text-orange-600 group-hover:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Floating Music Notes */}
                  <div className="absolute top-4 right-4 w-8 h-8 animate-bounce">
                    <span className="text-white text-2xl drop-shadow-lg">♪</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 animate-bounce" style={{animationDelay: '0.5s'}}>
                    <span className="text-white text-2xl drop-shadow-lg">♫</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stunning Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-400 via-red-500 via-purple-600 to-pink-500 animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float"
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
