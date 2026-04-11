'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Sun, Moon, Download, Search } from 'lucide-react';
import { useOpenCommandPalette } from './CommandPaletteProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const openPalette = useOpenCommandPalette();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = resolvedTheme === 'dark';

  const menuItems = [
    { key: 'about',    label: t('about'),    sectionId: 'about'    },
    { key: 'skills',   label: t('skills'),   sectionId: 'skills'   },
    { key: 'projects', label: t('projects'), sectionId: 'projects' },
    { key: 'contact',  label: t('contact'),  sectionId: 'contact'  },
  ];

  const scrollToSection = (sectionId: string) => {
    const localizedHome = `/${locale}`;
    if (pathname !== localizedHome && pathname !== '/') {
      router.push(`${localizedHome}#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const switchLocale = () => {
    const next = locale === 'tr' ? 'en' : 'tr';
    router.push(pathname.replace(`/${locale}`, `/${next}`));
  };

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'font-[family-name:var(--font-space-mono)]',
        scrolled
          ? 'border-b border-terminal-green/20 backdrop-blur-xl'
            + (isDark ? ' bg-crt-black/90' : ' bg-white/90')
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo — terminal prompt */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-0 text-sm font-bold select-none"
          >
            <span className="text-terminal-green">emirhan</span>
            <span className="text-[var(--muted)]">@dev:~$</span>
            <span className="ml-1 w-2 h-[1em] bg-terminal-green animate-cursor-blink inline-block align-middle" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.sectionId)}
                className="group px-3 py-1.5 text-xs text-[var(--muted)] hover:text-terminal-green transition-colors"
              >
                <span className="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">&gt;&nbsp;</span>
                {item.label}
              </button>
            ))}

            <span className="mx-2 text-[var(--muted)] opacity-30 select-none">│</span>

            {/* Command palette trigger */}
            <button
              onClick={openPalette}
              title="⌘K"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[var(--border)]
                         text-xs text-[var(--muted)] hover:border-terminal-green/40 hover:text-terminal-green
                         transition-all"
            >
              <Search size={11} />
              <kbd className="text-[9px] opacity-60">⌘K</kbd>
            </button>

            {/* CV download */}
            <a
              href="/emirhan-erkan.pdf"
              download
              title={t('downloadCV')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--muted)]
                         hover:text-terminal-amber border border-transparent
                         hover:border-terminal-amber/40 rounded transition-all duration-200"
            >
              <Download size={11} />
              CV
            </a>

            {/* Language switcher */}
            <button
              onClick={switchLocale}
              title={t('switchLanguage')}
              className="px-2 py-1.5 text-xs font-bold text-[var(--muted)] hover:text-terminal-green
                         transition-colors border border-transparent hover:border-terminal-green/30 rounded"
            >
              {locale === 'tr' ? 'EN' : 'TR'}
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                title={t('toggleTheme')}
                className="p-1.5 text-[var(--muted)] hover:text-terminal-green transition-colors"
              >
                {isDark ? <Sun size={13} /> : <Moon size={13} />}
              </button>
            )}
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            {/* ⌘K trigger (mobile) */}
            <button
              onClick={openPalette}
              aria-label="Search"
              className="p-1.5 text-[var(--muted)] hover:text-terminal-green transition-colors"
            >
              <Search size={14} />
            </button>
            <button
              onClick={switchLocale}
              className="px-2 py-1 text-xs font-bold text-[var(--muted)] hover:text-terminal-green transition-colors"
            >
              {locale === 'tr' ? 'EN' : 'TR'}
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="p-1.5 text-[var(--muted)] hover:text-terminal-green transition-colors"
              >
                {isDark ? <Sun size={13} /> : <Moon size={13} />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
              className="p-1.5 text-[var(--muted)] hover:text-terminal-green transition-colors"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className={[
              'md:hidden mt-1 mb-2 rounded border border-terminal-green/20 p-3',
              'backdrop-blur-xl',
              isDark ? 'bg-crt-black/95' : 'bg-white/95',
            ].join(' ')}
          >
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left px-3 py-2.5 text-xs text-[var(--muted)]
                           hover:text-terminal-green hover:bg-terminal-green/5 rounded transition-all"
              >
                <span className="text-terminal-green mr-2">&gt;</span>
                {item.label}
              </button>
            ))}
            <div className="mt-2 pt-2 border-t border-terminal-green/20">
              <a
                href="/emirhan-erkan.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-[var(--muted)]
                           hover:text-terminal-amber transition-colors"
              >
                <Download size={11} />
                {t('downloadCV')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
