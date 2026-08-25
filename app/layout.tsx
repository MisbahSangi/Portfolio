import type { Metadata } from 'next';
import './globals.css';
import { PERSONAL } from '@/data/config';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.misbahabdullah.me'),
  title: 'Misbah Abdullah — Full-Stack Developer',
  description: 'I build software that actually ships. 10+ real projects across Flutter, MERN, FastAPI, Django, and AI/ML.',
  openGraph: {
    title: 'Misbah Abdullah — Full-Stack Developer',
    description: 'I build software that actually ships. 10+ real projects across Flutter, MERN, FastAPI, Django, and AI/ML.',
    url: 'https://www.misbahabdullah.me',
    siteName: 'Misbah Abdullah Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misbah Abdullah — Full-Stack Developer',
    description: 'I build software that actually ships.',
    images: ['/og-image.png'],
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
        <Analytics />
      </body>
    </html>
  );
}
