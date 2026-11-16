import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Engineering from '@/components/sections/Engineering';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
// import GitHub from '@/components/sections/GitHub';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />
        <Projects />
        <Engineering />
        <About />
        {/* <GitHub /> */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
