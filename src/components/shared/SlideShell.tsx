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
  const channelRef = useRef<BroadcastChannel | null>(null);
  const prompterRef = useRef<Window | null>(null);

  // ─── BroadcastChannel: bidirectional sync ───────────────
  useEffect(() => {
    const ch = new BroadcastChannel('knime-slides');
    channelRef.current = ch;

    ch.onmessage = (e) => {
      if (e.data?.type === 'TELEPROMPTER_READY') {
        ch.postMessage({ type: 'SLIDE_CHANGE', slideIndex: current });
      }
      if (e.data?.type === 'SLIDE_CHANGE' && e.data.source === 'teleprompter') {
        setCurrent(e.data.slideIndex);
      }
    };

    return () => ch.close();
  }, [current]);

  useEffect(() => {
    channelRef.current?.postMessage({ type: 'SLIDE_CHANGE', slideIndex: current });
  }, [current]);

  // ─── Navigation ─────────────────────────────────────────
  const go = useCallback((dir: 1 | -1) => {
    setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, prev + dir)));
  }, []);

  // ─── Presenter mode: position slide window + open teleprompter ───
  const openPresenterMode = useCallback(() => {
    const sw = window.screen.availWidth;
    const sh = window.screen.availHeight;
    const sl = (window.screen as unknown as Record<string, number>).availLeft ?? 0;
    const st = (window.screen as unknown as Record<string, number>).availTop ?? 0;

    // Slides: 16:9 fit to screen height, pinned left
    const slideH = sh;
    const slideW = Math.round(slideH * (16 / 9));
    const finalSlideW = Math.min(slideW, Math.round(sw * 0.7));

    // Teleprompter: remaining right portion, full height
    const prompterW = sw - finalSlideW;
    const prompterL = sl + finalSlideW;

    // Try to reposition main window (may be blocked by browser)
    try { window.moveTo(sl, st); window.resizeTo(finalSlideW, sh); } catch { /* noop */ }

    // Open (or focus) teleprompter popup
    if (prompterRef.current && !prompterRef.current.closed) {
      try {
        prompterRef.current.moveTo(prompterL, st);
        prompterRef.current.resizeTo(prompterW, sh);
        prompterRef.current.focus();
      } catch { /* noop */ }
      return;
    }

    const w = window.open(
      '/teleprompter',
      'knime-teleprompter',
      `left=${prompterL},top=${st},width=${prompterW},height=${sh},menubar=no,toolbar=no,location=no,status=no`,
    );
    if (w) prompterRef.current = w;
  }, []);

  // ─── Keyboard ───────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1);

      // N → presenter mode (Cmd/Ctrl+N is browser "new window", so plain N is safe)
      if ((e.key === 'n' || e.key === 'N') && !e.metaKey && !e.ctrlKey) {
        openPresenterMode();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go, openPresenterMode]);

  const CurrentSlide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <PresentationFrame>
        <CurrentSlide />
      </PresentationFrame>
    </div>
  );
}
