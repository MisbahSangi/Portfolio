'use client';
import { PERSONAL, LINKS } from '@/data/config';
import AnimateIn from './AnimateIn';

export default function Footer() {
  return (
    <footer className="bg-surface/30 text-foreground py-12 px-6 border-t border-border">
      <AnimateIn variant="fade-up" className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="font-bold text-xl tracking-tight mb-2 text-foreground hover:text-accent transition-colors cursor-pointer">
              {PERSONAL.name.split(' ')[0]}<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-muted font-light">
              Building software that actually ships.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer">LinkedIn</a>
            <a href={`mailto:${LINKS.email}`}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer">Email</a>
            <a href={LINKS.cv} download="Misbah_Abdullah_CV.docx"
              className="text-sm text-accent hover:text-accent-light transition-colors font-medium cursor-pointer">
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Summer 2026
          </div>
        </div>
      </AnimateIn>
    </footer>
  );
}
