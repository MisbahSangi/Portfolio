import type { Metadata } from 'next';
import './globals.css';
import { PERSONAL } from '@/data/config';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: `${PERSONAL.name} — ${PERSONAL.role}`,
  description: `Portfolio of ${PERSONAL.name}. ${PERSONAL.role} specializing in Flutter, MERN, FastAPI, Django and AI/ML.`,
  keywords: ['Flutter', 'React', 'FastAPI', 'Django', 'AI', 'ML', 'Software Engineer', 'Pakistan', 'Internship'],
  authors: [{ name: PERSONAL.name }],
  openGraph: {
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description: `Portfolio of ${PERSONAL.name}`,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
