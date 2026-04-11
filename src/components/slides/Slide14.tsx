import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function ThankYouSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#A83255] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === NESTED FRAMES — rounded rectangle outlines === */}
      <div className="absolute inset-[6cqh] rounded-[5cqh] border-[2px] border-[#F4EFE2]/12 z-[5]" />
      <div className="absolute inset-[14cqh] rounded-[4cqh] border-[2px] border-[#F4EFE2]/08 z-[5]" />

      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#F9D74A] text-[3cqh] tracking-wide z-20">
        Closing
      </div>
      <div className="absolute top-[5.5cqh] left-[22cqw] text-[#F4EFE2]/60 font-medium text-[1.8cqh] tracking-wide z-20">
        Disqet Design
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#F9D74A] font-bold text-[2.2cqh] tracking-widest z-20">
        /(14-D1*)
      </div>

      {/* === CENTRAL TYPOGRAPHIC HERO === */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <h1 className="text-[18cqh] font-black leading-[0.75] tracking-tighter">
            Thank
            <br />
            <span className="text-[#F9D74A]">You.</span>
          </h1>
          <p className="text-[2.4cqh] font-bold leading-[1.2] mt-[4cqh] tracking-tight text-[#F4EFE2]/85">
            Let&apos;s build something
            <br />
            extraordinary together.
          </p>
        </div>
      </div>

      {/* Gold accent circle — top left area */}
      <div className="absolute top-[14cqh] left-[12cqw] w-[14cqh] h-[14cqh] rounded-full bg-[#F9D74A] shadow-2xl z-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <DecorativeAsterisk className="w-[5.5cqh] h-[5.5cqh] text-[#A83255] shrink-0 relative z-10" />
      </div>

      {/* Dark circle — bottom right */}
      <div className="absolute bottom-[16cqh] right-[10cqw] w-[12cqh] h-[12cqh] rounded-full bg-[#1A1A2E] shadow-xl z-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <svg
          className="w-[5cqh] h-[5cqh] text-[#F4EFE2] relative z-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>

      {/* Contact info — bottom left */}
      <div className="absolute bottom-[8cqh] left-[4cqw] z-20">
        <p className="text-[2cqh] font-bold leading-[1.3] tracking-tight">
          <span className="text-[#F9D74A]">hello@disqet.design</span>
          <br />
          Istanbul, Turkiye
        </p>
        <span className="text-[#F4EFE2]/55 text-[1.5cqh] font-medium mt-[1cqh] block tracking-wide">
          @disqetdesign
        </span>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#F9D74A] flex items-center justify-center font-black text-[3.2cqh] text-[#A83255] shadow-lg z-10">
          D
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#1A1A2E] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg -ml-[1.8cqh] z-0">
          S
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(244,239,219,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.22] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
