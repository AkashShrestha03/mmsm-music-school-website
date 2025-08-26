'use client';

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Courses from '@/components/Courses';
import MusicProduction from '@/components/MusicProduction';
import AcousticsSolutions from '@/components/AcousticsSolutions';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Banner />
        
        <About />
        
        <Courses />
        <MusicProduction />
        <AcousticsSolutions />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
