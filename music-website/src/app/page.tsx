import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Specials from '@/components/Specials';
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
        <Specials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
