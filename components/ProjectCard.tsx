'use client';
import Image from 'next/image';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-surface border border-border/80 rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-500 h-full">

      {/* Image / Cover */}
      <div className="relative h-56 bg-surface-hover overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-hover">
            <p className="font-light tracking-tight text-foreground text-2xl text-center px-4">{project.name}</p>
            <p className="text-muted text-xs mt-2 text-center px-4 max-w-[80%] uppercase tracking-widest font-mono">{project.tagline}</p>
          </div>
        )}

        {/* Badge */}
        {project.badge && (
          <span className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md text-foreground border border-border text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-lg shadow-sm">
            {project.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-border/80 bg-background text-muted">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] font-mono text-muted/60 px-1 py-1">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Name + Description */}
        <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3 font-light">{project.description}</p>

        {/* Footer — GitHub link only */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/80">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-widest bg-foreground text-background px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </a>
          ) : (
            <span className="text-xs font-mono text-muted/60 uppercase tracking-widest">
              Private Repository
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
