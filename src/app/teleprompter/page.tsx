'use client';

import { useEffect, useState, useRef, useCallback, type ReactNode } from 'react';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import {
  speakerNotes,
  SLIDE_PALETTES,
  SLIDE_LABELS,
  type Lang,
} from '@/data/speakerNotes';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// ─── Text highlighter ────────────────────────────────────────────────────────
// Highlights metrics, numbers, and class names inline for teleprompter reading.

const METRIC_RE = /\b(CBO|WMC|RFC|LOC|DIT|NOC|LCOM|GQM|IQR|TDD|OSS|GPL|C&K|Q[1-4])\b/g;
const NUMBER_RE = /\b(\d[\d.,]*\s*(?:%|K|k|M)?)(?!\w)/g;
const CLASSNAME_RE = /\b(WorkflowEditor|NodeContainerEditPart|Nodalizer|StyledTextEditor|AbstractNodeAction|AbstractContentProvider|AbstractRepositoryView|SubnodeLayoutJSONEditorPage|AbstractKNIMECommand|AbstractEditorAction|ExplorerView)\b/g;
const GODCLASS_RE = /\b(God\s+Class(?:es)?|Tanrı\s+Sınıf(?:lar)?|Tanri\s+Sinif(?:lar)?)\b/gi;

interface Chunk { type: 'text' | 'metric' | 'number' | 'classname' | 'god'; content: string }

function tokenise(raw: string): Chunk[] {
  const combined = new RegExp(
    `(${GODCLASS_RE.source})|(${CLASSNAME_RE.source})|(${METRIC_RE.source})|(${NUMBER_RE.source})`,
    'gi',
  );
  const chunks: Chunk[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;
  while ((m = combined.exec(raw)) !== null) {
    if (m.index > cursor) chunks.push({ type: 'text', content: raw.slice(cursor, m.index) });
    if (m[1])      chunks.push({ type: 'god',       content: m[0] });
    else if (m[2]) chunks.push({ type: 'classname', content: m[0] });
    else if (m[3]) chunks.push({ type: 'metric',    content: m[0] });
    else           chunks.push({ type: 'number',    content: m[0] });
    cursor = m.index + m[0].length;
  }
  if (cursor < raw.length) chunks.push({ type: 'text', content: raw.slice(cursor) });
  return chunks;
}

function HighlightedText({ text, accent, size }: { text: string; accent: string; size: number }) {
  const paragraphs = text.split('\n\n');
  return (
    <>
      {paragraphs.map((para, pi) => {
        const lines = para.split('\n');
        return (
          <p
            key={pi}
            className="mb-[1.1em]"
            style={{ fontSize: size, lineHeight: 1.75, fontWeight: 500, letterSpacing: '-0.01em' }}
          >
            {lines.map((line, li) => (
              <span key={li}>
                {tokenise(line).map((chunk, ci) => {
                  if (chunk.type === 'text') return <span key={ci}>{chunk.content}</span>;
                  if (chunk.type === 'number') return (
                    <strong
                      key={ci}
                      style={{
                        fontWeight: 800,
                        color: accent,
                        textShadow: `0 0 24px ${accent}55`,
                      }}
                    >
                      {chunk.content}
                    </strong>
                  );
                  if (chunk.type === 'metric') return (
                    <span
                      key={ci}
                      className={jetbrains.className}
                      style={{
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.98)',
                        background: `${accent}25`,
                        borderRadius: '6px',
                        padding: '2px 7px',
                        margin: '0 2px',
                        letterSpacing: '0.05em',
                        fontSize: '0.82em',
                        verticalAlign: 'baseline',
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      {chunk.content}
                    </span>
                  );
                  if (chunk.type === 'classname') return (
                    <em
                      key={ci}
                      style={{
                        fontWeight: 700,
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.88)',
                        borderBottom: `1.5px solid ${accent}66`,
                        paddingBottom: '1px',
                      }}
                    >
                      {chunk.content}
                    </em>
                  );
                  // god class
                  return (
                    <strong
                      key={ci}
                      style={{
                        fontWeight: 900,
                        color: accent,
                        textShadow: `0 0 30px ${accent}77`,
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.06em',
                        fontSize: '0.92em',
                      }}
                    >
                      {chunk.content}
                    </strong>
                  );
                })}
                {li < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function TeleprompterPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lang, setLang]             = useState<Lang>('tr');
  const [fontSize, setFontSize]     = useState(44);
  const [autoScroll, setAutoScroll] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1.0);

  const contentRef   = useRef<HTMLDivElement>(null);
  const scrollRef    = useRef<number | null>(null);
  const channelRef   = useRef<BroadcastChannel | null>(null);
  const ignoreRef    = useRef(false);

  // ── BroadcastChannel ────────────────────────────────────────
  useEffect(() => {
    const ch = new BroadcastChannel('knime-slides');
    channelRef.current = ch;
    ch.onmessage = (e) => {
      if (e.data?.type === 'SLIDE_CHANGE' && typeof e.data.slideIndex === 'number') {
        if (ignoreRef.current) { ignoreRef.current = false; return; }
        setSlideIndex(e.data.slideIndex);
        if (contentRef.current) contentRef.current.scrollTop = 0;
      }
    };
    ch.postMessage({ type: 'TELEPROMPTER_READY' });
    return () => ch.close();
  }, []);

  const broadcast = useCallback((idx: number) => {
    ignoreRef.current = true;
    channelRef.current?.postMessage({ type: 'SLIDE_CHANGE', slideIndex: idx, source: 'teleprompter' });
  }, []);

  // ── Auto-scroll ──────────────────────────────────────────────
  useEffect(() => {
    if (!autoScroll) return;
    const tick = () => {
      if (contentRef.current) contentRef.current.scrollTop += scrollSpeed * 0.5;
      scrollRef.current = requestAnimationFrame(tick);
    };
    scrollRef.current = requestAnimationFrame(tick);
    return () => { if (scrollRef.current) cancelAnimationFrame(scrollRef.current); };
  }, [autoScroll, scrollSpeed]);

  // Reset scroll position on slide change — but KEEP autoScroll state
  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [slideIndex]);

  // ── Navigation ───────────────────────────────────────────────
  const goToSlide = useCallback((idx: number) => {
    const c = Math.max(0, Math.min(speakerNotes.length - 1, idx));
    setSlideIndex(c);
    broadcast(c);
  }, [broadcast]);

  const toggleLang = useCallback(() => setLang((p) => (p === 'tr' ? 'en' : 'tr')), []);

  // ── Keyboard ─────────────────────────────────────────────────
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L') toggleLang();
      if (e.key === 's' || e.key === 'S') setAutoScroll((p) => !p);
      if (e.key === '+' || e.key === '=') setFontSize((p) => Math.min(72, p + 2));
      if (e.key === '-' || e.key === '_') setFontSize((p) => Math.max(20, p - 2));
      if (e.key === 'ArrowUp')    setScrollSpeed((p) => +(Math.min(5,   p + 0.1)).toFixed(1));
      if (e.key === 'ArrowDown')  setScrollSpeed((p) => +(Math.max(0.1, p - 0.1)).toFixed(1));
      if (e.key === 'ArrowRight') setSlideIndex((p) => { const n = Math.min(speakerNotes.length - 1, p + 1); broadcast(n); return n; });
      if (e.key === 'ArrowLeft')  setSlideIndex((p) => { const n = Math.max(0, p - 1); broadcast(n); return n; });
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [toggleLang, broadcast]);

  // ── Derived ──────────────────────────────────────────────────
  const palette  = SLIDE_PALETTES[slideIndex] ?? SLIDE_PALETTES[0];
  const note     = speakerNotes[slideIndex];
  const text     = note ? note[lang] : '';
  const progress = ((slideIndex + 1) / speakerNotes.length) * 100;

  const noise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

  // Glass styles
  const glassHeavy = {
    background:              'rgba(0,0,0,0.58)',
    backdropFilter:          'blur(48px) saturate(180%)',
    WebkitBackdropFilter:    'blur(48px) saturate(180%)',
    border:                  '1px solid rgba(255,255,255,0.09)',
  } as React.CSSProperties;

  const glassMid = {
    background:              'rgba(0,0,0,0.44)',
    backdropFilter:          'blur(60px) saturate(180%)',
    WebkitBackdropFilter:    'blur(60px) saturate(180%)',
    border:                  '1px solid rgba(255,255,255,0.07)',
  } as React.CSSProperties;

  return (
    <div
      className={`fixed inset-0 overflow-hidden select-none ${jakarta.className}`}
    >
      {/* ══ BG BASE ════════════════════════════════════════════ */}
      <div className="absolute inset-0 transition-colors duration-700 ease-out" style={{ background: palette.bg }} />

      {/* Blob 1 — top right */}
      <div
        className="absolute rounded-full opacity-45 blur-[130px] pointer-events-none transition-[background] duration-700"
        style={{ width: '72vmax', height: '72vmax', background: palette.accent, top: '-18%', right: '-12%', animation: 'b1 22s ease-in-out infinite' }}
      />
      {/* Blob 2 — bottom left */}
      <div
        className="absolute rounded-full opacity-35 blur-[110px] pointer-events-none transition-[background] duration-700"
        style={{ width: '58vmax', height: '58vmax', background: palette.glow, bottom: '-22%', left: '-16%', animation: 'b2 28s ease-in-out infinite' }}
      />
      {/* Blob 3 — centre drift */}
      <div
        className="absolute rounded-full opacity-20 blur-[90px] pointer-events-none transition-[background] duration-700"
        style={{ width: '38vmax', height: '38vmax', background: palette.accent, top: '35%', left: '45%', animation: 'b3 19s ease-in-out infinite' }}
      />

      {/* Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.13] mix-blend-overlay" style={{ backgroundImage: noise }} />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.055]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* ══ LAYOUT ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col h-full p-4 gap-2.5">

        {/* ─ HEADER ─────────────────────────────────────────── */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 rounded-2xl" style={glassHeavy}>
          {/* Left: slide info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: palette.accent, boxShadow: `0 0 10px ${palette.accent}88` }}
              />
            </div>
            <div className="w-px h-5 bg-white/10" />
            <span className={`text-white/70 text-sm tabular-nums tracking-wide font-semibold ${jetbrains.className}`}>
              {String(slideIndex + 1).padStart(2, '0')}<span className="text-white/30">/{speakerNotes.length}</span>
            </span>
            <div className="w-px h-5 bg-white/10" />
            <span className="text-white/55 text-sm font-semibold tracking-wide">
              {SLIDE_LABELS[slideIndex]}
            </span>
          </div>

          {/* Right: controls */}
          <div className="flex items-center gap-2">
            {/* Font size */}
            <Pill onClick={() => setFontSize((p) => Math.max(20, p - 2))}>A−</Pill>
            <span className={`text-white/40 text-[11px] w-7 text-center tabular-nums font-semibold ${jetbrains.className}`}>{fontSize}</span>
            <Pill onClick={() => setFontSize((p) => Math.min(72, p + 2))}>A+</Pill>

            <Divider />

            {/* Scroll toggle */}
            <button
              onClick={() => setAutoScroll((p) => !p)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-200"
              style={autoScroll ? {
                background: `${palette.accent}30`,
                border: `1px solid ${palette.accent}66`,
                color: palette.accent,
                boxShadow: `0 0 20px ${palette.accent}30`,
              } : {
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.50)',
              }}
            >
              {autoScroll ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: palette.accent }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: palette.accent }} />
                  </span>
                  {scrollSpeed.toFixed(1)}×
                </>
              ) : (
                <>
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Scroll
                </>
              )}
            </button>

            {autoScroll && (
              <div className="flex items-center gap-1">
                <Pill onClick={() => setScrollSpeed((p) => +(Math.max(0.1, p - 0.1)).toFixed(1))}>−</Pill>
                <Pill onClick={() => setScrollSpeed((p) => +(Math.min(5.0, p + 0.1)).toFixed(1))}>+</Pill>
              </div>
            )}

            <Divider />

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="relative rounded-full overflow-hidden transition-all duration-200"
              style={{ width: 76, height: 34, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <div
                className="absolute top-[3px] rounded-full transition-all duration-300 ease-out"
                style={{
                  width: 34,
                  height: 28,
                  left: lang === 'tr' ? 3 : 'calc(100% - 37px)',
                  background: palette.accent,
                  boxShadow: `0 0 14px ${palette.accent}55`,
                }}
              />
              <div className="relative flex items-center justify-between px-3 h-full text-[11px] font-black tracking-[0.12em]">
                <span className="transition-colors duration-300" style={{ color: lang === 'tr' ? '#fff' : 'rgba(255,255,255,0.45)' }}>TR</span>
                <span className="transition-colors duration-300" style={{ color: lang === 'en' ? '#fff' : 'rgba(255,255,255,0.45)' }}>EN</span>
              </div>
            </button>
          </div>
        </div>

        {/* ─ PROGRESS ──────────────────────────────────────── */}
        <div className="shrink-0 h-[2px] rounded-full mx-2 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${palette.accent}, ${palette.glow})`,
              boxShadow: `0 0 10px ${palette.accent}55`,
            }}
          />
        </div>

        {/* ─ TEXT PANEL ────────────────────────────────────── */}
        <div className="flex-1 rounded-2xl overflow-hidden relative" style={glassMid}>
          {/* Top vignette */}
          <div
            className="absolute top-0 left-0 right-0 h-14 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)' }}
          />

          {/* Scrollable */}
          <div
            ref={contentRef}
            className="h-full overflow-y-auto px-[7%] py-12"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="text-white/[0.93] max-w-none">
              <HighlightedText text={text} accent={palette.accent} size={fontSize} />
            </div>
            <div style={{ height: '55vh' }} />
          </div>

          {/* Bottom vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }}
          />
        </div>

        {/* ─ FOOTER ────────────────────────────────────────── */}
        <div className="shrink-0 flex items-center justify-between px-6 py-3.5 rounded-2xl" style={glassHeavy}>
          {/* Dots */}
          <div className="flex items-center gap-[7px]">
            {SLIDE_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                title={label}
                className="transition-all duration-300 rounded-full"
                style={{
                  width:  i === slideIndex ? 22 : 7,
                  height: 7,
                  borderRadius: 3.5,
                  background: i === slideIndex ? palette.accent : 'rgba(255,255,255,0.25)',
                  boxShadow: i === slideIndex ? `0 0 10px ${palette.accent}66` : 'none',
                }}
              />
            ))}
          </div>

          {/* Shortcut hints */}
          <div className={`flex items-center gap-4 text-white/35 text-[10px] ${jetbrains.className}`}>
            {[
              ['L', 'dil'],
              ['S', 'scroll'],
              ['+/−', 'font'],
              ['←→', 'slayt'],
              ['↑↓', 'hız'],
            ].map(([key, label]) => (
              <span key={key} className="flex items-center gap-1.5">
                <kbd className="inline-flex items-center justify-center min-w-[22px] h-[20px] px-1.5 rounded-md text-white/55 text-[9px] font-bold" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  {key}
                </kbd>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CSS ANIMATIONS ══════════════════════════════════════ */}
      <style>{`
        @keyframes b1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-45px, 35px) scale(1.06); }
          66%      { transform: translate(25px, -25px) scale(0.94); }
        }
        @keyframes b2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(35px, -45px) scale(1.09); }
          66%      { transform: translate(-30px, 18px) scale(0.91); }
        }
        @keyframes b3 {
          0%,100% { transform: translate(-50%,0) scale(1); }
          50%      { transform: translate(-50%,-35px) scale(1.12); }
        }
        *::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Pill({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-lg flex items-center justify-center text-white/60 text-xs font-bold transition-all duration-150 hover:text-white/80 hover:bg-white/15 active:scale-95"
      style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.10)' }}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-5 mx-1" style={{ background: 'rgba(255,255,255,0.12)' }} />;
}
