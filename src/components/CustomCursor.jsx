import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 450 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        width: isHovering ? 60 : 12,
        height: isHovering ? 60 : 12,
        borderRadius: '50%',
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'white',
        border: isHovering ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
        pointerEvents: 'none',
        zIndex: 10000,
        translateX: '-50%',
        translateY: '-50%',
        mixBlendMode: isHovering ? 'normal' : 'difference',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250 }}
    />
  );
};

export default CustomCursor;
