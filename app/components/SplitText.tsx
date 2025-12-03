// app/components/SplitText.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  type Variants,
  type Transition,
} from 'framer-motion';

type RootMargin = NonNullable<Parameters<typeof useInView>[1]>['margin'];

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>;
  easing?: number[];
  threshold?: number;
  rootMargin?: RootMargin;
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
  rootMargin = '-100px' as RootMargin,
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

  const letterTransition: Transition = {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  };

  const child: Variants = {
    hidden: {
      opacity: animationFrom.opacity ?? 0,
      y: animationFrom.y ?? 20,
      transition: letterTransition,
    },
    visible: {
      opacity: animationTo.opacity ?? 1,
      y: animationTo.y ?? 0,
      transition: letterTransition,
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
      onAnimationComplete={onLetterAnimationComplete}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;