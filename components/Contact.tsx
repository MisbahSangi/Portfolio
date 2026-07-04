'use client';
import { useState } from 'react';
import { PERSONAL, LINKS } from '@/data/config';
import AnimateIn from './AnimateIn';

const CONTACT_LINKS = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>, label: 'GitHub', value: 'MisbahSangi', href: LINKS.github },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>, label: 'LinkedIn', value: 'misbah-abdullah', href: LINKS.linkedin },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>, label: 'Resume', value: 'Download CV', href: LINKS.cv, download: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border bg-surface/10">
      <div className="max-w-6xl mx-auto">
        <AnimateIn variant="fade-up">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide">Get in Touch</p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <AnimateIn variant="fade-up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4 text-foreground">
                Let's build something<br />
                <span className="text-accent">incredible.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-10 max-w-md">
                Open to software engineering internships for Summer 2026.
                Whether it's Flutter, web, backend, or AI/ML — I'm ready to contribute.
              </p>
            </AnimateIn>

            <div className="space-y-4">
              {CONTACT_LINKS.map((cl, i) => (
                <AnimateIn key={cl.label} variant="fade-up" delay={0.2 + (i * 0.1)}>
                  <a
                    href={cl.href}
                    target={cl.href.startsWith('http') ? '_blank' : undefined}
                    rel={cl.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    download={cl.download ? 'Misbah_Abdullah_CV.docx' : undefined}
                    className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4 hover:border-accent/50 hover:shadow-sm transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:scale-110 transition-all">
                      {cl.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted font-medium mb-0.5">{cl.label}</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{cl.value}</p>
                    </div>
                    <span className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                    </span>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <AnimateIn variant="fade-up" delay={0.3}>
            <div className="bg-surface rounded-2xl p-8 border border-border relative overflow-hidden">
              {sent ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-3">Message Initiated!</h3>
                  <p className="text-muted text-sm mb-8 max-w-xs mx-auto">Your default email client should have opened. I'll get back to you shortly.</p>
                  <button onClick={() => setSent(false)} className="text-sm font-medium text-accent hover:text-accent-light underline underline-offset-4 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">Your Name</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Misbah Abdullah"
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">Email Address</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="misbah@company.com"
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">Message</label>
                    <textarea
                      required rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="I'd like to discuss an internship opportunity..."
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted/50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background font-medium py-3.5 rounded-xl hover:bg-muted transition-colors mt-2"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-muted text-center mt-4">
                    This will open your default email client.
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
