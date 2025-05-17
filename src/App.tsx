import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';
import Features from './components/sections/Features';
import ScheduleVisit from './components/sections/ScheduleVisit';
import Contact from './components/sections/Contact';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="quem-somos" className="py-16 md:py-24 bg-white">
          <AboutUs />
        </section>
        <section id="servicos" className="py-16 md:py-24 bg-accent-light">
          <Services />
        </section>
        <section id="funcionalidades" className="py-16 md:py-24 bg-white">
          <Features />
        </section>
        <section id="agende" className="py-16 md:py-24 bg-primary">
          <ScheduleVisit />
        </section>
        <section id="contato" className="py-16 md:py-24 bg-accent-light">
          <Contact />
        </section>
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;