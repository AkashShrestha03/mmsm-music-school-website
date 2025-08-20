// components/WhoWeServe.tsx
export default function WhoWeServe() {
  const whoWeServe = [
    {
      id: 1,
      title: "Students",
      description: "Comprehensive music education for all ages and skill levels.",
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Professionals",
      description: "Advanced training and performance opportunities for career musicians.",
      icon: "🎼",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Hobbyists",
      description: "Enjoyable and relaxed learning environment for music enthusiasts.",
      icon: "🎵",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Performers",
      description: "Stage performance training and opportunities to showcase talent.",
      icon: "🎤",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Who We <span className="text-saffron">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our music school welcomes learners from all walks of life, providing tailored education for everyone.
          </p>
        </div>

        {/* Who We Serve Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoWeServe.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="text-center mb-6 relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} rounded-full text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-saffron transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
