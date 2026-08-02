import { PROJECTS } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.id }));
}

const ACCENT: Record<string, string> = {
  blue: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
  teal: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-500/20',
  orange: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
  green: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
  pink: 'text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-500/20',
  amber: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.id === params.slug);
  if (!project) return notFound();

  const ac = ACCENT[project.accentColor] ?? ACCENT.blue;
  const idx = PROJECTS.findIndex(p => p.id === params.slug);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero banner */}
      <section className={`pt-36 pb-20 px-6 bg-gradient-to-br ${project.color} relative overflow-hidden border-b border-border/40`}>
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/#projects" className="text-white/80 hover:text-white text-sm font-medium mb-6 inline-flex items-center gap-1.5 transition-colors">
            ← Back to Projects
          </Link>

          {project.badge && (
            <div className="mb-4">
              <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-mono font-bold px-3 py-1 rounded-md shadow-sm">
                {project.badge}
              </span>
            </div>
          )}

          <h1 className="font-mono font-bold text-4xl sm:text-5xl text-white mb-3 tracking-tight">
            {project.name}
          </h1>
          <p className="text-lg text-white/80 font-light mb-8 max-w-2xl">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono font-medium bg-white/10 text-white/95 px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="bg-white text-gray-950 font-semibold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-all text-sm shadow-md">
                View on GitHub →
              </a>
            ) : (
              <span className="bg-white/10 text-white/60 font-mono text-sm px-5 py-2.5 rounded-xl border border-white/20">
                Repository Coming Soon
              </span>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 backdrop-blur-md text-white font-medium px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-sm">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Description */}
          <div className="mb-16">
            <h2 className="font-mono font-bold text-2xl mb-4 text-foreground">Overview</h2>
            <div className="space-y-4 text-muted leading-relaxed font-light text-lg">
              {project.longDesc.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>

          {/* Screenshots gallery */}
          <div className="mb-16">
            <h2 className="font-mono font-bold text-2xl mb-6 text-foreground">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((src, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-border shadow-sm">
                  <Image
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-muted text-xs font-mono -z-10 bg-surface-hover">
                    Screenshot {i + 1} — add to /public{src}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack detail */}
          <div className="mb-16">
            <h2 className="font-mono font-bold text-2xl mb-6 text-foreground">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className={`text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg border ${ac}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Prev/Next navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            {prev ? (
              <Link href={`/projects/${prev.id}`} className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-2">
                ← {prev.name}
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/projects/${next.id}`} className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-2">
                {next.name} →
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
