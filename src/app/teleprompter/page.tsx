'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { speakerNotes, type Lang } from '@/data/speakerNotes';

const SLIDE_LABELS = [
  'Title',
  'OSS Overview',
  'GQM Tree',
  'Tools Used',
  'System Summary',
  'Q1: LOC',
  'Q2: CBO',
  'Q3: WMC',
  'Q3: RFC',
  'God Classes',
  'Q4: LCOM',
  'Q4: DIT & NOC',
  'Dependency Graph',
  'Cyclic Dependency',
  'Overall Evaluation',
  'Recommendations',
  'Team & Q&A',
];

export default function TeleprompterPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lang, setLang] = useState<Lang>('tr');
  const [fontSize, setFontSize] = useState(42);
  const [autoScroll, setAutoScroll] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number | null>(null);
  const channelRef = useRef<BroadcastChannel | null>(null);
  // Guard against echo: ignore incoming SLIDE_CHANGE that we just sent
  const ignoreNextRef = useRef(false);

  // Listen for slide changes from main window via BroadcastChannel
  useEffect(() => {
    const channel = new BroadcastChannel('knime-slides');
    channelRef.current = channel;

    channel.onmessage = (e) => {
      if (e.data?.type === 'SLIDE_CHANGE' && typeof e.data.slideIndex === 'number') {
        if (ignoreNextRef.current) {
          ignoreNextRef.current = false;
          return;
        }
        setSlideIndex(e.data.slideIndex);
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      }
    };

    // Request current slide from main window
    channel.postMessage({ type: 'TELEPROMPTER_READY' });

    return () => channel.close();
  }, []);

  // Broadcast slide changes TO the main window
  const broadcastSlide = useCallback((index: number) => {
    ignoreNextRef.current = true;
    channelRef.current?.postMessage({ type: 'SLIDE_CHANGE', slideIndex: index, source: 'teleprompter' });
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (autoScroll && contentRef.current) {
      const tick = () => {
        if (contentRef.current) {
          contentRef.current.scrollTop += scrollSpeed * 0.6;
        }
        scrollRef.current = requestAnimationFrame(tick);
      };
      scrollRef.current = requestAnimationFrame(tick);
    }
    return () => {
      if (scrollRef.current) cancelAnimationFrame(scrollRef.current);
    };
  }, [autoScroll, scrollSpeed]);

  // Reset scroll on slide change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    setAutoScroll(false);
  }, [slideIndex]);

  // Local slide change that also broadcasts to the main window
  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(speakerNotes.length - 1, index));
    setSlideIndex(clamped);
    broadcastSlide(clamped);
  }, [broadcastSlide]);

  const note = speakerNotes[slideIndex];
  const text = note ? note[lang] : '';

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L') toggleLang();
      if (e.key === 's' || e.key === 'S') setAutoScroll((p) => !p);
      if (e.key === '+' || e.key === '=') setFontSize((p) => Math.min(80, p + 4));
      if (e.key === '-' || e.key === '_') setFontSize((p) => Math.max(20, p - 4));
      if (e.key === 'ArrowUp') setScrollSpeed((p) => Math.max(0.5, p - 0.5));
      if (e.key === 'ArrowDown') setScrollSpeed((p) => Math.min(5, p + 0.5));
      if (e.key === 'ArrowRight') setSlideIndex((prev) => {
        const next = Math.min(speakerNotes.length - 1, prev + 1);
        broadcastSlide(next);
        return next;
      });
      if (e.key === 'ArrowLeft') setSlideIndex((prev) => {
        const next = Math.max(0, prev - 1);
        broadcastSlide(next);
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [toggleLang, broadcastSlide]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] text-white font-sans flex flex-col select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#141414] border-b border-white/10 shrink-0">
        {/* Left: slide info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-sm font-bold tracking-widest uppercase">
              Teleprompter
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <span className="text-white/60 text-sm font-mono">
            {String(slideIndex + 1).padStart(2, '0')} / {speakerNotes.length}
          </span>
          <span className="text-white/40 text-sm">
            {SLIDE_LABELS[slideIndex]}
          </span>
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-3">
          {/* Font size */}
          <button
            onClick={() => setFontSize((p) => Math.max(20, p - 4))}
            className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 text-lg font-bold transition-colors"
          >
            A-
          </button>
          <span className="text-white/50 text-xs font-mono w-8 text-center">{fontSize}</span>
          <button
            onClick={() => setFontSize((p) => Math.min(80, p + 4))}
            className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 text-lg font-bold transition-colors"
          >
            A+
          </button>

          <div className="h-4 w-px bg-white/20 mx-1" />

          {/* Auto scroll */}
          <button
            onClick={() => setAutoScroll((p) => !p)}
            className={`px-3 py-1.5 rounded text-xs font-bold tracking-wider uppercase transition-all ${
              autoScroll
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            {autoScroll ? `Scroll ON (${scrollSpeed.toFixed(1)}x)` : 'Auto Scroll'}
          </button>

          {autoScroll && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setScrollSpeed((p) => Math.max(0.5, p - 0.5))}
                className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 text-sm transition-colors"
              >
                -
              </button>
              <button
                onClick={() => setScrollSpeed((p) => Math.min(5, p + 0.5))}
                className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 text-sm transition-colors"
              >
                +
              </button>
            </div>
          )}

          <div className="h-4 w-px bg-white/20 mx-1" />

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="relative w-20 h-9 rounded-full bg-white/10 hover:bg-white/15 transition-all border border-white/10 overflow-hidden"
          >
            <div
              className={`absolute top-0.5 w-9 h-8 rounded-full transition-all duration-300 ${
                lang === 'tr'
                  ? 'left-0.5 bg-red-600'
                  : 'left-[2.4rem] bg-blue-600'
              }`}
            />
            <div className="relative flex items-center justify-between px-2.5 h-full text-xs font-black tracking-wider">
              <span className={lang === 'tr' ? 'text-white' : 'text-white/40'}>TR</span>
              <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
            </div>
          </button>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="flex items-center justify-center gap-1.5 py-2 bg-[#111] shrink-0">
        {SLIDE_LABELS.map((label, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            title={label}
            className={`h-1.5 rounded-full transition-all ${
              i === slideIndex
                ? 'w-6 bg-red-500'
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Main content area */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto px-[8%] py-12 scroll-smooth"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.15) transparent',
        }}
      >
        {/* Fade gradient at top */}
        <div className="pointer-events-none fixed top-[5.5rem] left-0 right-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10" />

        <p
          className="leading-[1.75] font-light tracking-wide text-white/95 max-w-[1400px] mx-auto whitespace-pre-line"
          style={{ fontSize: `${fontSize}px` }}
        >
          {text}
        </p>

        {/* Extra space at bottom for scrolling */}
        <div className="h-[60vh]" />
      </div>

      {/* Fade gradient at bottom */}
      <div className="pointer-events-none fixed bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />

      {/* Bottom keyboard shortcut hints */}
      <div className="flex items-center justify-center gap-6 py-2 bg-[#0e0e0e] border-t border-white/5 shrink-0 text-white/25 text-xs font-mono">
        <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-white/40">L</kbd> dil</span>
        <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-white/40">S</kbd> scroll</span>
        <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-white/40">+/-</kbd> font</span>
        <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-white/40">&larr;&rarr;</kbd> slide</span>
        <span><kbd className="px-1 py-0.5 rounded bg-white/10 text-white/40">&uarr;&darr;</kbd> hiz</span>
      </div>
    </div>
  );
}
