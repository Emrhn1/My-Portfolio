// app/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          // Dark mode colors
          primary: { main: '#3b82f6' },
          secondary: { main: '#8b5cf6' },
          background: { default: '#0f172a', paper: '#1e293b' },
          text: { primary: '#ffffff', secondary: '#94a3b8' },
        }
      : {
          // Light mode colors
          primary: { main: '#2563eb' },
          secondary: { main: '#7c3aed' },
          background: { default: '#ffffff', paper: '#f8fafc' }, // Daha temiz beyaz/açık gri
          text: { primary: '#1e293b', secondary: '#475569' },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});