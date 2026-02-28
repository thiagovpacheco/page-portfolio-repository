import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="relative min-h-screen font-body text-navy bg-slate overflow-hidden selection:bg-blue/20">
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Features />
      </main>

      <Footer />

    </div>
  );
}

export default App;
