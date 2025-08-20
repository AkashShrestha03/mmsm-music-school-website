import { Sparkles, Crown, Target, Zap } from 'lucide-react'

export default function InteractiveSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-semibold uppercase tracking-wider text-sm">WHY CHOOSE MMSM?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Where 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300"> Tradition </span>
            Meets 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300"> Innovation</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 w-fit mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Excellence</h3>
              <p className="text-white/80 text-sm">Trinity College London, MTB, Prayag Sangeet Samiti certified programs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-full p-3 w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Focus</h3>
              <p className="text-white/80 text-sm">Regular concerts, recitals & recording opportunities for real experience</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-3 w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Facilities</h3>
              <p className="text-white/80 text-sm">State-of-the-art studios, equipment & acoustic treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
