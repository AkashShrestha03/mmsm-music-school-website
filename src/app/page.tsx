import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

import Gallery from '@/components/Gallery';
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
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
