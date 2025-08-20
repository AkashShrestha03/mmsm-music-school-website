import { Music, Users, Mic, Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function ProgramsSection() {
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

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-teal-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-teal-100 rounded-full mb-6">
            <Music className="h-5 w-5 text-teal-600 mr-2" />
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">PROGRAMS WE OFFER</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Advance your skills at our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> music school</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of music programs designed to nurture talent at every level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-teal-200 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with overlay */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={program.image} 
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Age badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-teal-600 font-semibold text-sm">{program.age}</span>
                </div>
                
                {/* Arrow button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-lg transform group-hover:scale-110">
                  <svg className="w-6 h-6 text-teal-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-50 rounded-xl p-3 mr-4 group-hover:bg-teal-100 transition-colors">
                    <program.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {program.description}
                </p>
                
                {/* Learn more button */}
                <button className="mt-6 text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center text-base group-hover:translate-x-2 transform transition-transform">
                  Learn More <ChevronRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
