import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function GQMSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: '26px 26px',
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#0B1A3A] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* Giant ghost watermark */}
      <div className="absolute top-[8cqh] right-[4cqw] text-[52cqh] font-black leading-none tracking-tighter text-[#F4EFE2]/[0.03] z-0 select-none">
        GQM
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#E8B83D] text-[3cqh] tracking-wide z-20">
        Methodology
      </div>
      <div className="absolute top-[5.5cqh] left-[28cqw] text-[#E8B83D] font-medium text-[1.8cqh] tracking-wide z-20">
        BBM485 · G05
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#E65C41] font-bold text-[2.2cqh] tracking-widest z-20">
        /(03-D1*)
      </div>

      {/* Main heading */}
      <div className="absolute top-[13cqh] left-[4cqw] z-20">
        <h1 className="text-[9cqh] font-black leading-[0.82] tracking-tighter">
          Goal · Question
          <br />
          <span className="text-[#E8B83D]">Metric Tree.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[13cqh] right-[20cqw] z-20 leading-none text-[#E8B83D]">
        <DecorativeAsterisk className="w-[7cqh] h-[7cqh]" />
      </div>

      {/* === ZIGZAG STACKED BARS === */}
      <div className="absolute top-[35cqh] left-0 right-0 flex flex-col gap-[1.8cqh] px-[3cqw] z-20">
        {/* Bar 1 — Coral — Left */}
        <div className="relative rounded-[2.5cqh] py-[2.8cqh] px-[4cqw] flex items-center justify-between overflow-hidden shadow-xl mr-auto w-[90%] bg-[#E65C41]">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-center gap-[3cqw]">
            <span className="text-[5.5cqh] font-black leading-none tracking-tighter opacity-90">
              Q1
            </span>
            <div>
              <span className="text-[2.8cqh] font-black leading-none tracking-tight">
                Size · LOC
              </span>
              <span className="text-[1.5cqh] font-medium ml-[1.5cqw] text-[#F4EFE2]/85 tracking-wide">
                Lines of Code per class — baseline for any maintainability question
              </span>
            </div>
          </div>
          <ArrowIcon />
        </div>

        {/* Bar 2 — Blue — Right */}
        <div className="relative rounded-[2.5cqh] py-[2.8cqh] px-[4cqw] flex items-center justify-between overflow-hidden shadow-xl ml-auto w-[84%] bg-[#2A7DE1]">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-center gap-[3cqw]">
            <span className="text-[5.5cqh] font-black leading-none tracking-tighter opacity-90">
              Q2
            </span>
            <div>
              <span className="text-[2.8cqh] font-black leading-none tracking-tight">
                Coupling · CBO
              </span>
              <span className="text-[1.5cqh] font-medium ml-[1.5cqw] text-[#F4EFE2]/85 tracking-wide">
                How many classes depend on each other — measures fragility and ripple risk
              </span>
            </div>
          </div>
          <ArrowIcon />
        </div>

        {/* Bar 3 — Gold — Left (dark text) */}
        <div className="relative rounded-[2.5cqh] py-[2.8cqh] px-[4cqw] flex items-center justify-between overflow-hidden shadow-xl mr-auto w-[88%] bg-[#E8B83D]">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-center gap-[3cqw]">
            <span className="text-[5.5cqh] font-black leading-none tracking-tighter text-[#0B1A3A] opacity-90">
              Q3
            </span>
            <div>
              <span className="text-[2.8cqh] font-black leading-none tracking-tight text-[#0B1A3A]">
                Complexity · WMC & RFC
              </span>
              <span className="text-[1.5cqh] font-medium ml-[1.5cqw] text-[#0B1A3A]/80 tracking-wide">
                Structural and behavioral complexity — testability and bug concentration
              </span>
            </div>
          </div>
          <ArrowIcon dark />
        </div>

        {/* Bar 4 — Emerald — Right */}
        <div className="relative rounded-[2.5cqh] py-[2.8cqh] px-[4cqw] flex items-center justify-between overflow-hidden shadow-xl ml-auto w-[82%] bg-[#1B8A6B]">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-center gap-[3cqw]">
            <span className="text-[5.5cqh] font-black leading-none tracking-tighter opacity-90">
              Q4
            </span>
            <div>
              <span className="text-[2.8cqh] font-black leading-none tracking-tight">
                Structure · LCOM, DIT, NOC
              </span>
              <span className="text-[1.5cqh] font-medium ml-[1.5cqw] text-[#F4EFE2]/85 tracking-wide">
                Cohesion and inheritance — encapsulation and reuse quality
              </span>
            </div>
          </div>
          <ArrowIcon />
        </div>
      </div>

      {/* Bottom description */}
      <div className="absolute bottom-[3cqh] left-[4cqw] flex items-start gap-[1.5cqw] z-20 w-[40cqw]">
        <div className="w-[3cqw] h-[3px] bg-[#E8B83D] mt-[1cqh] flex-shrink-0" />
        <p className="text-[1.6cqh] leading-[1.65] text-[#F4EFE2]/80 font-medium tracking-wide">
          Our Goal Is Maintainability From An Architect&apos;s
          <br />
          Viewpoint. We Split It Into Four Concrete Questions
          <br />
          And Map Each One Strictly To Core C&amp;K Metrics.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg z-10">
          G
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#2A7DE1] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg -ml-[1.8cqh] z-0">
          Q
        </div>
      </div>

      {/* Texture layers */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={dotsStyle}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.25] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}

function ArrowIcon({ dark }: { dark?: boolean }) {
  return (
    <svg
      className={`relative z-10 w-[3.5cqh] h-[3.5cqh] flex-shrink-0 ${
        dark ? 'text-[#0B1A3A]/40' : 'text-[#F4EFE2]/50'
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  );
}
