import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import profile from '../data/profile.json';
import { cn } from '../lib/utils';

// Custom Icons
const GFGIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
);

const LeetCodeIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.41L7.116 5.812z"/>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navLinks = [
    { name: 'About', href: '#about', id: '01' },
    { name: 'Projects', href: '#projects', id: '02' },
    { name: 'Experience', href: '#experience', id: '03' },
    { name: 'Contact', href: '#contact', id: '04' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
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



  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 py-4",
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

        {/* Desktop */}
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

          {/* Controls */}
          <div className="flex items-center gap-5">
             <button 
                onClick={toggleTheme}
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all hover:-translate-y-1"
             >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan transition-all hover:-translate-y-1">
                <Github size={18} />
             </a>
             <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-secondary hover:text-accent-cyan transition-all hover:-translate-y-1">
                <LeetCodeIcon size={18} />
             </a>
          </div>
        </div>

        {/* Mobile Controls — hamburger button always at z-[1001], above menu overlay */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme} className="p-2 text-secondary z-[1001] relative">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(prev => !prev)}
            className="relative z-[1001] p-2 text-primary hover:text-accent-cyan transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X size={28} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu — z-[999] so the hamburger button (z-[1000] inside nav) stays above and clickable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed inset-0 top-0 bg-background z-[999] lg:hidden flex flex-col items-center justify-center gap-12 p-8"
          >
            <div className="flex flex-col items-center gap-10 w-full">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + 0.08 * idx }}
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="w-full text-5xl font-black font-heading text-primary hover:text-accent-cyan transition-colors flex flex-col items-center gap-2"
                >
                  <span className="text-sm font-mono text-accent-cyan opacity-80 mb-1">{link.id}.</span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-12 border-t border-white/10 w-full justify-center">
               <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan"><Github size={24} /></a>
               <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan"><Linkedin size={24} /></a>
               <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan"><LeetCodeIcon size={24} /></a>
               <a href={profile.socials.geeksforgeeks} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent-cyan"><GFGIcon size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};