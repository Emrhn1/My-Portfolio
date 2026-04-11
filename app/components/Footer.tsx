'use client';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/Emrhn1',                             label: 'GitHub'   },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/emirhan-erkan-0aa03424b/', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:oyuncut80@gmail.com',                            label: 'Email'    },
];

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-terminal-green/10 bg-[var(--bg)] font-[family-name:var(--font-space-mono)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Terminal build block */}
        <div className="p-4 rounded border border-terminal-green/20 bg-terminal-green/5 text-xs space-y-1">
          <p>
            <span className="text-terminal-green">emirhan@dev</span>
            <span className="text-[var(--muted)]">:~$&nbsp;</span>
            <span className="text-[var(--fg)]">build --status</span>
          </p>
          <p>
            <span className="text-terminal-green mr-2">[OK]</span>
            <span className="text-[var(--muted)]">Next.js 15 · Tailwind v4 · next-intl · Vercel</span>
          </p>
          <p>
            <span className="text-terminal-amber mr-2">[INFO]</span>
            <span className="text-[var(--muted)]">{t('madeWith')} — {year}</span>
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded border border-[var(--border)] text-[var(--muted)]
                           hover:border-terminal-green/50 hover:text-terminal-green transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--muted)]">
            © {year} Emirhan Erkan — {t('rights')}
          </p>
        </div>

      </div>
    </footer>
  );
}
