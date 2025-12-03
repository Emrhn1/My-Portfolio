// app/components/SplitText.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>;
  easing?: number[];
  threshold?: number;
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  delay = 50,
  animationFrom = { opacity: 0, y: 20 },
  animationTo = { opacity: 1, y: 0 },
  easing = [0.42, 0, 0.58, 1],
  threshold = 0.1,
  rootMargin = '-100px',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: rootMargin });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: animationTo.opacity ?? 1,
      y: animationTo.y ?? 0,
      transition: {
        type: 'spring' as const, // ✅ 'as const' eklendi
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: animationFrom.opacity ?? 0,
      y: animationFrom.y ?? 20,
      transition: {
        type: 'spring' as const, // ✅ 'as const' eklendi
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      onAnimationComplete={() => {
        if (onLetterAnimationComplete) {
          onLetterAnimationComplete();
        }
      }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;