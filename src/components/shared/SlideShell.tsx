'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import PresentationFrame from '@/components/shared/PresentationFrame';
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
  const [prompterOpen, setPrompterOpen] = useState(false);
  const channelRef = useRef<BroadcastChannel | null>(null);

  const ignoreNextRef = useRef(false);

  // Broadcast slide changes to teleprompter window & listen for changes from it
  useEffect(() => {
    const channel = new BroadcastChannel('knime-slides');
    channelRef.current = channel;

    channel.onmessage = (e) => {
      if (e.data?.type === 'TELEPROMPTER_READY') {
        channel.postMessage({ type: 'SLIDE_CHANGE', slideIndex: current });
      }
      // Teleprompter changed slide — sync back
      if (e.data?.type === 'SLIDE_CHANGE' && e.data.source === 'teleprompter') {
        if (ignoreNextRef.current) {
          ignoreNextRef.current = false;
          return;
        }
        setCurrent(e.data.slideIndex);
      }
    };

    return () => channel.close();
  }, [current]);

  // Broadcast current slide index whenever it changes (from main window)
  useEffect(() => {
    channelRef.current?.postMessage({ type: 'SLIDE_CHANGE', slideIndex: current });
  }, [current]);

  const go = useCallback((dir: 1 | -1) => {
    setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, prev + dir)));
  }, []);

  const openTeleprompter = useCallback(() => {
    const w = window.open(
      '/teleprompter',
      'knime-teleprompter',
      'width=900,height=700,menubar=no,toolbar=no,location=no,status=no',
    );
    if (w) {
      setPrompterOpen(true);
      const check = setInterval(() => {
        if (w.closed) {
          setPrompterOpen(false);
          clearInterval(check);
        }
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1);
      // T key opens teleprompter
      if ((e.key === 't' || e.key === 'T') && !e.metaKey && !e.ctrlKey) {
        openTeleprompter();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go, openTeleprompter]);

  const CurrentSlide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <PresentationFrame>
        <CurrentSlide />
      </PresentationFrame>

      {/* Teleprompter button — top right */}
      <button
        onClick={openTeleprompter}
        title="Open Teleprompter (T)"
        className={`fixed top-4 right-4 z-[100] flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm font-semibold backdrop-blur-sm ${
          prompterOpen
            ? 'bg-red-500/30 text-red-200 border border-red-400/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
            : 'bg-black/30 text-white/70 hover:bg-black/50 hover:text-white border border-white/10'
        }`}
      >
        {/* Teleprompter icon */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        {prompterOpen ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>LIVE</span>
          </>
        ) : (
          <span>Notes</span>
        )}
      </button>

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
