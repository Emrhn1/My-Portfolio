'use client';
import { useEffect, useCallback, useState, useRef } from 'react';
import { Command } from 'cmdk';
import { Drawer } from 'vaul';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl';
import {
  Home, User, Layers, Mail, FileText, Sun, Moon, Languages,
  Download, Github, Linkedin, Send, Terminal, Search, X,
} from 'lucide-react';
import { projects } from '@/app/projects';

// ── Types ─────────────────────────────────────────────────────────────────────
interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  group: 'navigation' | 'projects' | 'actions' | 'external';
  onSelect: () => void;
  keywords?: string[];
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === '/' && document.activeElement === document.body) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return { open, setOpen };
}

// ── Shared command list builder ───────────────────────────────────────────────
function useCommands(onClose: () => void): CommandItem[] {
  const t = useTranslations('commandPalette');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { resolvedTheme, setTheme } = useTheme();

  const scrollTo = useCallback(
    (sectionId: string) => {
      const home = `/${locale}`;
      if (pathname !== home) {
        router.push(`${home}#${sectionId}`);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
      onClose();
    },
    [locale, pathname, router, onClose],
  );

  const switchLocale = useCallback(() => {
    const next = locale === 'tr' ? 'en' : 'tr';
    router.push(pathname.replace(`/${locale}`, `/${next}`));
    onClose();
  }, [locale, pathname, router, onClose]);

  const navItems: CommandItem[] = [
    {
      id: 'nav-home',
      label: t('actions.goHome'),
      icon: <Home size={13} />,
      group: 'navigation',
      onSelect: () => scrollTo('hero'),
    },
    {
      id: 'nav-about',
      label: t('actions.goAbout'),
      icon: <User size={13} />,
      group: 'navigation',
      onSelect: () => scrollTo('about'),
    },
    {
      id: 'nav-projects',
      label: t('actions.goProjects'),
      icon: <Layers size={13} />,
      group: 'navigation',
      onSelect: () => scrollTo('projects'),
    },
    {
      id: 'nav-contact',
      label: t('actions.goContact'),
      icon: <Mail size={13} />,
      group: 'navigation',
      onSelect: () => scrollTo('contact'),
    },
  ];

  const projectItems: CommandItem[] = projects.map((p) => ({
    id: `project-${p.slug}`,
    label: p.title,
    icon: <Terminal size={13} />,
    group: 'projects',
    keywords: p.tags,
    onSelect: () => {
      router.push(`/${locale}/projects/${p.slug}`);
      onClose();
    },
  }));

  const actionItems: CommandItem[] = [
    {
      id: 'action-theme',
      label: t('actions.toggleTheme'),
      icon: resolvedTheme === 'dark' ? <Sun size={13} /> : <Moon size={13} />,
      group: 'actions',
      onSelect: () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        onClose();
      },
    },
    {
      id: 'action-lang',
      label: t('actions.switchLanguage'),
      icon: <Languages size={13} />,
      group: 'actions',
      onSelect: switchLocale,
    },
    {
      id: 'action-cv',
      label: t('actions.downloadCV'),
      icon: <Download size={13} />,
      group: 'actions',
      onSelect: () => {
        const a = document.createElement('a');
        a.href = '/cv.pdf';
        a.download = 'cv.pdf';
        a.click();
        onClose();
      },
    },
  ];

  const externalItems: CommandItem[] = [
    {
      id: 'ext-github',
      label: t('actions.github'),
      icon: <Github size={13} />,
      group: 'external',
      onSelect: () => {
        window.open('https://github.com/Emrhn1', '_blank', 'noopener');
        onClose();
      },
    },
    {
      id: 'ext-linkedin',
      label: t('actions.linkedin'),
      icon: <Linkedin size={13} />,
      group: 'external',
      onSelect: () => {
        window.open('https://linkedin.com/in/emirhanerkan', '_blank', 'noopener');
        onClose();
      },
    },
    {
      id: 'ext-email',
      label: t('actions.email'),
      icon: <Send size={13} />,
      group: 'external',
      onSelect: () => {
        window.location.href = 'mailto:emirhan@example.com';
        onClose();
      },
    },
  ];

  return [...navItems, ...projectItems, ...actionItems, ...externalItems];
}

// ── Group label component ─────────────────────────────────────────────────────
function GroupLabel({ label }: { label: string }) {
  return (
    <div className="px-3 py-1.5 text-[9px] tracking-[0.25em] text-terminal-green/60 uppercase
                    font-[family-name:var(--font-space-mono)] border-b border-terminal-green/10 mb-1">
      {label}
    </div>
  );
}

// ── Command item component ────────────────────────────────────────────────────
function CmdItem({ item }: { item: CommandItem }) {
  return (
    <Command.Item
      key={item.id}
      value={`${item.label} ${item.keywords?.join(' ') ?? ''}`}
      onSelect={item.onSelect}
      className="flex items-center gap-2.5 px-3 py-2 mx-1 rounded text-xs text-[var(--muted)]
                 cursor-pointer transition-colors duration-100
                 data-[selected=true]:bg-terminal-green/10 data-[selected=true]:text-terminal-green
                 hover:bg-terminal-green/10 hover:text-terminal-green
                 font-[family-name:var(--font-space-mono)]"
    >
      <span className="text-terminal-green/60 flex-shrink-0">{item.icon}</span>
      <span className="truncate">{item.label}</span>
    </Command.Item>
  );
}

// ── Inner palette (shared between dialog and drawer) ─────────────────────────
function PaletteContent({ onClose }: { onClose: () => void }) {
  const t = useTranslations('commandPalette');
  const items = useCommands(onClose);

  const groups: Array<{ key: CommandItem['group']; label: string }> = [
    { key: 'navigation', label: t('groups.navigation') },
    { key: 'projects',   label: t('groups.projects')   },
    { key: 'actions',    label: t('groups.actions')     },
    { key: 'external',   label: t('groups.external')    },
  ];

  return (
    <Command
      loop
      className="flex flex-col bg-[var(--bg)] border border-terminal-green/25 rounded-lg
                 overflow-hidden shadow-2xl shadow-black/60 w-full
                 font-[family-name:var(--font-space-mono)]"
    >
      {/* Search input */}
      <div className="flex items-center gap-2 px-3 py-3 border-b border-terminal-green/20">
        <Search size={12} className="text-terminal-green/60 flex-shrink-0" />
        <Command.Input
          autoFocus
          placeholder={t('placeholder')}
          className="flex-1 bg-transparent text-xs text-[var(--fg)] placeholder:text-[var(--muted)]
                     outline-none caret-terminal-green"
        />
        <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded border
                        border-terminal-green/20 text-[9px] text-[var(--muted)]">
          ESC
        </kbd>
      </div>

      {/* Results */}
      <Command.List className="overflow-y-auto max-h-[360px] py-2">
        <Command.Empty className="py-8 text-center text-xs text-[var(--muted)]">
          <span className="text-terminal-amber">[NULL]</span>&nbsp;{t('noResults')}
        </Command.Empty>

        {groups.map(({ key, label }) => {
          const groupItems = items.filter((i) => i.group === key);
          if (groupItems.length === 0) return null;
          return (
            <Command.Group key={key}>
              <GroupLabel label={label} />
              {groupItems.map((item) => (
                <CmdItem key={item.id} item={item} />
              ))}
            </Command.Group>
          );
        })}
      </Command.List>

      {/* Footer */}
      <div className="border-t border-terminal-green/10 px-3 py-2 flex items-center gap-3
                      text-[9px] text-[var(--muted)]">
        <span><kbd className="mr-1 font-bold">↑↓</kbd>Gezin</span>
        <span><kbd className="mr-1 font-bold">↵</kbd>Seç</span>
        <span><kbd className="mr-1 font-bold">ESC</kbd>Kapat</span>
        <span className="ml-auto text-terminal-green/40">⌘K</span>
      </div>
    </Command>
  );
}

// ── Desktop: cmdk dialog ──────────────────────────────────────────────────────
function DesktopPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <PaletteContent onClose={onClose} />
      </div>
    </div>
  );
}

// ── Mobile: vaul drawer ───────────────────────────────────────────────────────
function MobilePalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Drawer.Root open={open} onOpenChange={(v) => !v && onClose()} shouldScaleBackground>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
        <Drawer.Content
          className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col rounded-t-xl
                     border-t border-terminal-green/20 bg-[var(--bg)] max-h-[85vh]"
        >
          {/* Drag handle */}
          <div className="mx-auto mt-3 mb-2 h-1.5 w-10 rounded-full bg-terminal-green/20" />

          {/* Close row */}
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[10px] text-terminal-green/60 font-[family-name:var(--font-space-mono)] tracking-widest">
              COMMAND PALETTE
            </span>
            <button onClick={onClose} className="p-1 text-[var(--muted)] hover:text-terminal-green transition-colors">
              <X size={14} />
            </button>
          </div>

          <div className="px-2 pb-6 overflow-y-auto">
            <PaletteContent onClose={onClose} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return <MobilePalette open={open} onClose={onClose} />;
  }
  return <DesktopPalette open={open} onClose={onClose} />;
}

// ── Trigger button (for Navbar) ───────────────────────────────────────────────
export function CommandPaletteTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title="⌘K"
      className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[var(--border)]
                 text-xs text-[var(--muted)] hover:border-terminal-green/40 hover:text-terminal-green
                 transition-all font-[family-name:var(--font-space-mono)]"
    >
      <Search size={11} />
      <kbd className="text-[9px] opacity-60">⌘K</kbd>
    </button>
  );
}
