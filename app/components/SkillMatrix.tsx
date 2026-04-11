'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// ── Types ─────────────────────────────────────────────────────────────────────
type Level = 'learning' | 'used' | 'comfortable' | 'advanced';
type Category = 'language' | 'framework' | 'styling' | 'state' | 'tooling';

interface Skill {
  name: string;
  level: Level;
  desc: string; // shown on hover
}

// ── Skill Data ────────────────────────────────────────────────────────────────
const SKILLS: Record<Category, Skill[]> = {
  language: [
    { name: 'TypeScript', level: 'comfortable', desc: 'Type-safe development, generics, utility types' },
    { name: 'JavaScript', level: 'comfortable',    desc: 'ES2022+, async/await, closures, event loop'    },
    { name: 'HTML5',      level: 'advanced',    desc: 'Semantic markup, accessibility, web APIs'       },
    { name: 'CSS3',       level: 'advanced',    desc: 'Custom properties, animations, grid & flex'     },
    { name: 'Python',     level: 'used',        desc: 'Scripting, basic data processing'               },
  ],
  framework: [
    { name: 'React',       level: 'comfortable',    desc: 'Hooks, context, suspense, concurrent features' },
    { name: 'Next.js',     level: 'advanced', desc: 'App Router, SSR/SSG, API routes, middleware'   },
    { name: 'Redux Toolkit',level: 'comfortable',desc: 'Slices, RTK Query, async thunks'               },
    { name: 'Framer Motion',level: 'used',       desc: 'Animations, transitions, gestures'             },
    { name: 'React Hook Form',level:'used',      desc: 'Performant forms with minimal re-renders'      },
  ],
  styling: [
    { name: 'Tailwind CSS', level: 'comfortable',    desc: 'Utility-first, custom design systems, v4'     },
    { name: 'shadcn/ui',    level: 'comfortable', desc: 'Accessible component primitives + Radix UI'   },
    { name: 'SCSS/Sass',    level: 'used',        desc: 'Nesting, mixins, variables'                   },
    { name: 'Styled Comp.', level: 'used',        desc: 'CSS-in-JS, theming'                           },
  ],
  state: [
    { name: 'Redux Toolkit', level: 'comfortable', desc: 'Global state, RTK Query for data fetching'   },
    { name: 'Zustand',       level: 'learning',    desc: 'Lightweight state management'                },
    { name: 'React Query',   level: 'used',        desc: 'Server state, caching, invalidation'         },
    { name: 'Zod',           level: 'learning',    desc: 'Schema validation, type inference'            },
  ],
  tooling: [
    { name: 'Git',      level: 'comfortable', desc: 'Branching, rebasing, conventional commits'  },
    { name: 'Vite',     level: 'comfortable', desc: 'Build tooling, HMR, plugin ecosystem'       },
    { name: 'Webpack',  level: 'used',        desc: 'Basic config, loaders, plugins'             },
    { name: 'ESLint',   level: 'comfortable', desc: 'Custom rule sets, lint-staged integration'  },
    { name: 'Vercel',   level: 'comfortable', desc: 'CI/CD, preview deploys, edge functions'     },
    { name: 'Figma',    level: 'used',        desc: 'Design handoff, prototyping, auto-layout'   },
  ],
};

const LEVEL_ORDER: Level[] = ['learning', 'used', 'comfortable', 'advanced'];

const LEVEL_COLOR: Record<Level, string> = {
  learning:   'bg-terminal-amber/40',
  used:       'bg-terminal-amber/70',
  comfortable:'bg-terminal-green/60',
  advanced:   'bg-terminal-green',
};

const LEVEL_TEXT: Record<Level, string> = {
  learning:   'text-terminal-amber/80',
  used:       'text-terminal-amber',
  comfortable:'text-terminal-green/80',
  advanced:   'text-terminal-green',
};

const CATEGORIES: Category[] = ['language', 'framework', 'styling', 'state', 'tooling'];

// ── Level bar (4 segments) ────────────────────────────────────────────────────
function LevelBar({ level }: { level: Level }) {
  const filled = LEVEL_ORDER.indexOf(level) + 1;
  return (
    <div className="flex items-center gap-0.5" aria-label={level}>
      {LEVEL_ORDER.map((_, i) => (
        <div
          key={i}
          className={[
            'h-1.5 w-4 rounded-sm transition-all duration-300',
            i < filled ? LEVEL_COLOR[level] : 'bg-[var(--border)]',
          ].join(' ')}
        />
      ))}
    </div>
  );
}

// ── Skill row ────────────────────────────────────────────────────────────────
function SkillRow({ skill, t }: { skill: Skill; t: ReturnType<typeof useTranslations> }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex items-center justify-between gap-4
                 px-3 py-2.5 rounded border border-transparent
                 hover:border-terminal-green/20 hover:bg-terminal-green/5
                 transition-all duration-150 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left: name + description */}
      <div className="min-w-0">
        <span className="text-sm text-[var(--fg)] font-medium">{skill.name}</span>
        {hovered && (
          <p className="text-[11px] text-[var(--muted)] mt-0.5 truncate max-w-xs">
            {skill.desc}
          </p>
        )}
      </div>

      {/* Right: level label + bar */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className={`hidden sm:block text-[10px] tracking-wide uppercase ${LEVEL_TEXT[skill.level]}`}>
          {t(`levels.${skill.level}`)}
        </span>
        <LevelBar level={skill.level} />
      </div>
    </div>
  );
}

// ── SkillMatrix ───────────────────────────────────────────────────────────────
export default function SkillMatrix() {
  const t = useTranslations('skills');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const visibleCategories = activeCategory === 'all'
    ? CATEGORIES
    : [activeCategory];

  const totalSkills = CATEGORIES.reduce((sum, cat) => sum + SKILLS[cat].length, 0);

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 font-[family-name:var(--font-space-mono)]"
    >
      <div className="max-w-4xl mx-auto">

        {/* Terminal header */}
        <div className="mb-10">
          <p className="text-xs text-[var(--muted)] mb-3">
            <span className="text-terminal-green">emirhan@dev</span>
            <span className="text-[var(--muted)]">:~$&nbsp;</span>
            <span className="text-[var(--fg)]">ls -la skills/</span>
          </p>
          <p className="text-[11px] tracking-[0.3em] text-terminal-green uppercase mb-2">
            {t('label')}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">
            {t('title')}
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">{t('subtitle')}</p>
        </div>

        {/* File-system stats line */}
        <div className="mb-6 text-xs text-[var(--muted)] border-b border-[var(--border)] pb-4">
          <span className="text-terminal-green">total {totalSkills}</span>
          <span className="ml-3">drwxr-xr-x&nbsp;&nbsp;{CATEGORIES.length} categories</span>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['all', ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                'px-3 py-1.5 text-xs rounded border transition-all duration-150',
                activeCategory === cat
                  ? 'border-terminal-green/60 text-terminal-green bg-terminal-green/10'
                  : 'border-[var(--border)] text-[var(--muted)] hover:border-terminal-green/30 hover:text-terminal-green/70',
              ].join(' ')}
            >
              {cat === 'all' ? './' : ''}
              {cat === 'all' ? 'all' : t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Skill groups */}
        <div className="space-y-8">
          {visibleCategories.map((cat) => (
            <div key={cat}>
              {/* Category header — ls style */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-terminal-amber text-xs">drwxr-xr-x</span>
                <span className="text-xs font-bold text-[var(--fg)] tracking-wide">
                  {t(`categories.${cat}`)}/
                </span>
                <span className="text-xs text-[var(--muted)]">
                  ({SKILLS[cat].length} files)
                </span>
              </div>

              {/* Skills */}
              <div className="pl-4 border-l border-terminal-green/15 space-y-0.5">
                {SKILLS[cat].map((skill) => (
                  <SkillRow key={skill.name} skill={skill} t={t} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)] mb-3">// legend</p>
          <div className="flex flex-wrap gap-4">
            {LEVEL_ORDER.map((level) => (
              <div key={level} className="flex items-center gap-2">
                <LevelBar level={level} />
                <span className={`text-[11px] ${LEVEL_TEXT[level]}`}>
                  {t(`levels.${level}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
