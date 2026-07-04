import { PROJECTS } from '@/data/projects';
import { LINKS } from '@/data/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.id }));
}

const ACCENT: Record<string, string> = {
  blue: 'text-blue-600 bg-blue-50', purple: 'text-purple-600 bg-purple-50',
  teal: 'text-teal-600 bg-teal-50', orange: 'text-orange-600 bg-orange-50',
  green: 'text-green-600 bg-green-50', pink: 'text-pink-600 bg-pink-50',
  amber: 'text-amber-600 bg-amber-50',
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.id === params.slug);
  if (!project) return notFound();

  const ac = ACCENT[project.accentColor] ?? ACCENT.blue;
  const idx = PROJECTS.findIndex(p => p.id === params.slug);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  return (
    <main>
      <Navbar />

      {/* Hero banner */}
      <section className={`pt-32 pb-16 px-6 bg-gradient-to-br ${project.color}`}>
        <div className="max-w-4xl mx-auto">
          <Link href="/#projects" className="text-white/70 hover:text-white text-sm font-medium mb-6 inline-flex items-center gap-1.5">
            ← Back to Projects
          </Link>

          {project.badge && (
            <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold px-3 py-1 rounded-md mb-4">
              {project.badge}
            </span>
          )}

          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-3">
            {project.name}
          </h1>
          <p className="text-lg text-white/70 font-light mb-8">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="bg-white text-gray-900 font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
                View on GitHub →
              </a>
            ) : (
              <span className="bg-white/10 text-white/50 font-medium px-5 py-2.5 rounded-lg text-sm border border-white/20">
                {/* TODO: add github link in data/projects.ts */}
                Repository Coming Soon
              </span>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 backdrop-blur-sm text-white font-medium px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-sm">
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
          <div className="prose prose-gray max-w-none mb-16">
            <h2 className="font-display font-bold text-2xl mb-4">Overview</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed font-light">
              {project.longDesc.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>

          {/* Screenshots gallery */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">Screenshots</h2>
            {/*
              TODO: Add screenshots for this project:
              1. Create folder: /public/images/projects/{project.id}/
              2. Add images named 1.png, 2.png, 3.png etc.
              3. Paths are already configured in data/projects.ts screenshots array
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((src, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  {/* Fallback placeholder shown via CSS if image missing */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm -z-10">
                    Screenshot {i + 1} — add to /public{src}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack detail */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className={`text-sm font-medium px-3 py-1.5 rounded-lg ${ac}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Prev/Next navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-100">
            {prev ? (
              <Link href={`/projects/${prev.id}`} className="text-sm font-medium text-gray-500 hover:text-gray-900">
                ← {prev.name}
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/projects/${next.id}`} className="text-sm font-medium text-gray-500 hover:text-gray-900">
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
