import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon, Link2, Code2 } from 'lucide-react';
import profile from '../data/profile.json';
import { cn } from '../lib/utils';

// Custom Icons for GFG and LeetCode
const GFGIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 16.51c-2.47-.19-4.38-2.27-4.38-4.78 0-2.65 2.15-4.8 4.8-4.8 1.13 0 2.16.4 2.97 1.06l-1.03 1.03c-.53-.43-1.2-.69-1.94-.69-1.55 0-2.8 1.25-2.8 2.8 0 1.4.91 2.58 2.18 2.77v-2.07h1.4v3.68h-1.2zm5.72-3.11c-.53.43-1.2.69-1.94.69-1.55 0-2.8-1.25-2.8-2.8s1.25-2.8 2.8-2.8c.74 0 1.41.26 1.94.69l1.03-1.03c-.81-.66-1.84-1.06-2.97-1.06-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8c1.13 0 2.16-.4 2.97-1.06l-1.03-1.03z"/>
  </svg>
);

const LeetCodeIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.41L7.116 5.812a1.373 1.373 0 0 0-.584 1.125 1.373 1.373 0 0 0 1.373 1.373h8.344a.687.687 0 0 1 .687.687v2.748a.687.687 0 0 1-.687.687h-2.748a.687.687 0 0 1-.687-.687v-.687h-1.373v.687a2.062 2.062 0 0 0 2.062 2.062h2.748a2.062 2.062 0 0 0 2.062-2.062v-2.748a2.062 2.062 0 0 0-2.062-2.062h-7.657l4.004-4.004a.687.687 0 0 1 .485-.201h1.373V0H13.483zm-6.241 12.33a2.062 2.062 0 0 0-2.062 2.062v2.748a2.062 2.062 0 0 0 2.062 2.062h2.748a2.062 2.062 0 0 0 2.062-2.062v-2.748a2.062 2.062 0 0 0-2.062-2.062H7.242zm.687 1.374h1.373a.687.687 0 0 1 .687.687v2.748a.687.687 0 0 1-.687.687H7.929a.687.687 0 0 1-.687-.687v-2.748a.687.687 0 0 1 .687-.687z"/>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navLinks = [
    { name: 'About', href: '#about', id: '01' },
    { name: 'Projects', href: '#projects', id: '02' },
    { name: 'History', href: '#experience', id: '03' },
    { name: 'Contact', href: '#contact', id: '04' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme from system or local storage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4",
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between w-full">
        
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-black font-heading tracking-tighter text-primary flex items-center gap-2 group"
        >
          <span className="text-accent-cyan group-hover:rotate-12 transition-transform duration-500">&lt;</span>
          <span className="hidden sm:inline">Rishabh</span>
          <span className="sm:hidden">R.</span>
          <span className="text-accent-cyan">/&gt;</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex items-center gap-2 text-sm font-medium font-mono text-secondary hover:text-primary transition-all duration-300"
              >
                <span className="text-accent-cyan opacity-50 font-bold">{link.id}.</span>
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-cyan transition-all duration-500 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

          {/* Theme Toggle & Socials */}
          <div className="flex items-center gap-5">
             <button 
                onClick={toggleTheme}
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1"
                aria-label="Toggle Theme"
             >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1" aria-label="GitHub">
                <Github size={18} />
             </a>
             <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1" aria-label="LeetCode">
                <LeetCodeIcon size={18} />
             </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme} className="p-2 text-secondary"><Sun size={20} /></button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary hover:text-accent-cyan transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl z-50 lg:hidden flex flex-col items-center justify-center gap-12 p-12"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold font-heading text-primary hover:text-accent-cyan transition-colors text-center"
                >
                  <span className="text-sm font-mono text-accent-cyan block mb-2">{link.id}.</span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-12 border-t border-white/10 w-full justify-center">
               <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan transition-colors"><Github size={24} /></a>
               <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan transition-colors"><Linkedin size={24} /></a>
               <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan transition-colors"><LeetCodeIcon size={24} /></a>
               <a href={profile.socials.geeksforgeeks} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan transition-colors"><GFGIcon size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
