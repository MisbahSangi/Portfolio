'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL, LINKS } from '@/data/config';

const TYPED_WORDS = ['Full-Stack Developer', 'Flutter Engineer', 'AI/ML Builder', 'Backend Developer'];

const STACK = [
  { label: 'Flutter' },
  { label: 'React' },
  { label: 'Next.js' },
  { label: 'FastAPI' },
  { label: 'Django' },
  { label: 'PostgreSQL' },
  { label: 'Docker' },
  { label: 'AI/ML' },
];

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((wordIdx + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-36 pb-20 px-6 overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[100px]" />

        {/* Dot grid with radial fade */}
        <div
          className="absolute inset-0 bg-grid-dots"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto w-full relative z-10 text-center"
      >
        {/* Availability badge */}
        {PERSONAL.available && (
          <motion.div variants={fadeUp} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2.5 bg-surface border border-border text-muted text-xs font-medium px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Internships — Summer 2026
            </div>
          </motion.div>
        )}

        {/* Name */}
        <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">{PERSONAL.name.split(' ')[0]}</span>
          <br />
          <span className="text-accent">{PERSONAL.name.split(' ')[1]}</span>
        </motion.h1>

        {/* Typed role */}
        <motion.div variants={fadeUp} className="text-xl sm:text-2xl font-medium text-muted mb-6 h-8">
          <span className="text-foreground">{displayed}</span>
          <span className="text-accent animate-pulse ml-0.5">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          I build production-quality apps across Flutter, MERN, FastAPI, Django & AI/ML.{' '}
          <span className="text-foreground font-medium">10+ real projects.</span> Not just coursework.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3 rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href={LINKS.cv}
            download="Misbah_Abdullah_CV.docx"
            className="inline-flex items-center gap-2 bg-surface text-foreground border border-border font-medium px-7 py-3 rounded-lg hover:border-muted hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v8M5 8l3 3 3-3M3 13h10" />
            </svg>
          </a>
        </motion.div>

        {/* Stack pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
          {STACK.map((item) => (
            <span
              key={item.label}
              className="text-xs font-medium text-muted bg-surface border border-border px-3 py-1.5 rounded-full hover:border-accent/30 hover:text-foreground transition-all cursor-default"
            >
              {item.label}
            </span>
          ))}
        </motion.div>
      </motion.div>


    </section>
  );
}
