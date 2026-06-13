'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const getVariants = () => {
    const offset = 40;
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } };
      case 'none':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
