import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Card = ({ children, className, hover = true, delay = 0, variant = "default" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        variant === "default" ? "glass" : "glass-lighter",
        "p-6 sm:p-8 relative group overflow-hidden",
        hover && "glow-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
