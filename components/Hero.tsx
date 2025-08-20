"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-4 flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 animate-spin-slow bg-amber-100 opacity-30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 animate-spin-slow-reverse bg-orange-100 opacity-30 rounded-full"></div>
        </div>

        {/* Floating Musical Notes with Different Animations */}
        <motion.div 
          className="absolute top-20 right-20 text-6xl opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🎵
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-20 text-5xl opacity-20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          🎼
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🎶
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 text-4xl opacity-20"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          🥁
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 text-4xl opacity-20"
          animate={{ 
            x: [0, -10, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          🎸
        </motion.div>
      </div>
      
      {/* Hero Card with Enhanced Transparency and Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 shadow-white/20 relative group hover:shadow-3xl transition-all duration-700"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
      >
        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
        
        {/* Main Image with Enhanced Overlay */}
        <div className="relative">
          <img 
            src="/banner.jpg"
            alt="Indian Music Academy"
            className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Enhanced Gradient Overlay with Multiple Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
            {/* Additional Overlay Layer for Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10"></div>
            
            <div className="text-center relative z-10">
              
              {/* Enhanced Title with Multiple Effects */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                {/* Glowing Background for Title */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-amber-400/30 to-yellow-400/30 blur-2xl rounded-full transform scale-150"></div>
                
                {/* Main Title */}
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(255, 193, 7, 0.8)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-devanagari bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                    Sangeet
                  </span>
                </motion.h1>
                
                {/* Animated Underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full mt-2 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.div>

              {/* Floating Music Icons Around Title */}
              <motion.div 
                className="absolute -top-4 -left-4 text-2xl opacity-60"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                🎵
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 text-2xl opacity-60"
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 1
                }}
              >
                🎼
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
