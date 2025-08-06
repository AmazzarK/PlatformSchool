import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';  
import AboutSection from '../components/AboutSection';
import Programs from '../components/Programs';  
import Features from '../components/Features';
import ContactSection from '../components/ContactSection';       
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Header />

      <section id="HeroCarousel" className="scroll-mt-20">
        <HeroCarousel />
      </section>

      <section id="AboutSection" className="scroll-mt-20">
        <AboutSection />
      </section>

      <section id="programs" className="scroll-mt-20">
        <Programs />
      </section>

      <section id="Features" className="scroll-mt-20">
        <Features />
      </section>



      <section id="ContactSection" className="scroll-mt-20">
        <ContactSection />
      </section>

      <section id="Footer" className="scroll-mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default Home;