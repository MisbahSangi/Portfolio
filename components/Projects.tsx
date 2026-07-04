'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
import AnimateIn from './AnimateIn';

const ALL_CATEGORIES = ['All', 'Flutter', 'Web', 'Python', 'AI/ML', 'Full-Stack', 'Mobile', 'Backend'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number | null>(null);
  const scrollSpeed = 0.8; // pixels per frame

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(active));

  // --- Auto-scroll logic ---
  const autoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isPaused || isDragging) {
      animRef.current = requestAnimationFrame(autoScroll);
      return;
    }

    el.scrollLeft += scrollSpeed;

    // If we've scrolled past half (the duplicated content), reset seamlessly
    const halfWidth = el.scrollWidth / 2;
    if (el.scrollLeft >= halfWidth) {
      el.scrollLeft -= halfWidth;
    }

    animRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused, isDragging]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [autoScroll]);

  // --- Mouse drag handlers ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // --- Touch drag handlers ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Duplicate items for seamless infinite loop
  const marqueeItems = [...filtered, ...filtered];

  return (
    <section id="projects" className="py-24 overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn variant="fade-up">
          <p className="text-sm font-semibold text-muted mb-3 uppercase tracking-widest">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              Featured <span className="font-semibold">Projects.</span>
            </h2>
            <p className="text-muted text-sm max-w-xs">
              Drag to explore · Hover to pause · Click to view code
            </p>
          </div>
        </AnimateIn>

        {/* Filter buttons */}
        <AnimateIn variant="fade-up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                }}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  active === cat
                    ? 'bg-foreground text-background border-foreground shadow-sm'
                    : 'bg-surface text-muted border-border hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Scrolling Track */}
      <AnimateIn variant="fade-in" delay={0.2} className="relative w-full">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-hidden py-4 px-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {marqueeItems.map((project, i) => (
            <div key={`${project.id}-${i}`} className="flex-shrink-0 w-[360px] sm:w-[400px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center py-24 text-muted bg-surface rounded-lg border border-border mt-4">
              No projects in this category yet.
            </div>
          </div>
        )}
      </AnimateIn>
    </section>
  );
}
