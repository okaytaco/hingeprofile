'use client';

import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

/**
 * Reactive hook that tracks whether the viewport is at mobile width.
 *
 * Uses `matchMedia` for the initial check and listens for resize events
 * so the value stays current without forcing a re-layout.
 *
 * @param breakpoint – pixel width to treat as the boundary (default 768)
 * @returns `true` when `window.innerWidth < breakpoint`
 */
export function useMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    // Sync immediately — avoids the first-paint flash
    setIsMobile(mql.matches);

    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);

    return () => mql.removeEventListener('change', onChange);
  }, [breakpoint]);

  return isMobile;
}
