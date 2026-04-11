'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import CommandPalette from './CommandPalette';

// ── Context ───────────────────────────────────────────────────────────────────
const Ctx = createContext<{ open: () => void } | null>(null);

export function useOpenCommandPalette() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useOpenCommandPalette must be used inside CommandPaletteProvider');
  return ctx.open;
}

// ── Provider ──────────────────────────────────────────────────────────────────
export default function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      // '/' only when not focused on an input/textarea
      if (
        e.key === '/' &&
        !(document.activeElement instanceof HTMLInputElement) &&
        !(document.activeElement instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <Ctx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <CommandPalette open={isOpen} onClose={() => setIsOpen(false)} />
    </Ctx.Provider>
  );
}
