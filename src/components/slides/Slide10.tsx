import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function SystemMetricSummarySlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#FAF8F3] relative overflow-hidden font-sans text-[#1A1A2E]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#2C51F0] text-[3vh] tracking-wide z-30">
        System-Level Summary
      </div>
      <div className="absolute top-[5.5vh] left-[26vw] text-[#1A1A2E]/40 font-medium text-[1.8vh] tracking-wide z-30">
        BBM485 · T2
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#E65C41] font-bold text-[2.2vh] tracking-widest z-30">
        /(05-D1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[13vh] left-[4vw] z-30">
        <h1 className="text-[9vh] font-black leading-[0.82] tracking-tighter">
          Healthy Medians.
          <br />
          <span className="text-[#2C51F0]">Catastrophic Max.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[14vh] right-[16vw] z-30 leading-none text-[#2C51F0]">
        <DecorativeAsterisk className="w-[7vh] h-[7vh]" />
      </div>

      {/* === BENTO GRID === */}
      <div className="absolute left-[3vw] right-[3vw] top-[32vh] bottom-[10vh] grid grid-cols-[1.4fr_1fr] grid-rows-[1.1fr_1fr] gap-[2vh] z-20">
        {/* Card 1: Dark Navy — 100 KLOC */}
        <div className="bg-[#1A1A2E] rounded-[3vh] p-[4vh] flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <CardArrow />
          <div className="relative z-10 mt-auto">
            <div className="text-[10vh] font-black leading-none tracking-tighter text-[#F4EFE2]">
              100<span className="text-[#E65C41]">K</span>
            </div>
            <span className="text-[2.1vh] font-bold text-[#F4EFE2]/75 tracking-tight mt-[1vh] block">
              Lines Of Code Across
              <br />
              672 Java Classes
            </span>
          </div>
        </div>

        {/* Card 2: Coral — LCOM Max */}
        <div className="bg-[#E65C41] rounded-[3vh] p-[4vh] flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <CardArrow />
          <div className="relative z-10 mt-auto">
            <div className="text-[8vh] font-black leading-none tracking-tighter text-[#F4EFE2]">
              7,690
            </div>
            <span className="text-[2.1vh] font-bold text-[#F4EFE2]/75 tracking-tight mt-[1vh] block">
              Worst LCOM Value
              <br />
              In The Codebase
            </span>
          </div>
        </div>

        {/* Card 3: Emerald — Median LOC */}
        <div className="bg-[#1B8A6B] rounded-[3vh] p-[4vh] flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <CardArrow />
          <div className="relative z-10 mt-auto">
            <div className="text-[8vh] font-black leading-none tracking-tighter text-[#F4EFE2]">
              52
            </div>
            <span className="text-[2.1vh] font-bold text-[#F4EFE2]/75 tracking-tight mt-[1vh] block">
              Median Lines Per
              <br />
              Class — Healthy
            </span>
          </div>
        </div>

        {/* Card 4: Blue — Right skew */}
        <div className="bg-[#2C51F0] rounded-[3vh] p-[4vh] flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <CardArrow />
          <div className="relative z-10 mt-auto">
            <div className="text-[8vh] font-black leading-none tracking-tighter text-[#F4EFE2]">
              Right<span className="text-[#F59E0B]">↗</span>
            </div>
            <span className="text-[2.1vh] font-bold text-[#F4EFE2]/75 tracking-tight mt-[1vh] block">
              Heavy Skew — Mean
              <br />
              Far From Median
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-[4vh] left-[4vw] flex items-center gap-[1.5vw] z-30 w-[42vw]">
        <div className="w-[3vw] h-[3px] bg-[#2C51F0] flex-shrink-0" />
        <p className="text-[1.5vh] leading-[1.6] text-[#1A1A2E]/50 font-medium tracking-wide">
          Most Classes Are Well-Designed — But Extreme Max
          Values Reveal A God Class Anti-Pattern Hiding Inside.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[4vh] right-[4vw] flex items-center z-30">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#2C51F0] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg z-10">
          S
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg -ml-[1.8vh] z-0">
          M
        </div>
      </div>

      {/* === TEXTURE LAYERS (light variant) === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(26, 26, 46, 0.04) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.1] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}

function CardArrow() {
  return (
    <svg
      className="w-[3.5vh] h-[3.5vh] self-end relative z-10 text-[#F4EFE2]/50"
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
