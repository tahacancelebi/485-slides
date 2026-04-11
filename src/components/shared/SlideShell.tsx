'use client';

import { useCallback, useEffect, useState } from 'react';
import Slide1 from '@/components/slides/Slide1';
import Slide2 from '@/components/slides/Slide2';
import Slide3 from '@/components/slides/Slide3';
import Slide4 from '@/components/slides/Slide4';
import Slide5 from '@/components/slides/Slide5';
import Slide6 from '@/components/slides/Slide6';
import Slide7 from '@/components/slides/Slide7';
import Slide8 from '@/components/slides/Slide8';
import Slide10 from '@/components/slides/Slide10';
import Slide11 from '@/components/slides/Slide11';
import Slide12 from '@/components/slides/Slide12';
import Slide13 from '@/components/slides/Slide13';
import Slide15 from '@/components/slides/Slide15';
import Slide16 from '@/components/slides/Slide16';
import Slide17 from '@/components/slides/Slide17';
import Slide18 from '@/components/slides/Slide18';
import Slide19 from '@/components/slides/Slide19';

// Ordered to match content.md academic flow (17 slides).
// Slide9 and Slide14 are intentionally excluded — their designs had no matching content slot.
const slides = [
  Slide1,  // 01 · Title
  Slide3,  // 02 · OSS Overview
  Slide6,  // 03 · GQM Methodology
  Slide4,  // 04 · Tools Used
  Slide10, // 05 · System Summary
  Slide7,  // 06 · Q1 LOC
  Slide5,  // 07 · Q2 CBO
  Slide11, // 08 · Q3 WMC
  Slide13, // 09 · Q3 RFC
  Slide8,  // 10 · God Class Deep Dive
  Slide2,  // 11 · Q4 LCOM
  Slide17, // 12 · Q4 DIT & NOC
  Slide19, // 13 · Dependency Graph
  Slide18, // 14 · Cyclic Dependency
  Slide15, // 15 · Overall Evaluation
  Slide16, // 16 · Recommendations
  Slide12, // 17 · Team Allocation & Q&A
];

export default function SlideShell() {
  const [current, setCurrent] = useState(0);

  const go = useCallback((dir: 1 | -1) => {
    setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, prev + dir)));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go]);

  const CurrentSlide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CurrentSlide />

      {/* Slide indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[100]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Arrow buttons for mouse users */}
      {current > 0 && (
        <button
          onClick={() => go(-1)}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {current < slides.length - 1 && (
        <button
          onClick={() => go(1)}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
