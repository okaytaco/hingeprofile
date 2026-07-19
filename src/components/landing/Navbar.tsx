'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useMobile } from '@/hooks/useMobile';

const NAV_LINKS = [
  { label: 'How it works', target: '#how-it-works' },
  { label: 'Features', target: '#services' },
  { label: 'Contact us', target: '#footer' },
] as const;

export function Navbar() {
  const isMobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
      e.preventDefault();
      setMenuOpen(false);
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
    },
    [lenis],
  );

  // Smooth out wheel/trackpad steps so the contraction/expansion glides gracefully
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,
    damping: 24,
    mass: 0.8,
  });

  // Adapt contraction range — on mobile the bar is already narrower so don't try to shrink to 680px
  const maxWidth = useTransform(
    smoothScrollY,
    [20, 380],
    isMobile ? [600, 420] : [1152, 680],
  );
  const py = useTransform(smoothScrollY, [20, 380], [14, 8]);
  const px = useTransform(smoothScrollY, [20, 380], isMobile ? [16, 12] : [28, 20]);
  const borderRadius = useTransform(smoothScrollY, [20, 380], [20, 34]);

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 pointer-events-none sm:top-5 sm:px-6">
        <motion.header
          style={{
            maxWidth,
            paddingTop: py,
            paddingBottom: py,
            paddingLeft: px,
            paddingRight: px,
            borderRadius,
          }}
          className="pointer-events-auto flex w-full items-center justify-between border-2 border-ink bg-paper/40 backdrop-blur-md shadow-brutal-sm transition-shadow duration-300 hover:shadow-brutal"
        >
          <a
            href="#top"
            onClick={(e) => handleSmoothScroll(e, '#top')}
            data-cursor-hover
            className="font-display text-xl font-extrabold tracking-tight text-ink cursor-pointer sm:text-2xl"
          >
            HP.
          </a>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-8 font-display text-xs font-bold uppercase tracking-widest text-ink sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleSmoothScroll(e, link.target)}
                data-cursor-hover
                className="transition-colors hover:text-[#74C53A] cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* CTA button — slightly smaller on mobile */}
            <Link href="/sign-up">
              <Button
                size={isMobile ? 'sm' : 'sm'}
                className="font-bold uppercase tracking-wider shadow-brutal-sm text-[10px] sm:text-xs"
              >
                {isMobile ? 'Start' : 'Get started'}
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex items-center justify-center rounded-xl border-2 border-ink bg-surface p-2 text-ink shadow-brutal-sm transition-all duration-200 hover:bg-[#C6FF4D] sm:hidden"
            >
              {menuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* ─── Fullscreen Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-lg sm:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-5 rounded-xl border-2 border-[#C6FF4D] bg-transparent p-2 text-[#C6FF4D] transition-all hover:bg-[#C6FF4D] hover:text-ink"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Nav links */}
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.target}
                href={link.target}
                onClick={(e) => handleSmoothScroll(e, link.target)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.3 }}
                className="font-display text-3xl font-black uppercase tracking-widest text-paper transition-colors hover:text-[#C6FF4D]"
              >
                {link.label}
              </motion.a>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link href="/sign-up" onClick={() => setMenuOpen(false)}>
                <Button
                  size="lg"
                  className="border-4 border-[#C6FF4D] bg-[#C6FF4D] px-10 py-4 font-display text-lg font-black uppercase tracking-wider text-ink shadow-[6px_6px_0px_#C6FF4D33] hover:bg-ink hover:text-[#C6FF4D]"
                >
                  Get started →
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Navbar as Nav };
