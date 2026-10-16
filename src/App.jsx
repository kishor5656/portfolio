import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500/25 selection:text-brand-300">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
