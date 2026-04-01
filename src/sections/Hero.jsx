import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';
import { AnimatedCounter } from '../components/AnimatedCounter';
import profile from '../data/profile.json';

export const Hero = () => {
  const { name, avatar, socials, stats } = profile;

  return (
    <div id="home" className="min-h-screen pt-24 md:pt-32 flex items-center relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-accent-purple/5 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] bg-accent-cyan/10 blur-[180px] rounded-full"
        />
      </div>

      <SectionWrapper className="pb-12 md:pb-20 relative z-10 w-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
        
        {/* Bio Content - Main text on the left on desktop, top on mobile */}
        <div className="flex-1 text-center xl:text-left space-y-6 md:space-y-8 w-full order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="text-accent-cyan font-mono text-sm tracking-[0.4em] uppercase mb-6 block font-bold">
              Engineering <span className="opacity-50 italic">at</span> NIT Calicut
            </span>
            <h1 className="text-6xl md:text-8xl font-black font-heading text-primary tracking-tighter leading-[0.85] mb-6">
              {name}<span className="text-accent-cyan">.</span>
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold font-heading text-secondary tracking-tight mb-10 h-[1.2em] flex items-center justify-center md:justify-start gap-3">
              <span className="opacity-70">I engineer</span>
              <span className="text-primary bg-gradient-to-r from-accent-cyan via-accent-sky to-accent-purple bg-clip-text text-transparent drop-shadow-sm underline decoration-accent-cyan/20 decoration-4 underline-offset-8">
                <Typewriter
                  words={['Scalable Backends', 'MERN Applications', 'C++ Systems', 'Optimized Logic']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={2500}
                />
              </span>
            </div>

            <p className="text-lg md:text-xl text-secondary max-w-xl mb-12 font-light leading-relaxed mx-auto md:mx-0">
               Mastering <span className="text-primary font-medium">Data Structures & Algorithms</span> to build high-performance software. Focused on efficiency, clean code, and resilient architecture.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#projects">
                <Button variant="glow" size="lg" className="px-10 py-6 font-bold uppercase tracking-widest text-xs">
                  Explore Systems
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="px-10 py-6 font-bold uppercase tracking-widest text-xs bg-card hover:bg-card-hover text-primary border-border">
                  Contact
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Achievement Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center md:justify-start gap-12 pt-8 border-t border-border"
          >
             <div className="flex flex-col">
               <span className="text-2xl font-black text-primary font-heading tracking-tighter">
                 <AnimatedCounter value={stats.problems} duration={2} />
               </span>
               <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">Solved</span>
             </div>
             <div className="flex flex-col border-l border-border pl-12">
               <span className="text-2xl font-black text-primary font-heading tracking-tighter">
                 <AnimatedCounter value={stats.score} duration={2.5} />
               </span>
               <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">GFG Score</span>
             </div>
          </motion.div>
        </div>

        {/* Profile Image - Shifted to the right on desktop, bottom on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex justify-center order-2 mt-12 xl:mt-0"
        >
          <div className="relative group p-2 mx-auto md:mx-0">
            <div className="absolute -inset-4 border border-accent-cyan/10 rounded-3xl animate-[spin_15s_linear_infinite] pointer-events-none"></div>
            <div className="absolute -inset-8 border border-accent-purple/5 rounded-[40px] animate-[spin_25s_linear_infinite_reverse] pointer-events-none"></div>
            
            <div className="w-72 h-72 md:w-[480px] md:h-[480px] glass p-4 rounded-[32px] glow-hover transition-all duration-700 relative overflow-hidden group-hover:-rotate-1">
              <div className="w-full h-full relative overflow-hidden rounded-[24px]">
                <div className="absolute inset-0 bg-accent-cyan/5 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <img 
                  src={avatar} 
                  alt={name} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 contrast-[1.1]"
                />
              </div>
            </div>
            
            {/* Quick Socials Overlay */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-card border border-border shadow-2xl p-2 rounded-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
               <a href={socials.github} target="_blank" rel="noreferrer" className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl text-secondary hover:text-accent-cyan transition-colors" title="GitHub">
                  <Github size={20} />
               </a>
               <a href={socials.geeksforgeeks} target="_blank" rel="noreferrer" className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl text-secondary hover:text-accent-cyan transition-colors" title="GeeksforGeeks">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 16.51c-2.47-.19-4.38-2.27-4.38-4.78 0-2.65 2.15-4.8 4.8-4.8 1.13 0 2.16.4 2.97 1.06l-1.03 1.03c-.53-.43-1.2-.69-1.94-.69-1.55 0-2.8 1.25-2.8 2.8 0 1.4.91 2.58 2.18 2.77v-2.07h1.4v3.68h-1.2zm5.72-3.11c-.53.43-1.2.69-1.94.69-1.55 0-2.8-1.25-2.8-2.8s1.25-2.8 2.8-2.8c.74 0 1.41.26 1.94.69l1.03-1.03c-.81-.66-1.84-1.06-2.97-1.06-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8c1.13 0 2.16-.4 2.97-1.06l-1.03-1.03z"/></svg>
               </a>
            </div>
          </div>
        </motion.div>

        </div>
      </SectionWrapper>
    </div>
  );
};
