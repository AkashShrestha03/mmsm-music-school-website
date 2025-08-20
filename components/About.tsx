// components/About.tsx
export default function About() {
  return (
    <section
      className="relative bg-cover bg-center rounded-3xl shadow-lg p-20 w-full mx-auto mt-0 text-[#4b2c20] min-h-screen"
      style={{
        backgroundImage: "url('/abouc back.png')", // background image you saved
      }}
    >
      <div className="flex justify-end items-center min-h-screen">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Text */}
            <div className="space-y-6 relative z-10">
              <h2 className="text-4xl font-bold leading-tight">
                Mouj Maalik <br /> School of Music
              </h2>

              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  Mouj Maalik School of Music is Established in <span className="font-semibold text-orange-600">2010</span>, Mouj Maalik
                  School of Music is a basic setel on transic communities and
                  world-class studio facilities, we guide students from their very
                  first note to becoming confident performers and composers.
                </p>

                <p className="text-base leading-relaxed">
                  Our walls echo with <span className="font-semibold text-orange-600">ragas</span>, <span className="font-semibold text-orange-600">taals</span>, and <span className="font-semibold text-orange-600">symphonies</span> — blending <span className="font-semibold">heritage</span> with <span className="font-semibold">innovation</span>.
                </p>
              </div>
            </div>

            {/* Right Column - Associations */}
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold mb-6">Our Associations</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#fce8d5] px-6 py-4 rounded-xl shadow-md">
                  <span className="text-2xl">🎼</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Trinity College London</h4>
                    <p className="text-gray-600 text-sm">
                      World-recognized music education
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#fce8d5] px-6 py-4 rounded-xl shadow-md">
                  <span className="text-2xl">🎤</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Music Teachers Board</h4>
                    <p className="text-gray-600 text-sm">
                      Professional certification for teaching
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#fce8d5] px-6 py-4 rounded-xl shadow-md">
                  <span className="text-2xl">🎶</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Prayag Sangeet Samiti</h4>
                    <p className="text-gray-600 text-sm">
                      Carrying the legacy of Indian classical
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore button - below both columns */}
          <div className="pt-8 text-center">
            <a
              href="https://www.moujmaalik.com"
              className="inline-flex items-center gap-3 bg-[#ff6600] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#e65c00] transition-all duration-300 font-medium"
            >
              <span className="text-xl">♪</span> Explore www.moujmaalik.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


