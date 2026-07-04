import type { Metadata } from 'next';
import './globals.css';
import { PERSONAL, LINKS } from '@/data/config';

export const metadata: Metadata = {
  title:       `${PERSONAL.name} — ${PERSONAL.role}`,
  description: `Portfolio of ${PERSONAL.name}. ${PERSONAL.role} specializing in Flutter, MERN, FastAPI, Django and AI/ML.`,
  keywords:    ['Flutter', 'React', 'FastAPI', 'Django', 'AI', 'ML', 'Software Engineer', 'Pakistan', 'Internship'],
  authors:     [{ name: PERSONAL.name }],
  openGraph: {
    title:       `${PERSONAL.name} — ${PERSONAL.role}`,
    description: `Portfolio of ${PERSONAL.name}`,
    type:        'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
