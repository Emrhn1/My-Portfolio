'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Github, Linkedin, Mail } from 'lucide-react';

// ── Code Rain ────────────────────────────────────────────────────────────────
const RAIN_CHARS = '01アイウエ<>{}[]()=>;+-*/:.'.split('');
const FONT_SIZE = 14;

function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || resolvedTheme !== 'dark') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = Math.floor(canvas.width / FONT_SIZE);
    const drops = new Array(cols).fill(1).map(() => Math.random() * -50);

    let animId: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      drops.forEach((y, i) => {
        const char = RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)];
        ctx.fillStyle = `rgba(0, 255, 65, ${0.15 + Math.random() * 0.2})`;
        ctx.fillText(char, i * FONT_SIZE, y * FONT_SIZE);

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted || resolvedTheme !== 'dark') return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.18 }}
      aria-hidden
    />
  );
}

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 65, startDelay = 900) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const outer = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(outer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const SOCIALS = [
  { icon: Github,   href: 'https://github.com/Emrhn1',                             label: 'GitHub'   },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/emirhan-erkan-0aa03424b/', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:oyuncut80@gmail.com',                            label: 'Email'    },
];

const METRICS = [
  { value: '06',   metricKey: 'projects' },
  { value: '12',   metricKey: 'stack'    },
  { value: '2022', metricKey: 'since'    },
] as const;

export default function Hero() {
  const t = useTranslations('hero');
  const { displayed, done } = useTypewriter(t('name'));

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-14
                 font-[family-name:var(--font-space-mono)]"
    >
      {/* Falling code background */}
      <CodeRain />

      {/* Vignette — keeps text readable over code rain */}
      <div className="absolute inset-0 pointer-events-none
                      bg-gradient-to-b from-[var(--bg)]/70 via-[var(--bg)]/30 to-[var(--bg)]/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full py-20">

        {/* Prompt line */}
        <p className="flex items-center gap-1.5 text-xs text-[var(--muted)] mb-8">
          <span className="text-terminal-green">emirhan@dev</span>
          <span>:~$</span>
          <span className="text-[var(--fg)]">whoami</span>
          <span className="ml-1 w-2 h-[0.9em] bg-terminal-green/60 animate-cursor-blink inline-block align-middle" />
        </p>

        {/* Role */}
        <p className="text-[11px] tracking-[0.35em] text-terminal-green uppercase mb-4">
          {t('role')}
        </p>

        {/* Greeting */}
        <p className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-2">
          {t('greeting')}
        </p>

        {/* Name — typing animation */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--fg)] mb-8 min-h-[1.3em]">
          {displayed}
          <span
            className={[
              'inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-terminal-green',
              done ? 'animate-cursor-blink' : 'opacity-100',
            ].join(' ')}
          />
        </h1>

        {/* Bio */}
        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg mb-10">
          {t('bio')}
        </p>

        {/* CTA buttons — terminal style */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => scrollTo('projects')}
            className="group flex items-center gap-2 px-5 py-2.5 text-sm rounded
                       border border-terminal-green/40 text-terminal-green
                       hover:bg-terminal-green/10 hover:border-terminal-green
                       transition-all duration-200"
          >
            <span className="text-terminal-green/50 group-hover:text-terminal-green transition-colors">
              &gt;
            </span>
            ./projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group flex items-center gap-2 px-5 py-2.5 text-sm rounded
                       border border-[var(--border)] text-[var(--muted)]
                       hover:border-terminal-amber/50 hover:text-terminal-amber
                       transition-all duration-200"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-terminal-amber">
              &gt;
            </span>
            ./contact
          </button>
        </div>

        {/* Metrics band */}
        <div className="flex w-fit mb-10 rounded border border-terminal-green/20 overflow-hidden">
          {METRICS.map(({ value, metricKey }, i) => (
            <div
              key={metricKey}
              className={[
                'px-6 py-3 bg-terminal-green/5 hover:bg-terminal-green/10 transition-colors',
                i < METRICS.length - 1 ? 'border-r border-terminal-green/20' : '',
              ].join(' ')}
            >
              <p className="text-xl font-bold text-terminal-green leading-none">
                {value}
              </p>
              <p className="text-[10px] text-[var(--muted)] mt-1 tracking-widest uppercase">
                {t(`metrics.${metricKey}`)}
              </p>
            </div>
          ))}
        </div>

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
                         hover:border-terminal-green/50 hover:text-terminal-green
                         transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
