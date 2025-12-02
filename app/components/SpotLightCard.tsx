// app/components/SpotlightCard.tsx
'use client';
import { useRef, useState, MouseEvent } from 'react';
import { Box, useTheme } from '@mui/material';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(59, 130, 246, 0.25)" }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const theme = useTheme();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Box
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 3,
        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        background: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.5)' : '#ffffff',
        boxShadow: theme.palette.mode === 'light' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
        }
      }}
    >
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          transition: "opacity 0.3s",
          inset: -1,
          zIndex: 10,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 20, height: '100%' }}>
        {children}
      </Box>
    </Box>
  );
}