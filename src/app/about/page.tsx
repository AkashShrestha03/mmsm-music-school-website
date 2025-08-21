
'use client';

import { Montserrat, Nunito } from 'next/font/google';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Google Fonts
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600'] });

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF6]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&h=900&fit=crop"
          alt="Musicians performing live on stage"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Title */}
        <div className="relative z-10 text-center">
          <h1
            className={`text-5xl sm:text-6xl font-bold text-white drop-shadow-lg ${montserrat.className}`}
          >
            About
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#FFFDF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Card */}
          <div className="bg-white shadow-xl rounded-2xl p-10 border border-[#f0eae0]">
            <h2
              className={`text-4xl font-bold text-black mb-6 ${montserrat.className}`}
            >
              Our Mission
            </h2>
            <p
              className={`text-lg text-[#353535] leading-relaxed mb-4 ${nunito.className}`}
            >
              To provide world-class music education that nurtures creativity,
              preserves cultural heritage, and empowers students to become
              accomplished musicians and confident performers.
            </p>
            <p
              className={`text-lg text-[#353535] leading-relaxed ${nunito.className}`}
            >
              We believe that music is a universal language that connects hearts
              and transcends boundaries, making it accessible to everyone,
              regardless of their background or experience level.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&h=600&fit=crop"
              alt="Students learning guitar in class"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#FFFDF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image First */}
          <div className="order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=900&h=600&fit=crop"
              alt="Students in a modern music studio recording"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Card */}
          <div className="order-1 lg:order-2 bg-white shadow-xl rounded-2xl p-10 border border-[#f0eae0]">
            <h2
              className={`text-4xl font-bold text-black mb-6 ${montserrat.className}`}
            >
              Our Vision
            </h2>
            <p
              className={`text-lg text-[#353535] leading-relaxed ${nunito.className}`}
            >
              To be the leading music school in India, recognized for excellence
              in both traditional Indian classical music and contemporary Western
              music, creating a harmonious blend of cultural heritage and modern
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
