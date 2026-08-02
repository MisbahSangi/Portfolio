'use client';
import { SKILLS } from '@/data/projects';
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn';

const ICONS: Record<string, JSX.Element> = {
  Mobile:    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  Frontend:  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 17 22 12"/></svg>,
  Backend:   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  'AI / ML': <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  Databases: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  DevOps:    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
};

const ACCENT_COLORS: Record<string, string> = {
  Mobile:    'border-blue-500/20 hover:border-blue-500/40 dark:border-blue-500/30 dark:hover:border-blue-400/60',
  Frontend:  'border-violet-500/20 hover:border-violet-500/40 dark:border-violet-500/30 dark:hover:border-violet-400/60',
  Backend:   'border-emerald-500/20 hover:border-emerald-500/40 dark:border-emerald-500/30 dark:hover:border-emerald-400/60',
  'AI / ML': 'border-amber-500/20 hover:border-amber-500/40 dark:border-amber-500/30 dark:hover:border-amber-400/60',
  Databases: 'border-cyan-500/20 hover:border-cyan-500/40 dark:border-cyan-500/30 dark:hover:border-cyan-400/60',
  DevOps:    'border-rose-500/20 hover:border-rose-500/40 dark:border-rose-500/30 dark:hover:border-rose-400/60',
};

const ICON_COLORS: Record<string, string> = {
  Mobile:    'text-blue-600 dark:text-blue-400 bg-blue-500/10',
  Frontend:  'text-violet-600 dark:text-violet-400 bg-violet-500/10',
  Backend:   'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
  'AI / ML': 'text-amber-600 dark:text-amber-400 bg-amber-500/10',
  Databases: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
  DevOps:    'text-rose-600 dark:text-rose-400 bg-rose-500/10',
};

const TAG_COLORS: Record<string, string> = {
  Mobile:    'border-blue-500/20 text-blue-700 dark:text-blue-300 bg-blue-500/5',
  Frontend:  'border-violet-500/20 text-violet-700 dark:text-violet-300 bg-violet-500/5',
  Backend:   'border-emerald-500/20 text-emerald-700 dark:text-emerald-300 bg-emerald-500/5',
  'AI / ML': 'border-amber-500/20 text-amber-700 dark:text-amber-300 bg-amber-500/5',
  Databases: 'border-cyan-500/20 text-cyan-700 dark:text-cyan-300 bg-cyan-500/5',
  DevOps:    'border-rose-500/20 text-rose-700 dark:text-rose-300 bg-rose-500/5',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <AnimateIn variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">Capabilities</p>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
                Technical <span className="font-semibold">Arsenal.</span>
              </h2>
            </div>
            <p className="text-muted max-w-sm text-lg font-light leading-relaxed">
              A diverse stack spanning mobile, web, backend, AI/ML, and DevOps.
            </p>
          </div>
        </AnimateIn>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
          {SKILLS.map((group) => {
            const icon = ICONS[group.category] || ICONS.Backend;
            const accentBorder = ACCENT_COLORS[group.category] || ACCENT_COLORS.Backend;
            const iconColor = ICON_COLORS[group.category] || ICON_COLORS.Backend;
            const tagColor = TAG_COLORS[group.category] || TAG_COLORS.Backend;

            return (
              <StaggerItem key={group.category}>
                <div
                  className={`relative h-full rounded-2xl border ${accentBorder} bg-surface/80 backdrop-blur-md p-7 transition-all duration-500 group overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1`}
                >
                  {/* Subtle glow background */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-foreground/[0.02] to-transparent pointer-events-none" />

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColor} transition-all duration-500 group-hover:scale-110 shadow-xs`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground tracking-tight">
                        {group.category}
                      </h3>
                      <p className="text-xs text-muted font-mono">{group.items.length} technologies</p>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-300 hover:scale-105 ${tagColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
