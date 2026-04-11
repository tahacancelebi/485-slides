'use client';

import { useEffect, useState, type ReactNode } from 'react';

const STAGE_WIDTH = 1920;
const STAGE_HEIGHT = 1080;

type Viewport = { w: number; h: number };

/**
 * PresentationFrame renders its child slide inside a fixed 1920x1080 stage.
 *
 * The stage uses `container-type: size`, so any `cqw`/`cqh` units inside the
 * slide resolve against the stage's 1920x1080 box — not the real viewport.
 * This means the slide is laid out exactly as if the browser window were
 * 1920x1080, regardless of the actual viewport dimensions.
 *
 * The stage is then uniformly scaled with a single CSS transform so it fits
 * inside the real viewport while preserving aspect ratio. Any empty area
 * around the stage is filled with a soft cool-gray background. The slide
 * never distorts — it scales like a picture.
 */
export default function PresentationFrame({ children }: { children: ReactNode }) {
  const [viewport, setViewport] = useState<Viewport | null>(null);

  useEffect(() => {
    const update = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // SSR / first paint — neutral flat background to avoid layout flash.
  if (!viewport) {
    return <div className="fixed inset-0 bg-[#d1d1d1]" />;
  }

  // Uniform scale so the 1920x1080 stage fits within the viewport.
  // Aspect ratio is preserved — smaller dimension wins.
  const scale = Math.min(
    viewport.w / STAGE_WIDTH,
    viewport.h / STAGE_HEIGHT,
  );
  const visualW = STAGE_WIDTH * scale;
  const visualH = STAGE_HEIGHT * scale;

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: '#d1d1d1' }}
    >
      <div
        className="absolute shadow-2xl ring-1 ring-black/10"
        style={{
          width: `${STAGE_WIDTH}px`,
          height: `${STAGE_HEIGHT}px`,
          left: `${(viewport.w - visualW) / 2}px`,
          top: `${(viewport.h - visualH) / 2}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          containerType: 'size',
        }}
      >
        {children}
      </div>
    </div>
  );
}
