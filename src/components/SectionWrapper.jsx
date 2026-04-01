import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const SectionWrapper = ({ id, children, className, title, subtitle }) => {
  return (
    <section id={id} className={cn("py-12 md:py-16 relative w-full", className)}>
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 flex flex-col items-start gap-4">
            {subtitle && (
               <motion.span 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5 }}
                 className="text-accent-cyan font-mono text-sm font-semibold tracking-widest uppercase flex items-center gap-2"
               >
                 <span className="w-8 h-[1px] bg-accent-cyan/30"></span>
                 {subtitle}
               </motion.span>
            )}
            {title && (
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 className="text-4xl md:text-6xl font-extrabold tracking-tighter font-heading bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
               >
                 {title}
               </motion.h2>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};
