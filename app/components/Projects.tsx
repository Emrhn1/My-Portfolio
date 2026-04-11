'use client';
import { useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { projects, type Project } from '../projects';
import SpotlightCard from './SpotLightCard';

// ── Terminal window chrome ────────────────────────────────────────────────────
function TerminalBar({ slug }: { slug: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-terminal-green/5 border-b border-terminal-green/20 flex-shrink-0">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
      </div>
      <span className="text-[10px] text-[var(--muted)] ml-1 font-[family-name:var(--font-space-mono)] truncate">
        ~/projects/{slug}
      </span>
    </div>
  );
}

// ── Single project card ───────────────────────────────────────────────────────
function ProjectCard({
  project,
  locale,
  t,
  featured = false,
}: {
  project: Project;
  locale: string;
  t: ReturnType<typeof useTranslations>;
  featured?: boolean;
}) {
  const href = `/${locale}/projects/${project.slug}`;
  const hasLive = project.liveUrl !== '#';

  return (
    <SpotlightCard className="flex flex-col h-full rounded-lg">
      <TerminalBar slug={project.slug} />

      {/* Image */}
      <Link href={href} className={`block relative overflow-hidden group ${featured ? 'h-52' : 'h-32'}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: 0.75 }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-crt-black/30 group-hover:bg-crt-black/10 transition-colors duration-300" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded
                          bg-terminal-green text-crt-black text-[9px] font-bold
                          font-[family-name:var(--font-space-mono)] tracking-wider">
            <Star size={8} />
            FEATURED
          </div>
        )}

        {/* Hover arrow */}
        <div className="absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight size={24} className="text-terminal-green drop-shadow-lg" />
        </div>
      </Link>

      {/* Content */}
      <Link href={href} className="flex-1 p-4 block space-y-2">
        <h3 className="text-sm font-bold text-[var(--fg)] font-[family-name:var(--font-space-mono)] leading-snug">
          {project.title}
        </h3>
        <p className={`text-xs text-[var(--muted)] leading-relaxed ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 pt-1">
          {project.tags.slice(0, featured ? project.tags.length : 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 text-[10px] rounded border border-terminal-green/20
                         text-terminal-green/80 bg-terminal-green/5
                         font-[family-name:var(--font-space-mono)]"
            >
              {tag}
            </span>
          ))}
          {!featured && project.tags.length > 3 && (
            <span className="px-1.5 py-0.5 text-[10px] text-[var(--muted)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-2 px-4 pb-3 pt-2 border-t border-terminal-green/10 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 rounded border border-[var(--border)] text-[var(--muted)]
                     hover:border-terminal-green/50 hover:text-terminal-green transition-all"
        >
          <Github size={12} />
        </a>
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded border border-[var(--border)] text-[var(--muted)]
                       hover:border-terminal-amber/50 hover:text-terminal-amber transition-all"
          >
            <ExternalLink size={12} />
          </a>
        )}
        <Link
          href={href}
          onClick={(e) => e.stopPropagation()}
          className="ml-auto flex items-center gap-1 text-[10px] text-[var(--muted)]
                     hover:text-terminal-green transition-colors
                     font-[family-name:var(--font-space-mono)]"
        >
          {t('viewDetails')}
          <ArrowRight size={10} />
        </Link>
      </div>
    </SpotlightCard>
  );
}

// ── Projects section ──────────────────────────────────────────────────────────
export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeTag, setActiveTag] = useState('all');

  const allTags = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => seen.add(tag)));
    return Array.from(seen);
  }, []);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const isFiltered = activeTag !== 'all';
  const filtered = projects.filter((p) =>
    p.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
  );

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 font-[family-name:var(--font-space-mono)]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Terminal header */}
        <div className="mb-10">
          <p className="text-xs text-[var(--muted)] mb-3">
            <span className="text-terminal-green">emirhan@dev</span>
            <span className="text-[var(--muted)]">:~$&nbsp;</span>
            <span className="text-[var(--fg)]">ls -la projects/</span>
          </p>
          <p className="text-[11px] tracking-[0.3em] text-terminal-green uppercase mb-2">
            {t('label')}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">{t('title')}</h2>
          <p className="text-sm text-[var(--muted)] mt-2 max-w-xl">{t('subtitle')}</p>
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag('all')}
            className={[
              'px-3 py-1.5 text-xs rounded border transition-all duration-150',
              activeTag === 'all'
                ? 'border-terminal-green/60 text-terminal-green bg-terminal-green/10'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-terminal-green/30 hover:text-terminal-green/70',
            ].join(' ')}
          >
            {t('filterAll')}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={[
                'px-3 py-1.5 text-xs rounded border transition-all duration-150',
                activeTag === tag
                  ? 'border-terminal-green/60 text-terminal-green bg-terminal-green/10'
                  : 'border-[var(--border)] text-[var(--muted)] hover:border-terminal-green/30 hover:text-terminal-green/70',
              ].join(' ')}
            >
              {tag}
            </button>
          ))}
        </div>

        {isFiltered ? (
          /* ── Filtered view — uniform grid ── */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.length === 0 ? (
              <p className="col-span-full text-sm text-[var(--muted)] py-8">
                <span className="text-terminal-amber">[WARN]</span>&nbsp;
                {t('noProjectsFound')}
              </p>
            ) : (
              filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} locale={locale} t={t} featured={!!p.featured} />
              ))
            )}
          </div>
        ) : (
          /* ── Default — asymmetric grid ── */
          <div className="space-y-5">
            {/* Featured row: 2 large cards */}
            {featured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-5">
                {featured.map((p) => (
                  <ProjectCard key={p.slug} project={p} locale={locale} t={t} featured />
                ))}
              </div>
            )}

            {/* Others: 4 compact cards in a tighter grid */}
            {others.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {others.map((p) => (
                  <ProjectCard key={p.slug} project={p} locale={locale} t={t} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
