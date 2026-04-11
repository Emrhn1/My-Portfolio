'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Github, ExternalLink, ArrowLeft,
  ShoppingCart, CreditCard, Truck, Package, ShieldCheck, TrendingUp,
  Bell, Lock, Grid3X3, SlidersHorizontal, FileText, Sparkles,
  BarChart2, PieChart, ClipboardList, Filter, Sun,
  Globe, Clock, Trophy, ZoomIn,
  Monitor, Bookmark, ShoppingBag, DollarSign,
  type LucideProps,
} from 'lucide-react';
import TiltCard from '@/app/components/TiltCard';
import type { Project } from '@/app/projects';

// ── Icon name → component map ─────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  ShoppingCart, CreditCard, Truck, Package, ShieldCheck, TrendingUp,
  Bell, Lock, Grid3X3, SlidersHorizontal, FileText, Sparkles,
  BarChart2, PieChart, ClipboardList, Filter, Sun,
  Globe, Clock, Trophy, ZoomIn,
  Monitor, Bookmark, ShoppingBag, DollarSign,
};

// ── Terminal window chrome ────────────────────────────────────────────────────
function TerminalBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-terminal-green/5 border-b border-terminal-green/20">
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
      </div>
      <span className="text-xs text-[var(--muted)] ml-2 font-[family-name:var(--font-space-mono)] truncate">
        ~/projects/{title}
      </span>
    </div>
  );
}

// ── Feature card ──────────────────────────────────────────────────────────────
function FeatureCard({
  iconName,
  title,
  desc,
}: {
  iconName: string;
  title: string;
  desc: string;
}) {
  const Icon = ICON_MAP[iconName];
  return (
    <TiltCard>
      <div className="p-5 rounded-lg border border-terminal-green/20 bg-terminal-green/5
                      hover:border-terminal-green/40 hover:bg-terminal-green/10
                      transition-colors duration-200 h-full">
        <div className="w-9 h-9 rounded border border-terminal-green/30 flex items-center justify-center mb-4">
          {Icon && <Icon size={18} className="text-terminal-green" />}
        </div>
        <h3 className="text-sm font-bold text-[var(--fg)] mb-2">{title}</h3>
        <p className="text-xs text-[var(--muted)] leading-relaxed">{desc}</p>
      </div>
    </TiltCard>
  );
}

// ── Main client component ─────────────────────────────────────────────────────
export default function ProjectDetailClient({ project }: { project: Project }) {
  const t = useTranslations('projectDetail');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-14 font-[family-name:var(--font-space-mono)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* Back link */}
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 mb-8 text-xs text-[var(--muted)]
                     hover:text-terminal-green transition-colors group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-terminal-green">&gt;&nbsp;</span>
          {t('backToProjects')}
        </Link>

        {/* Breadcrumb prompt */}
        <p className="text-xs text-[var(--muted)] mb-8">
          <span className="text-terminal-green">emirhan@dev</span>
          <span>:~/projects$&nbsp;</span>
          <span className="text-[var(--fg)]">cat {project.slug}/README.md</span>
        </p>

        {/* Hero image — terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-terminal-green/20 overflow-hidden mb-12"
        >
          <TerminalBar title={project.slug} />
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              loading="eager"
              decoding="async"
              className="w-full h-[260px] md:h-[420px] object-cover"
              style={{ opacity: 0.85 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crt-black/60 to-transparent" />
          </div>
        </motion.div>

        {/* Title + meta + actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-[var(--fg)] leading-tight mb-2">
                {project.title}
              </h1>
              <p className="text-xs text-[var(--muted)]">
                <span className="text-terminal-amber">[{project.date}]</span>
                &nbsp;·&nbsp;{project.tags.length} technologies
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs rounded border border-[var(--border)]
                           text-[var(--muted)] hover:border-terminal-green/50 hover:text-terminal-green
                           transition-all"
              >
                <Github size={13} />
                {t('viewCode')}
              </a>
              {project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs rounded border
                             border-terminal-green/40 text-terminal-green bg-terminal-green/10
                             hover:bg-terminal-green/20 transition-all"
                >
                  <ExternalLink size={13} />
                  {t('visitSite')}
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* About + Tech stack */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 mb-16">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-terminal-amber mb-3">// {t('about')}</p>
            <p className="text-sm text-[var(--muted)] leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs text-terminal-amber mb-3">// {t('technologies')}</p>
            <div className="space-y-2">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2.5 px-3 py-2 rounded border border-terminal-green/20
                             bg-terminal-green/5 text-sm text-[var(--fg)]
                             hover:border-terminal-green/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-terminal-green flex-shrink-0" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-terminal-amber mb-2">// {t('features')}</p>
          <div className={`grid gap-4 mt-6 ${
            project.features.length <= 4
              ? 'sm:grid-cols-2'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {project.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <FeatureCard iconName={feat.iconName} title={feat.title} desc={feat.desc} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
