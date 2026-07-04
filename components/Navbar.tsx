'use client';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { PERSONAL, LINKS } from '@/data/config';

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMenuOpen(false); // Close menu when hiding navbar
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 md:top-6 left-0 right-0 w-full z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className={`pointer-events-auto w-full max-w-4xl transition-all duration-300 rounded-full px-5 md:px-6 h-14 md:h-16 flex items-center justify-between
          ${scrolled 
            ? 'bg-background/70 backdrop-blur-lg border border-border shadow-lg shadow-black/10' 
            : 'bg-background/30 backdrop-blur-md border border-border/50 shadow-sm'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="font-bold text-xl tracking-tight text-foreground hover:text-accent transition-colors pl-2">
            {PERSONAL.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted hover:text-foreground px-4 py-2 rounded-full hover:bg-white/5 transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2 pr-1">
            <a
              href={LINKS.cv}
              download="Misbah_Abdullah_CV.docx"
              className="text-sm font-medium text-muted hover:text-foreground px-4 py-2 rounded-full hover:bg-white/5 transition-all cursor-pointer"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-sm font-medium bg-accent text-white px-5 py-2.5 rounded-full hover:bg-blue-600 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm shadow-blue-500/20"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer pr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg border-b border-border px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LINKS.cv}
              download="Misbah_Abdullah_CV.docx"
              className="text-base font-medium text-accent cursor-pointer"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
