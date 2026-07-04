'use client';
import Image from 'next/image';
import { PERSONAL, IMAGES, STATS, LINKS } from '@/data/config';
import { EXPERIENCE } from '@/data/projects';
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <AnimateIn>
          <p className="text-sm font-medium text-accent mb-4 tracking-wide">About Me</p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Photo & Stats — takes 5 of 12 columns */}
          <div className="lg:col-span-5 space-y-8">
            <AnimateIn variant="fade-up" delay={0.1}>
              {/* Premium Editorial Photo Layout */}
              <div className="group relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-surface">
                {/* Subtle overlay to soften the image slightly until hovered */}
                <div className="absolute inset-0 bg-background/10 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <Image
                  src={IMAGES.profile}
                  alt={PERSONAL.name}
                  fill
                  className="object-cover object-center grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  priority
                />
                
                {/* Corner accent bracket - top left */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-foreground/30 z-20 pointer-events-none transition-all duration-500 group-hover:border-accent group-hover:-translate-x-1 group-hover:-translate-y-1" />
                
                {/* Corner accent bracket - bottom right */}
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-foreground/30 z-20 pointer-events-none transition-all duration-500 group-hover:border-accent group-hover:translate-x-1 group-hover:translate-y-1" />
              </div>
            </AnimateIn>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 gap-px bg-border" staggerDelay={0.1}>
              {STATS.map(s => (
                <StaggerItem key={s.label}>
                  <div className="bg-background py-6 px-4 text-center hover:bg-surface transition-colors h-full">
                    <div className="font-light tracking-tight text-3xl text-foreground mb-1">{s.value}</div>
                    <div className="text-xs font-medium text-muted uppercase tracking-widest">{s.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Text — takes 7 of 12 columns */}
          <div className="lg:col-span-7">
            <AnimateIn variant="fade-up" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl font-light leading-tight tracking-tight mb-8">
                I build software that <br className="hidden sm:block" />
                <span className="font-semibold text-foreground">actually ships.</span>
              </h2>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={0.3}>
              <div className="space-y-6 text-muted leading-relaxed mb-12 text-lg">
                {PERSONAL.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimateIn>

            {/* Education */}
            <AnimateIn variant="fade-up" delay={0.4}>
              <div className="border-l-2 border-border pl-6 mb-10">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Education</p>
                <p className="text-xl font-medium text-foreground mb-1">{PERSONAL.degree}</p>
                <p className="text-muted">{PERSONAL.university}</p>
                <p className="text-sm text-accent mt-2 font-mono">{PERSONAL.year} · CGPA: {PERSONAL.cgpa}</p>
              </div>
            </AnimateIn>

            {/* Experience */}
            {EXPERIENCE.length > 0 && (
              <AnimateIn variant="fade-up" delay={0.5}>
                <div className="mt-8">
                  <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Experience</p>
                  <div className="space-y-8">
                    {EXPERIENCE.map((exp, i) => (
                      <div key={i} className="border-l-2 border-border pl-6 hover:border-accent transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                          <div>
                            <p className="text-lg font-medium text-foreground">{exp.role}</p>
                            <p className="text-sm text-accent">{exp.company} <span className="text-muted">· {exp.type}</span></p>
                          </div>
                          <span className="text-xs font-mono text-muted">{exp.period}</span>
                        </div>
                        <ul className="space-y-3">
                          {exp.points.map((pt, j) => (
                            <li key={j} className="text-muted flex gap-3 leading-relaxed">
                              <span className="text-accent mt-2 flex-shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect width="4" height="4" x="3" y="3" /></svg>
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Links */}
            <AnimateIn variant="fade-up" delay={0.6}>
              <div className="flex gap-6 mt-12 pt-8 border-t border-border">
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
                   className="text-sm font-semibold uppercase tracking-widest text-muted hover:text-foreground flex items-center gap-2 transition-colors cursor-pointer group">
                  GitHub
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-sm font-semibold uppercase tracking-widest text-muted hover:text-foreground flex items-center gap-2 transition-colors cursor-pointer group">
                  LinkedIn
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
