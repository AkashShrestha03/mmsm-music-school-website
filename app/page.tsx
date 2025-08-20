import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Courses from '@/components/Courses'
import WhyChoose from '@/components/WhyChoose'
import Services from '@/components/Services'
import WhoWeServe from '@/components/WhoWeServe'
import Teachers from '@/components/Teachers'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="programs">
        <Courses />
      </div>
      <div id="why-choose">
        <WhyChoose />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="who-we-serve">
        <WhoWeServe />
      </div>
      
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
