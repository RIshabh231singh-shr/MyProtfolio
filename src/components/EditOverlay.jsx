import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Download, X, Settings, RefreshCcw } from 'lucide-react';
import { Button } from './Button';

export const EditOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-full max-w-2xl glass p-8 rounded-3xl border border-white/10 shadow-2xl space-y-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Settings className="text-accent-cyan" size={24} />
               <h2 className="text-xl font-bold font-heading text-primary">Portfolio CMS Dashboard</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={20} /></button>
          </div>

          <div className="p-6 bg-accent-cyan/5 rounded-2xl border border-accent-cyan/10 space-y-4">
             <h3 className="text-sm font-bold text-accent-cyan flex items-center gap-2">
                <RefreshCcw size={16} /> Beta: Edit-in-Place Mode
             </h3>
             <p className="text-secondary text-sm leading-relaxed">
                You can now edit any text on the site directly. This is a local-only feature for previewing. To persist changes permanently:
             </p>
             <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                   <span className="text-xs font-medium text-secondary italic">"Change it without touching code."</span>
                   <Button variant="glow" size="sm" onClick={() => window.alert('Edit mode activated! Click any text to modify.')}>
                      Enable Edit Mode
                   </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                   <span className="text-xs font-medium text-secondary">Export Latest Changes</span>
                   <Button variant="outline" size="sm" className="gap-2">
                      <Download size={14} /> Download projects.json
                   </Button>
                </div>
             </div>
          </div>

          <div className="text-[10px] text-center font-mono opacity-30 text-secondary">
             ADMIN ACCESS AUTHORIZED BY RISHABH.DEV • {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
