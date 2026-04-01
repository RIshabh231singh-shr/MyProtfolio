import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Box, Terminal } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        />
        
        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass rounded-3xl border border-white/10 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 md:p-10 border-b border-white/5 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-accent-cyan/10 rounded-2xl text-accent-cyan border border-accent-cyan/20">
                 <Terminal size={24} />
               </div>
               <div>
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest">Case Study</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-primary">{project.title}</h2>
               </div>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-secondary hover:text-primary transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-primary font-heading flex items-center gap-2">
                    <Box size={18} className="text-accent-cyan" />
                    Overview
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-primary font-heading">Key Accomplishments</h3>
                  <ul className="space-y-4">
                    {project.details?.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-secondary/80 text-base leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-accent-cyan rounded-full shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Metadata */}
              <div className="space-y-10">
                <div className="space-y-4">
                   <h3 className="text-xs font-mono text-accent-cyan uppercase tracking-[0.2em]">Technology Stack</h3>
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-secondary">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="p-6 bg-accent-cyan/5 rounded-2xl border border-accent-cyan/10 space-y-6">
                   <h3 className="text-sm font-bold text-primary">Project Artifacts</h3>
                   <div className="flex flex-col gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-full">
                        <Button variant="glow" size="sm" className="w-full justify-between px-4">
                          View Codebase <Github size={16} />
                        </Button>
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="w-full">
                        <Button variant="outline" size="sm" className="w-full justify-between px-4">
                          Launch Demo <ExternalLink size={16} />
                        </Button>
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
