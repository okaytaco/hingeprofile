'use client';

import React from 'react';
import Link from 'next/link';
import { useLenis } from 'lenis/react';

export function Footer() {
  const lenis = useLenis();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      if (target === '#top' || target === '#hero' || target === '#') {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        lenis.scrollTo(target, { offset: -80, duration: 1.5 });
      }
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="relative overflow-hidden border-t-4 border-ink bg-surface px-6 pt-16 pb-12 sm:px-10 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Giant Typography Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
          <div className="font-display text-3xl font-black uppercase tracking-tighter text-ink sm:text-5xl lg:text-7xl xl:text-8xl">
            ZERO FORMS.
          </div>
          <div className="font-display text-3xl font-black uppercase tracking-tighter text-ink sm:text-right sm:text-5xl lg:text-7xl xl:text-8xl">
            <span className="rounded-xl sm:rounded-2xl border-3 sm:border-4 border-ink bg-[#C6FF4D] px-3 py-1 sm:px-4 text-ink shadow-[4px_4px_0px_#0c0b09] sm:shadow-[6px_6px_0px_#0c0b09]">
              REAL PROFILES.
            </span>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="mt-14 mb-14 border-t-2 border-ink/20" />

        {/* Minimal 4-Column Content Grid (S: / L: / E: / M:) */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-16">
          {/* S: Socials */}
          <div className="flex flex-col gap-3 font-sans text-sm font-medium text-ink/80">
            <span className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-ink/40">
              S:
            </span>
            <a
              href="https://www.instagram.com/nigbalsgonewild?igsh=MjFtdjNuOXZzZjIx"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:translate-x-1 hover:text-ink"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Ayush042004"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:translate-x-1 hover:text-ink"
            >
              GitHub
            </a>
          </div>

          {/* L: Architecture & Stack */}
          <div className="flex flex-col gap-3 font-sans text-sm font-medium text-ink/80">
            <span className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-ink/40">
              L:
            </span>
            <span className="text-ink/60">Privacy First</span>
            <span className="text-ink/60">Fast & Secure</span>
            <span className="text-ink/60">AI That Understands</span>
            <span className="text-ink/60">Continuously Improving</span>
          </div>

          {/* E: Contact */}
          <div className="flex flex-col gap-3 font-sans text-sm font-medium text-ink/80">
            <span className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-ink/40">
              E:
            </span>
            <a
              href="mailto:aayushdutta4u@gmail.com"
              className="underline decoration-ink/30 underline-offset-4 transition-all duration-200 hover:text-ink hover:decoration-ink break-all text-[11px] sm:text-sm"
            >
              aayushdutta4u@gmail.com
            </a>
            <a
              href="mailto:tridisam651@gmail.com"
              className="underline decoration-ink/30 underline-offset-4 transition-all duration-200 hover:text-ink hover:decoration-ink break-all text-[11px] sm:text-sm"
            >
              tridisam651@gmail.com
            </a>
            <a
              href="mailto:singhaniketk707@gmail.com"
              className="underline decoration-ink/30 underline-offset-4 transition-all duration-200 hover:text-ink hover:decoration-ink break-all text-[11px] sm:text-sm"
            >
              singhaniketk707@gmail.com
            </a>
            <a
              href="mailto:kumarayush042004@gmail.com"
              className="underline decoration-ink/30 underline-offset-4 transition-all duration-200 hover:text-ink hover:decoration-ink break-all text-[11px] sm:text-sm"
            >
              kumarayush042004@gmail.com
            </a>
          </div>

          {/* M: Menu */}
          <div className="flex flex-col gap-3 font-sans text-sm font-medium text-ink/80">
            <span className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-ink/40">
              M:
            </span>
            <a
              href="#top"
              onClick={(e) => handleSmoothScroll(e, '#top')}
              className="transition-all duration-200 hover:translate-x-1 hover:text-ink cursor-pointer"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
              className="transition-all duration-200 hover:translate-x-1 hover:text-ink cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="transition-all duration-200 hover:translate-x-1 hover:text-ink cursor-pointer"
            >
              Architecture
            </a>
            <Link href="/sign-up" className="font-bold text-ink transition-all duration-200 hover:translate-x-1">
              Start Interview →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t-2 border-ink/20 pt-8 sm:flex-row sm:items-center">
          <div className="font-display text-2xl font-black uppercase tracking-tight text-ink">
            Hinge<span className="rounded-md bg-[#C6FF4D] px-1.5 py-0.5 text-ink border border-ink">Profile.</span>
          </div>
          <p className="text-xs font-medium text-ink/50">
            © 2026 HingeProfile. Not affiliated with Hinge, Inc. Legal & Privacy.
          </p>
          <div className="font-display text-xs font-black uppercase tracking-wider text-ink/70">
            Built to feel human. Powered by AI.
          </div>
        </div>
      </div>
    </footer>
  );
}