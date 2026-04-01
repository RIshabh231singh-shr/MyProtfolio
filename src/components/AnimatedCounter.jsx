import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * AnimatedCounter parses a string like "450+" or "1,150",
 * animates counting from 0 to the raw number when scrolled into view,
 * and maintains any suffix/prefix visually.
 */
export const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract numbers (including decimals) and non-numbers
  const strValue = String(value);
  const numberMatch = strValue.match(/([\d.]+)/);
  const isFloat = numberMatch && numberMatch[0].includes('.');
  
  const rawNumber = numberMatch ? parseFloat(numberMatch[0]) : 0;
  const prefix = strValue.split(numberMatch ? numberMatch[0] : '')[0] || ''; 
  const suffix = strValue.substring(prefix.length + (numberMatch ? numberMatch[0].length : 0));

  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let intervalId;

    const runAnimation = () => {
      // Reset to 0 instantly
      count.set(0);
      setDisplayValue(0);
      
      // Animate up to rawNumber
      animate(count, rawNumber, {
        duration: 3, // Faster animation
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(isFloat ? latest.toFixed(1) : Math.round(latest));
        }
      });
    };

    if (isInView) {
      runAnimation();
      
      // Re-run the animation every 30 seconds
      intervalId = setInterval(runAnimation, 10000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, rawNumber, count, isFloat]);

  return (
    <span ref={ref} className="inline-block relative">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
