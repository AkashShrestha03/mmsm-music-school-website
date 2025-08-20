'use client'

import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="relative z-50">
      {/* Golden Curved Banner (Header) */}
      <div className="h-32 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-400 relative overflow-hidden">
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path 
              d="M0,0 Q300,32 600,32 T1200,32 L1200,64 L0,64 Z" 
              fill="white" 
            />
          </svg>
        </div>
      </div>
      
      {/* White Navigation Bar */}
      <div className="bg-white py-6 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left Navigation Links */}
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-700 font-medium text-lg hover:text-amber-600 transition-colors">
                About us
              </a>
              <a href="#music" className="text-gray-700 font-medium text-lg hover:text-amber-600 transition-colors">
                Music
              </a>
            </div>
            
            {/* Central Logo - MM Logo from public folder */}
            <div className="flex flex-col items-center -mt-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-2 shadow-xl border-2 border-amber-200">
                <img 
                  src="/MM Logo(White).png" 
                  alt="MMSM Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            
            {/* Right Navigation Links */}
            <div className="flex space-x-8">
              <a href="#sanskrit" className="text-gray-700 font-medium text-lg hover:text-amber-600 transition-colors">
                Sanskrit
              </a>
              <a href="#contact" className="text-gray-700 font-medium text-lg hover:text-amber-600 transition-colors">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Light Background with Subtle Pattern */}
      <div className="bg-amber-50 py-8 relative">
        {/* Subtle mandala pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32">
            <svg viewBox="0 0 128 128" className="w-full h-full">
              <circle cx="64" cy="64" r="60" fill="none" stroke="#d97706" strokeWidth="1"/>
              <circle cx="64" cy="64" r="40" fill="none" stroke="#d97706" strokeWidth="1"/>
              <circle cx="64" cy="64" r="20" fill="none" stroke="#d97706" strokeWidth="1"/>
              {[...Array(8)].map((_, i) => (
                <line key={i} x1="64" y1="64" x2={64 + 60 * Math.cos(i * Math.PI / 4)} y2={64 + 60 * Math.sin(i * Math.PI / 4)} stroke="#d97706" strokeWidth="1"/>
              ))}
            </svg>
          </div>
        </div>
        
        {/* Floral decoration on right */}
        <div className="absolute top-4 right-4 w-24 h-24 opacity-30">
          <svg viewBox="0 0 96 96" className="w-full h-full">
            <circle cx="48" cy="48" r="40" fill="#fecaca"/>
            <circle cx="40" cy="40" r="8" fill="#fca5a5"/>
            <circle cx="56" cy="40" r="8" fill="#fca5a5"/>
            <circle cx="48" cy="56" r="8" fill="#fca5a5"/>
            <circle cx="48" cy="48" r="4" fill="#f87171"/>
          </svg>
        </div>
      </div>
    </nav>
  )
}
