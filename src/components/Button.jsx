import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    glow: "bg-transparent text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan/60 hover:bg-accent-cyan/5 shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
    outline: "border border-border/60 bg-transparent text-secondary hover:bg-card hover:text-primary hover:border-border",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-white/5",
  };

  const sizes = {
    default: "h-11 px-6 py-2 text-sm",
    lg: "h-14 px-10 text-base",
    sm: "h-9 px-4 text-xs",
    icon: "h-11 w-11"
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";
