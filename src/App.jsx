import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { EditOverlay } from './components/EditOverlay';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isEditModeOpen, setIsEditModeOpen] = useState(false);

  // Hidden CMS Dashboard Hotkey: Ctrl+Alt+E
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'e') {
        setIsEditModeOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Simple scroll-to-top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent-cyan/30 selection:text-white antialiased">
      
      {/* Scroll Progress Bar - FAANG Style */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-cyan via-accent-sky to-accent-purple origin-left z-[100] shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <EditOverlay isOpen={isEditModeOpen} onClose={() => setIsEditModeOpen(false)} />

      {/* Footer - Minimal & Clean */}
      <footer className="w-full py-16 border-t border-white/5 flex flex-col items-center justify-center gap-6 bg-[#01040f]">
        <div className="flex items-center gap-6 text-secondary mb-4 flex-wrap justify-center">
           <a href="#about" className="text-xs hover:text-accent-cyan transition-colors tracking-widest font-mono">ABOUT</a>
           <span className="text-white/10 hidden md:block">•</span>
           <a href="#projects" className="text-xs hover:text-accent-cyan transition-colors tracking-widest font-mono">PROJECTS</a>
           <span className="text-white/10 hidden md:block">•</span>
           <a href="#experience" className="text-xs hover:text-accent-cyan transition-colors tracking-widest font-mono">HISTORY</a>
           <span className="text-white/10 hidden md:block">•</span>
           <a href="#contact" className="text-xs hover:text-accent-cyan transition-colors tracking-widest font-mono">CONTACT</a>
        </div>
        
        <p className="text-secondary/50 font-mono text-[10px] uppercase tracking-[0.34em] text-center px-4">
          &copy; {new Date().getFullYear()} ENGINEERED BY RISHABH SINGH. NIT CALICUT.
        </p>
        
        <div className="flex items-center gap-2 text-secondary/20 text-[10px] font-mono mt-2 lowercase">
           <span>React</span>
           <span>•</span>
           <span>Tailwind v4</span>
           <span>•</span>
           <span>Framer</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
