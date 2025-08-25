'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { playButtonSound } from '@/utils/soundEffects';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <section className="bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/about banner.png"
          alt="About Mouj Maalik School of Music"
          fill
          className="object-cover"
        />
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black font-['Montserrat']">Our Story</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-[#353535] font-['Nunito'] leading-relaxed mb-6">
              The Mouj Maalik School of Music established in the year <strong>2010</strong> for teaching Indian Classical and Western Classical Music. It is one of the professional and reputed music schools in Delhi which nurture the skills of the students and develops the students to create long term sustainable career to become Artists, Composers and Facilitators in few specialized areas with experienced experts.
            </p>
            <p className="text-lg text-[#353535] font-['Nunito'] leading-relaxed">
              From classrooms to studios, from beginners to professionals — we&apos;ve built a family 
              where <em>everyone&apos;s voice matters</em>. Our journey continues with every note played 
              and every student inspired.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-black font-['Montserrat']">Vision & Mission</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          
          {/* Vision */}
          <div className="relative bg-white border border-gray-300 rounded-2xl shadow-sm p-10 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="absolute -top-4 left-8 bg-white px-4 py-1 rounded-full border text-sm font-semibold text-gray-700 shadow">
              Vision
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 font-['Montserrat']">Our Vision</h3>
            <p className="text-lg text-[#353535] font-['Nunito'] leading-relaxed">
              To be a <strong>global platform for music education and creativity</strong>, where 
              tradition meets innovation, and every individual discovers the power of music 
              to transform lives.
            </p>
            <div className="mt-6 border-t border-gray-200 pt-4 text-sm italic text-gray-600">
              &ldquo;A world where music becomes a universal language of growth.&rdquo;
            </div>
          </div>

          {/* Mission */}
          <div className="relative bg-white border border-gray-300 rounded-2xl shadow-sm p-10 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="absolute -top-4 left-8 bg-white px-4 py-1 rounded-full border text-sm font-semibold text-gray-700 shadow">
              Mission
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 font-['Montserrat']">Our Mission</h3>
            <p className="text-lg text-[#353535] font-['Nunito'] leading-relaxed">
              To empower learners and professionals by offering <strong>accessible, high-quality, 
              and performance-driven</strong> music education and services — nurturing creativity, 
              discipline, and community.
            </p>
            <div className="mt-6 border-t border-gray-200 pt-4 text-sm italic text-gray-600">
              &ldquo;Every student, every note, a step toward excellence.&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6">
        <h3 className="text-3xl font-bold text-black mb-6 font-['Montserrat']">
          Join Our Journey
        </h3>
        <p className="text-lg text-[#353535] max-w-2xl mx-auto mb-8 font-['Nunito'] leading-relaxed">
          Be a part of Mouj Maalik School of Music — where passion meets purpose, and music becomes a lifelong companion.
        </p>
        <Link 
          href="/#courses" 
          className="inline-block px-10 py-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
          onClick={playButtonSound}
        >
          Explore Courses
        </Link>
      </div>
      </section>
      <Footer />
    </div>
  );
}
