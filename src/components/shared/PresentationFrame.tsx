'use client';

import { useEffect, useState, type ReactNode } from 'react';

const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;


type Viewport = { w: number; h: number };

export default function PresentationFrame({ children }: { children: ReactNode }) {
  const [viewport, setViewport] = useState<Viewport | null>(null);

  useEffect(() => {
    const update = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // SSR / first paint — neutral placeholder so we don't flash wrong layout.
  if (!viewport) {
    return <div className="fixed inset-0 bg-[#d1d1d1]"  />;
  }

  const tooSmall = viewport.w < TARGET_WIDTH || viewport.h < TARGET_HEIGHT;

  if (tooSmall) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center text-[#1A1A2E] font-sans p-6"
        style={{ background: '#d1d1d1' }}
      >
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{ background: '#d1d1d1' }}
        />

        <div className="relative z-10 max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-[#1A1A2E]"
            >
              <path d="M15 3h6v6" />
              <path d="M9 21H3v-6" />
              <path d="M21 3l-7 7" />
              <path d="M3 21l7-7" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Please enlarge your window
          </h1>

          <p className="text-lg text-[#1A1A2E]/80 leading-snug">
            This presentation is designed for{' '}
            <strong className="text-[#1A1A2E]">1920 × 1080</strong>. Resize your
            browser (or switch to fullscreen) so everyone in the room can see
            the slides properly.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-black/30 border border-white/10 px-5 py-2 text-sm font-medium tracking-wide">
            <span className="text-[#1A1A2E]/60">Current</span>
            <span className="text-[#f27a8a] font-bold tabular-nums">
              {viewport.w} × {viewport.h}
            </span>
            <span className="text-[#1A1A2E]/30">/</span>
            <span className="text-[#1A1A2E]/60">Required</span>
            <span className="text-[#7fd4c8] font-bold tabular-nums">
              {TARGET_WIDTH} × {TARGET_HEIGHT}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Viewport is big enough. Render the slide scaled so its visual bounding box
  // is exactly 1920x1080 (for 16:9) or letterboxed inside 1920x1080 otherwise.
  //
  // The slide uses w-screen/h-screen/vw/vh internally, so it naturally fills
  // the actual viewport (viewport.w x viewport.h). We scale that down to fit
  // TARGET_WIDTH x TARGET_HEIGHT while preserving aspect ratio.
  const scale = Math.min(
    TARGET_WIDTH / viewport.w,
    TARGET_HEIGHT / viewport.h,
  );
  const visualW = viewport.w * scale;
  const visualH = viewport.h * scale;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: '#d1d1d1' }}
    >
      {/* Cool gray grain texture over the background */}
      <div
        className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none"
        style={{ background: '#d1d1d1' }}
      />

      {/* Scaled slide frame — visually 1920x1080, positioned centered */}
      <div
        className="absolute shadow-2xl ring-1 ring-white/10"
        style={{
          width: `${viewport.w}px`,
          height: `${viewport.h}px`,
          left: `calc(50% - ${visualW / 2}px)`,
          top: `calc(50% - ${visualH / 2}px)`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
