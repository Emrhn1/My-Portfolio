'use client';
import { useTranslations } from 'next-intl';
import { MapPin, GraduationCap, Briefcase, Code2, Wifi } from 'lucide-react';

const STACK = ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'];

export default function About() {
  const t = useTranslations('about');

  const timeline = [
    {
      year: '2024',
      icon: Code2,
      title: 'Frontend Dev',
      detail: 'React · Next.js · TypeScript · Tailwind',
    },
    {
      year: '2025',
      icon: Briefcase,
      title: t('experience'),
      detail: 'Freelance · Junior Frontend',
    },
     {
      year: '2026',
      icon: GraduationCap,
      title: t('education'),
      detail: 'Iğdır Üniversitesi — Bilgisayar Müh.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 font-[family-name:var(--font-space-mono)]"
    >
      <div className="max-w-4xl mx-auto">

        {/* Terminal header */}
        <div className="mb-10">
          <p className="text-xs text-[var(--muted)] mb-3">
            <span className="text-terminal-green">emirhan@dev</span>
            <span className="text-[var(--muted)]">:~$&nbsp;</span>
            <span className="text-[var(--fg)]">cat about.md</span>
          </p>
          <p className="text-xs text-[var(--muted)] mb-1 uppercase tracking-widest">
            {t('label')}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left — bio + badges */}
          <div className="space-y-5">
            {/* Bio card */}
            <div className="p-5 rounded border border-terminal-green/20 bg-terminal-green/5 space-y-4">
              <p className="text-sm text-[var(--fg)] leading-relaxed">
                {t('bio')}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                <MapPin size={12} className="text-terminal-green flex-shrink-0" />
                <span>{t('location')}</span>
              </div>
            </div>

            {/* Available for work */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-terminal-green/40 bg-terminal-green/10 text-xs text-terminal-green">
                <Wifi size={11} />
                {t('availableForWork')}
              </span>
            </div>

            {/* Quick stack */}
            <div className="space-y-2">
              <p className="text-xs text-terminal-amber">// stack</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 text-xs rounded border border-[var(--border)]
                               text-[var(--muted)] hover:border-terminal-green/40
                               hover:text-terminal-green transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="space-y-4">
            <p className="text-xs text-terminal-amber">// timeline</p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[3.25rem] top-2 bottom-2 w-px bg-terminal-green/20" />

              <div className="space-y-0">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start pb-7 last:pb-0">
                      {/* Year */}
                      <div className="w-10 flex-shrink-0 text-right text-xs text-[var(--muted)] pt-0.5 leading-none">
                        {item.year}
                      </div>

                      {/* Dot */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-6 h-6 rounded-full border border-terminal-green/50 bg-[var(--bg)] flex items-center justify-center">
                          <Icon size={11} className="text-terminal-green" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <p className="text-sm font-bold text-[var(--fg)] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-xs text-[var(--muted)] mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
